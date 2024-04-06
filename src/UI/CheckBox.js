import React from "react";
import Class from "./CheckBox.module.css";

const CheckBox = (props) => {
  const { onChange, checked } = props;
  return (
    <input
      className={Class.myCheckBox}
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
  );
};

export default CheckBox;
