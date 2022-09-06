import React from "react";

const TextAreaComponent = ({ name, label, formik, placeholder }) => {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={10}
        className="w-full box-border border-gray-300 border outline-none text-gray-400 focus:text-gray-600 focus:border-gray-400 p-1"
        name={name}
        value={formik?.values[name]}
        onChange={formik?.handleChange}
      />
    </div>
  );
};

export default TextAreaComponent;
