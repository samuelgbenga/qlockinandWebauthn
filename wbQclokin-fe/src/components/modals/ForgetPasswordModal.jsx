import React, { useEffect, useRef, useState } from "react";
import { forgetPassword } from "../../api/forgetpassword";
import { Link } from "react-router-dom";
import QlocinIn from "../../assets/QlocinIn";
import EmailSuccess from "../../assets/EmailSuccess";
import ContinueArrow from "../../assets/ContinueArrow";

const ForgetPasswordModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: emailRef.current.value,
    };

    setIsLoading(true);
    try {
      const resp = await forgetPassword(userData, {});
      setResponse(resp);
    } catch (error) {
      console.error("Error Reseting password:", error);
      setErrorMessage("Wrong Credentials!")
    } finally {
      setIsLoading(false);
    }

    emailRef.current.value = "";
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
            <p className="text-gray-300 text-[12px]">
              Enter your Email address below and we will send you a link to
              reset your password.
            </p>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="">Email</span>
            <input
              type="email"
              ref={emailRef}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full  py-2 px-4 rounded-md shadow  transition ${
              isLoading ? "bg-[#11011c] text-gray-500" : "bg-[#6A0DAD] text-white "
            }`}
          >
            Send password reset link
          </button>
        </form>

        <div className="mt-6 text-center text-gray-300 text-[12px]">
          Go back to{" "}
          <Link to="/register" className="text-[#6A0DAD] underline ">
            Sign in
          </Link>
        </div>
      </div>

      {response && <SendToEmailSuccess />}
    </div>
  );
};

export default ForgetPasswordModal;

const SendToEmailSuccess = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <div className="flex justify-center">
          <EmailSuccess />
        </div>

        <p className="my-6">Check your email!</p>
        <div className=" bg-[#6A0DAD] text-white py-2 mx-7 rounded-md shadow-md text-sm flex justify-center items-center gap-2">
          <ContinueArrow />
          <a href="https://myaccount.google.com/">Continue</a>
        </div>
      </div>
    </div>
  );
};
