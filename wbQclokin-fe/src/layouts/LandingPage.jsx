import React, { useEffect } from "react";
import ForgetPasswordModal from "../components/modals/ForgetPasswordModal";
import { useLocation, useSearchParams, Link, Outlet } from "react-router-dom";
import ResetPasswordModal from "../components/modals/ResetPasswordModal";
import SideStructureSvg from "../assets/SideStructureSvg";

const LandingPage = () => {
  const location = useLocation();
  // const [searchParams] = useSearchParams();

  // // Extract the 'token' parameter from the URL
  // const token = searchParams.get("token");

  const fullUrl = location.pathname;

  // useEffect(() => {
  //   // Log the current URL to the console (optional)
  //   console.log("Current URL:", fullUrl);
  //   console.log("Token:", token);

  //   if (fullUrl == "/register") {
  //     console.log("hellow");
  //   }
  // }, [location, token]);

  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Column */}
        <div className="relative flex-1 bg-[#c18ce9] flex items-center justify-center">
          <div className="absolute top-0 right-0">
              <SideStructureSvg/>
          </div>
          {fullUrl == "/register" ? (
            <div className="text-center leading-10">
            <h1 className="text-xl font-bold">Already Signed Up?</h1>
            <p>Sign in now to access your account</p>
            <Link
              to="/"
              className="inline-block border border-black pl-4 pr-4 rounded-md "
            >
              Sign in Here
            </Link>
            
          </div>

          ) : (
            <div className="text-center leading-10">
              <h1 className="text-xl font-bold">Don't Have an Account Yet?</h1>
              <p>Register now to get started.</p>
              <Link
                to="/register"
                className="inline-block border border-black pl-4 pr-4 rounded-md "
              >
                Register Now
              </Link>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="flex-1 bg-white flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
