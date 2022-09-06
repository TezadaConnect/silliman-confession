import React from "react";
import ButtonComponent from "../common/button_component";
import InputComponent from "../common/input_component";
import TextAreaComponent from "../common/textarea_component";
import imgLogo from "../assets/silliman-confe.png";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const FormView = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="lg:w-1/2 lg:m-auto m-2">
        <div>
          <div className="w-full h-28 bg-gray-300 my-2 font-bold text-white text-2xl flex justify-center items-center">
            <p>ADS</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            Welcome <strong>AdminX</strong>
          </div>
          <div
            className="hover:underline cursor-default"
            onClick={() => navigate("/")}
          >
            Logout
          </div>
        </div>
        <div>
          <img src={imgLogo} alt="silliman confession" />
        </div>
        <TextAreaComponent
          placeholder="Enter your confession here."
          label="Message"
          name="message"
        />
        <br />
        <InputComponent
          placeholder="Enter your screen name here."
          label="Screen name"
          name="screen_name"
        />
        <br />
        <div>
          <div className="w-full h-28 bg-gray-300 mt-2 font-bold text-white text-2xl flex justify-center items-center">
            <p>ADS</p>
          </div>
        </div>
        <br />
        <ButtonComponent
          label="Submit"
          onClick={() => {
            MySwal.fire({
              title: <strong>Thank you for sharing!</strong>,
              html: <i>Want to prioritize your confession?</i>,
              icon: "success",
              confirmButtonColor: "rgb(153 27 27)",
              confirmButtonText: "Watch ADS",
              allowEnterKey: true,
              focusDeny: true,
            });
          }}
        />
        <br />
        <br /> <br />
      </div>
    </div>
  );
};

export default FormView;
