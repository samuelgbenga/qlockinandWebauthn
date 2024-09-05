import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import QlocinIn from "../../assets/QlocinIn";
import { Eye, EyeOff } from "react-feather";
import { loginFinish, loginStart } from "../../api/loginStart";

function base64UrlEncode(bytes) {
  // Convert bytes to Base64 string
  let base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(bytes)));
  // Replace Base64 characters with URL-safe characters
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [response, setResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setIsLoading(true);
    let resp = null;
    try {
      resp = await login(userData, {});
      setResponse(resp);
    } catch (error) {
      console.error("Error creating post:", error);
      setErrorMessage("An error occured!");
    } finally {
      setIsLoading(false);
    }

    console.log(userData);
    emailRef.current.value = "";
    passwordRef.current.value = "";

    if (resp?.loginInfo.token) {
      localStorage.setItem("token", resp.loginInfo.token);
      navigate("/dashboard");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = emailRef.current.value;

    try {
      //step 1 get the server challenge
      const response = await loginStart(username);

      //const data = await response;
      const data = await response;

      //console.log(data);
      const publicKey = data.key; // This is the challenge data

      console.log(publicKey.publicKey.allowCredentials[0].id);
      //step 2 send the challenge to the plateform Authenticator
      const assertionOptions = {
        challenge: Uint8Array.from(
          atob(
            publicKey.publicKey.challenge.replace(/_/g, "/").replace(/-/g, "+")
          ),
          (c) => c.charCodeAt(0)
        ),
        rpId: publicKey.publicKey.rpId,
        allowCredentials: publicKey.publicKey.allowCredentials.map((cred) => ({
          type: cred.type,
          id: Uint8Array.from(
            atob(cred.id.replace(/-/g, "+").replace(/_/g, "/")),
            (c) => c.charCodeAt(0)
          ),
        })),
        timeout: 60000,
        userVerification: publicKey.publicKey.userVerification,
      };

      // console.log(assertionOptions);
      //step 3 get the challenge from the authenticator device second
      const credential = await navigator.credentials.get({
        publicKey: assertionOptions,
      });

      //data.handle = atob(data.handle.replace(/-/g, "+").replace(/_/g, "/"));
      let str = data.handle;
      let str1 = str.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, "");

      console.log("from authenticator: ", str1);

      // Step 4: Structure the credential in an acceptable format
      const credentialResponse = {
        id: credential.id,
        response: {
          authenticatorData: base64UrlEncode(
            new Uint8Array(credential.response.authenticatorData)
          ),
          clientDataJSON: base64UrlEncode(
            new Uint8Array(credential.response.clientDataJSON)
          ),
          signature: base64UrlEncode(
            new Uint8Array(credential.response.signature)
          ),
          userHandle: credential.response.userHandle
            ? base64UrlEncode(new Uint8Array(credential.response.userHandle))
            : base64UrlEncode(
                Uint8Array.from(atob(str1), (c) => c.charCodeAt(0))
              ),
        },
        clientExtensionResults: credential.getClientExtensionResults(),
        type: credential.type,
      };

      // step 5 send the challenge or credential back to the server
      const result = await loginFinish(username, credentialResponse);

      let resp = null;
      // sixt division
      if (result) {
        const userData = {
          email: emailRef.current.value,
          password: publicKey.publicKey.allowCredentials[0].id,
        };

        try {
          resp = await login(userData, {});
          setResponse(resp);
          console.log("login successful");
        } catch (error) {
          console.error("Error creating post:", error);
          setErrorMessage("An error occured!");
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log("Login Failed");
      }

      if (resp?.loginInfo.token) {
        localStorage.setItem("token", resp.loginInfo.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000); // 3000ms = 3 seconds

      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
  }, [errorMessage]);

  // useEffect(() => {
  //  response && console.log(response.loginInfo.token)
  // }, [response])

  return (
    // <div>
    //   <div className="flex justify-center items-center p-4">
    //     <div className="bg-white p-6 rounded-lg shadow-lg min-w-[400px] w-full">
    //       {/* Replace with your actual component */}
    //       <div className="mb-4 flex justify-center">
    //         <QlocinIn />
    //       </div>
    //       <div className="mb-6 text-center">
    //         <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>

    //         {errorMessage && (
    //           <p className="text-[#6A0DAD] text-[12px]">{errorMessage}</p>
    //         )}
    //       </div>

    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <label className="block">
    //           <span className="">Email</span>
    //           <div>
    //             <input
    //               ref={emailRef}
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //               required
    //             />
    //           </div>
    //         </label>

    //         <label className="block">
    //           <span className="">Password</span>
    //           <div className="relative">
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               ref={passwordRef}
    //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //               required
    //             />
    //             <span
    //               onClick={handleTogglePassword}
    //               className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer text-gray-300 text-sm"
    //             >
    //               {showPassword ? <EyeOff /> : <Eye />}
    //             </span>
    //           </div>
    //         </label>
    //         <Link
    //           className="text-[#6A0DAD] text-xs underline"
    //           to="/forget-password"
    //         >
    //           Forget Password
    //         </Link>
    //         <button
    //           type="submit"
    //           disabled={isLoading}
    //           className={`w-full   py-2 px-4 rounded-md shadow  transition ${
    //             isLoading
    //               ? "bg-[#11011c] text-gray-500"
    //               : "bg-[#6A0DAD] text-white"
    //           }`}
    //         >
    //           Login
    //         </button>
    //       </form>
    //       <p className="text-gray-300 text-xs mt-5">
    //         Dont have an account ?{" "}
    //         <Link to="/register" className="text-[#6A0DAD] text-xs underline">
    //           Sign up here
    //         </Link>{" "}
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="flex justify-center items-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg min-w-[400px] w-full">
          {/* Replace with your actual component */}
          <div className="mb-4 flex justify-center">
            <QlocinIn />
          </div>
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>

            {errorMessage && (
              <p className="text-[#6A0DAD] text-[12px]">{errorMessage}</p>
            )}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="">Email</span>
              <div>
                <input
                  ref={emailRef}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
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
              Login
            </button>
          </form>
          <p className="text-gray-300 text-xs mt-5">
            Dont have an account ?{" "}
            <Link to="/register" className="text-[#6A0DAD] text-xs underline">
              Sign up here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
