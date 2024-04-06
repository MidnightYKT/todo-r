import React from "react";
import Cl from "./Button.module.css";

export const ButttonTheme = {
  CLEAR: "clear",
  DANGER: "danger",
};

const Button = (props) => {
  const { children, onClick, disabled, theme = "" } = props;

  return (
    <button
      className={`${Cl.btn} ${Cl[theme]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
