import React, { Fragment } from "react";

const ButtonComponent = ({ type, label, onClick }) => {
  return (
    <Fragment>
      <div className="w-full">
        <button
          type={type}
          className="w-full box-border bg-red-800 text-white p-2 trans active:translate-y-0.5"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    </Fragment>
  );
};

export default ButtonComponent;
