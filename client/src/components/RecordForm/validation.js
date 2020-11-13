import React from "react";
import * as Yup from "yup";
export const initialValues = {
  category: "",
  amount: "",
};

// export const validate = (values) => {
//   let errors = {};

//   if (!values.amount) {
//     errors.amount = "The amount is required";
//   } else if (values.amount <= 0) {
//     errors.amount = "The amount can't be 0!";
//   }

//   return errors;
// };

export const validationSchema = Yup.object({
  amount: Yup.number().required("Required"),
});

export const onSubmit = (values) => {
  console.log("form data: ", values);
};
