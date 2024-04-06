import React from "react";
import Class from "./Input.module.css";

const Input = (props) => {
  const { value, placeholder, onChange } = props;

  return (
    <input
      className={Class.myInput}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
