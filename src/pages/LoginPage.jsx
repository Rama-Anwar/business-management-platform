import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values, actions) => {
    try {
      const user = checkUserExists(values.email, values.password);

      if (user) {
        if (user.isBlocked) {
          setErrorMessage("Your account has been blocked. Please contact support.");
          return;
        }

        setErrorMessage("");
        console.log("Login Successful! Redirecting to the dashboard ...");
        localStorage.setItem("currentUser", JSON.stringify(values));
        navigate("/dashboard");
      } else {
        setErrorMessage("Invalid Credentials, Register if you don't have an account.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    }
  };

  const checkUserExists = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <LoginForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </div>
  );
}