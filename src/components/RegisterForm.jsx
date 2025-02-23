import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function RegisterForm({ onSubmit, errorMessage }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {errorMessage && (
                <div className="mb-4 text-red-500 text-sm text-center">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none disabled:opacity-50"
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>

              <div className="text-center mt-4">
                <span className="text-gray-600">Already have an account? </span>
                <a href="/login" className="text-blue-500 hover:text-blue-700">
                  Login
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}