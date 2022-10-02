import { useFormik } from "formik";
import React from "react";
import ButtonComponent from "../button_component";
import InputComponent from "../input_component";
import TextAreaComponent from "../textarea_component";
import * as Yup from "yup";

const AddConfessionModal = () => {
  const formHandler = useFormik({
    initialValues: {
      username: "",
      message: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .typeError("Invalid input")
        .required("This field is required"),
      message: Yup.string()
        .typeError("Invalid input")
        .required("This field is required"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <div className="w-full">
      <div className="text-start font-bold mb-3">
        <p className="text-2xl mb-3">Write your Confession</p>
        <hr className="border-gray-300" />
      </div>
      <div className="text-start">
        <TextAreaComponent
          label="Confession Message"
          name="message"
          formik={formHandler}
        />
        <InputComponent
          label="Screen Name"
          name="username"
          formik={formHandler}
        />
      </div>
      <div className="mt-5 mb-2">
        <ButtonComponent
          type="submit"
          label="Submit"
          onClick={formHandler.handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddConfessionModal;
