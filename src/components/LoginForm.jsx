import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { basicSchema } from "../schemas";

export default function LoginForm({ onSubmit, errorMessage }) {
  return (
    <div className="w-full max-w-md">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={basicSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs italic mt-1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs italic mt-1"
              />
            </div>

            {errorMessage && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </button>

              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:text-blue-700 font-medium">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}