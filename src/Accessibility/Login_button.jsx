import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Login_button = () => {
  return (
    <div className="btnContainer">
      {" "}
      <button type="submit" className="sign_upButton">
        Login
        <RiArrowRightSLine className="icon" />
      </button>
    </div>
  );
};

export default Login_button;
