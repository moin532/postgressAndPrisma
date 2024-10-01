import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email().required("Email is required"),
  gender: yup.string().required("Gender is required"),
  address: yup.string().required("Address is required"),
  pincode: yup.string().required("Pincode is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});
