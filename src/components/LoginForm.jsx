import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { basicSchema } from "../schemas";
import "../App.css";

export default function LoginForm({ onSubmit, errorMessage }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={basicSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Login</h2>

          <div>
            <label>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="input-field"
            />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="input-field"
            />
            <ErrorMessage name="password" component="p" className="error" />
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
