import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api/register";
import { registerFinish, registerStart } from "../../api/registrationStart";

function base64UrlEncode(bytes) {
  // Convert bytes to Base64 string
  let base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(bytes)));
  // Replace Base64 characters with URL-safe characters
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const RegisterModal = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add further logic to handle the form submission, like sending the data to an API.
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const username = formData.email;

    try {
      //step 1 get the server challenge
      const response = await registerStart(username);

      const data = await response;

      const publicKey = data.key; // This is the challenge data

      //step 2 send the challenge to the plateform Authenticator
      const credentialCreationOptions = {
        challenge: Uint8Array.from(
          atob(
            publicKey.publicKey.challenge.replace(/_/g, "/").replace(/-/g, "+")
          ),
          (c) => c.charCodeAt(0)
        ),
        rp: {
          name: "webauthn1",
          id: "localhost",
        },
        user: {
          id: Uint8Array.from(username, (c) => c.charCodeAt(0)),
          name: username,
          displayName: username,
        },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 }, // ES256
          { type: "public-key", alg: -257 }, // RS256
        ],
        // authenticatorSelection: {
        //   authenticatorAttachment: "platform",
        // },
        timeout: 60000,
        attestation: "direct",
      };

      //step 3 get the challenge from the authenticator device second
      const credential = await navigator.credentials.create({
        publicKey: credentialCreationOptions,
      });

      // step 4 structure the credential in a acceptable
      //formate that would be sent to the server
      const credentialResponse = {
        id: credential.id,
        //rawId: Array.from(new Uint8Array(credential.rawId)),
        //rawId:  base64UrlEncode(new Uint8Array(credential.rawId)),
        response: {
          attestationObject: base64UrlEncode(
            new Uint8Array(credential.response.attestationObject)
          ),
          clientDataJSON: base64UrlEncode(
            new Uint8Array(credential.response.clientDataJSON)
          ),
          //userHandle:  base64UrlEncode(new Uint8Array(credential.response.userHandler))
        },
        clientExtensionResults: credential.getClientExtensionResults(),
        type: credential.type,
      };
      //console.log(credentialResponse)
      const jsonString = JSON.stringify(credentialResponse);
      //console.log(jsonString)

      // step 5 send the challenge or credential back to the server
      const autResponse = await registerFinish(username, jsonString);

      let result = null;
      console.log(autResponse);
      if (autResponse) {
        const userData = {
          ...formData,
          password: credential.id,
          confirmPassword: credential.id,
        };
        // console.log(userData);
        // result = {success: "register successful"}

        try {
          result = await register(userData);
        } catch (error) {
          console.log(error);
        }
      }

      if (result) {
        console.log(result);
      } else {
        console.log("registration failed");
      }

      setMessage("Registration successful");
    } catch (error) {
      console.log("Registration failed:", error);
      setMessage("Registration failed");
    }
  };

  return (
    <div>
      Register Modal
      <br />
      <form onSubmit={handleRegister}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <br />
      <Link to="/">Login</Link>
    </div>
  );
};

export default RegisterModal;
