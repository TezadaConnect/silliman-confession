import { useFormik } from "formik";
import React from "react";
// import { useNavigate } from "react-router-dom";
import ButtonComponent from "../common/button_component";
import InputComponent from "../common/input_component";
import * as Yup from "yup";

const LoginView = () => {
  // const navigate = useNavigate();
  const formHandler = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .typeError("Invalid input")
        .required("This field is required"),
      password: Yup.string()
        .typeError("Invalid input")
        .required("This field is required"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <div className="w-full bg-gray-100">
      <div className="w-1/2 text-center m-auto mt-32">
        <h1 className="text-4xl font-bold text-red-700">
          THE SILLIMAN CONFESSIONS
        </h1>
        <p className="text-base text-gray-600">
          Want to tell something you're afraid to say in public? Say no more.
        </p>
      </div>
      <div className="w-96 m-auto mt-5">
        <InputComponent label="Username" name="username" formik={formHandler} />
        <InputComponent label="Password" name="password" formik={formHandler} />
        <br />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p className="text-sm text-gray-600 cursor-default hover:underline">
              Remember me
            </p>
          </div>
          <div className="text-sm text-gray-600 cursor-default hover:underline">
            Forgot Password?
          </div>
        </div>
        <br />
        <ButtonComponent
          type="submit"
          label="Log in"
          onClick={formHandler.handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginView;
