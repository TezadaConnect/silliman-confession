import React, { Fragment } from "react";

const InputComponent = ({ name, label, formik, placeholder }) => {
  return (
    <Fragment>
      <div className="w-full">
        <label className="text-sm text-gray-600">{label}</label> <br />
        <input
          className="w-full box-border border-gray-300 border outline-none text-gray-400 focus:text-gray-600 focus:border-gray-400 p-1 placeholder:text-sm placeholder:text-gray-400"
          placeholder={placeholder}
          name={name}
          value={formik?.values[name]}
          onChange={formik?.handleChange}
        />
        {formik?.touched[name] && formik?.errors[name] ? (
          <p className="text-red-600 text-sm">{formik?.errors[name]}</p>
        ) : null}
      </div>
    </Fragment>
  );
};

export default InputComponent;
