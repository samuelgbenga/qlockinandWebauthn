import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../api/resetpassword";
import ErrorPage from "../../pages/ErrorPage";
import QlocinIn from "../../assets/QlocinIn";
import { Eye, EyeOff } from "react-feather";
import SuccessCheck from "../../assets/SuccessCheck";
import GoBackArrow from "../../assets/GoBackArrow";

const ResetPasswordModal = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  // password refs
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Extract the 'token' parameter from the URL
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      token: token,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    setIsLoading(true);
    try {
      const resp = await resetPassword(userData, {});
      setResponse(resp);
    } catch (error) {
      console.error("Error  Reseting password:", error);
      setErrorMessage("An error occured!");
    } finally {
      setIsLoading(false);
    }

    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000); // 3000ms = 3 seconds

      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
  }, [errorMessage]);

  return (
    <div>
      {token ? (
        <>
          <div className="flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg min-w-[400px] w-full">
              {/* Replace with your actual component */}
              <div className="mb-4 flex justify-center">
                <QlocinIn />
              </div>
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold mb-2">Reset your password</h1>

                {errorMessage && (
                  <p className="text-[#6A0DAD] text-[12px]">{errorMessage}</p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="">Password</span>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      ref={passwordRef}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <span
                      onClick={handleTogglePassword}
                      className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer text-gray-300 text-sm"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                </label>

                <label className="block">
                  <span className="">Confirm Password</span>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      ref={confirmPasswordRef}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <span
                      onClick={handleToggleConfirmPassword}
                      className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer text-gray-300 text-sm"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                </label>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full   py-2 px-4 rounded-md shadow  transition ${
                    isLoading
                      ? "bg-[#11011c] text-gray-500"
                      : "bg-[#6A0DAD] text-white"
                  }`}
                >
                  Reset Password
                </button>
              </form>
            </div>
            {response && <ResetSuccessful />}
          </div>
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default ResetPasswordModal;

const ResetSuccessful = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <div className="flex justify-center">
          <SuccessCheck />
        </div>

        <p className="my-6">Password Updated!</p>
        <div className=" bg-[#6A0DAD] text-white py-2 mx-7 rounded-md shadow-md text-sm flex justify-center items-center gap-2">
          <GoBackArrow />
          <Link to="/">Go back to Login</Link>
        </div>
      </div>
    </div>
  );
};
