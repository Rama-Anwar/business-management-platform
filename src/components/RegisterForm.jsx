import { Formik, Form, Field, ErrorMessage } from "formik";
import "../App.css";
import { basicSchema2 } from "../schemas";

export default function RegisterForm({ onSubmit, errorMessage }) {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={basicSchema2}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Register</h2>

          <div>
            <label>Name</label>
            <Field
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="input-field"
            />
            <ErrorMessage name="name" component="p" className="error" />
          </div>

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
        </Form>
      )}
    </Formik>
  );
}
