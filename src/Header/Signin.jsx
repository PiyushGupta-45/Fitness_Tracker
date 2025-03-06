import React, { useContext } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context

  if (!clientId) {
    console.error("Google Client ID is missing! Check .env file.");
    return <p style={{ color: "red" }}>Error: Missing Google Client ID</p>;
  }

  const handleSuccess = (response) => {
    console.log("Login Success:", response);

    // Decode the JWT token to get user info
    const credential = JSON.parse(atob(response.credential.split(".")[1]));
    console.log("Decoded Credential:", credential);

    // Store email in context (updates UI instantly)
    login(credential.email);
    
    // Redirect to home
    navigate("/");
  };

  const handleFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white dark: text-black p-6 border border-gray-300 rounded-lg shadow-lg w-80 md:w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <GoogleOAuthProvider clientId={clientId}>
          <div className="pt-4">
            <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Signin;
