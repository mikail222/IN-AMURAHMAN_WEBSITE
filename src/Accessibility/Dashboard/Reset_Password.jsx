import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import irehv1 from "../../asset/irehv-low-resolution-logo-white-on-transparent-background.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { useNavigate } from "react-router-dom";

const Reset_Password = () => {
  const [resetEmail, setResetEmail] = useState(" ");
  const navigate = useNavigate();

  const email = resetEmail;
  const handleResetPassword = (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error); // ..
      });
  };
  return (
    <div className="modal">
      <div className="modalBg">
        <div className="modalContainer">
          <img src={irehv1} alt="" className="irehvModal" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
            alt=""
            className=" avartaIcon "
          />
          <h6>Forget Password? </h6>
          <div className="resetArrow">
            <RiLockPasswordLine className="resetArrowIcon" />
            <input
              type="text"
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <HiOutlineArrowNarrowRight
              className="resetArrowIcon"
              onClick={handleResetPassword}
            />
          </div>
          <div className="buttonContainer">
            <button type="button" onClick={handleResetPassword}>
              {" "}
              Reset Password
            </button>
            <button
              type="button"
              onClick={() => navigate("/Login") && setShowNav(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset_Password;
