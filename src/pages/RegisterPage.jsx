import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
//import { basicSchema2 } from "../schemas";
import "../App.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values, actions) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let emailExists = users.some((user) => user.email === values.email);

    if (emailExists) {
      setErrorMessage(
        "Email already exists, please use a different email or login to your account."
      );
      actions.resetForm();
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
    actions.resetForm();
    navigate("/dashboard");
  };

  return <RegisterForm onSubmit={onSubmit} errorMessage={errorMessage} />;
}
