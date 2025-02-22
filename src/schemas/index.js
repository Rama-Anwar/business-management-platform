import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    password: yup.string().min(4, "Please create a stronger password").required(),

})

export const basicSchema2 = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().min(4, "Please create a stronger password").required(),
  name: yup.string().required("Please Enter you name")
});