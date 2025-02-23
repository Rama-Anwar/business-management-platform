import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let emailExists = users.some((user) => user.email === values.email);

      if (emailExists) {
        setErrorMessage(
          "Email already exists, please use a different email or login to your account."
        );
        setSubmitting(false);
        return;
      }

      const newUser = {
        ...values,
        isBlocked: false,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setErrorMessage("");

      await new Promise((resolve) => setTimeout(resolve, 1000));
      resetForm();
      window.location.href = '/dashboard';
      
    } catch (error) {
      setErrorMessage("An error occurred during registration. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return <RegisterForm onSubmit={onSubmit} errorMessage={errorMessage} />;
}