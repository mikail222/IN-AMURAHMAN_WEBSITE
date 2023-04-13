import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Button = ({ trackupload }) => {
  return (
    <div className="btnContainer">
      <button
        type="submit"
        disabled={trackupload !== null && trackupload < 100}
        className="sign_upButton"
      >
        {trackupload !== null && trackupload < 100 ? (
          <i> loading...</i>
        ) : (
          "create account"
        )}

        <RiArrowRightSLine className="arrow " />
      </button>
    </div>
  );
};

export default Button;
