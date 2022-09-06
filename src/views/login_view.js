import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../common/button_component";
import InputComponent from "../common/input_component";

const LoginView = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-1/2 text-center m-auto mt-32">
        <h1 className="text-4xl font-bold text-red-700">
          THE SILLIMAN CONFESSIONS
        </h1>
        <p className="text-base text-gray-600">
          Want to tell something you're afraid to say in public? Say no more.
        </p>
      </div>
      <div className="w-96 m-auto mt-5">
        <InputComponent label="Username" name="username" />
        <InputComponent label="Password" name="password" />
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
        <ButtonComponent label="Log in" onClick={() => navigate("/form")} />
      </div>
    </div>
  );
};

export default LoginView;
