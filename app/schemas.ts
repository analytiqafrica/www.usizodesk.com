import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  message: yup.string().required("Message is required"),
  email: yup
    .string()
    .required("Email address is required")
    .email("Please enter a valid email address"),
});

export const subscriptionFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  message: yup.string(),
  email: yup
    .string()
    .required("Email address is required")
    .email("Please enter a valid email address"),
});
