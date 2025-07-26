import * as yup from "yup";

export const validateSchem = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "minLenght")
    .max(6, "maxLenght")
    .required("* required"),
  lastName: yup
    .string()
    .min(3, "minLenght")
    .max(20, "maxLenght")
    .required("* required"),
  gender: yup.string().required("Please choose a gender"),
  email: yup.string().required("Please your email"),
  password: yup
    .string()
    .min(4, "minLenght 4")
    .max(16, "maxLenght 16")
    .required("Please your password"),
});
