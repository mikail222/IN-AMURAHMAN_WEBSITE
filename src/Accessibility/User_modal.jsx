import { async } from "@firebase/util";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseconfig";
import irehv from "../asset/irehv-low-resolution-logo-white-on-transparent-background.png";

const User_modal = ({ user, setShowNav }) => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
        alert(" Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleNavigation = async () => {
    if (currentUser) {
      navigate("/Users_Dashboard");
    } else {
      navigate("/Dashboard");
    }
  };
  return (
    <div className="modal">
      <div className="modalBg">
        <div className="modalContainer">
          <img src={irehv} alt="" className="irehvModal" />
          {currentUser ? (
            <img src={currentUser?.photoURL} alt="" className="avartaIcon" />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
              alt=""
              className=" avartaIcon "
            />
          )}
          <h6>welcome :</h6>
          <h3 className="userText">{currentUser?.displayName}</h3>
          <div className="buttonContainer">
            <button type="button" onClick={() => navigate("/Update")}>
              Update Profile
            </button>
            <button type="button" onClick={handleNavigation}>
              Continue
            </button>
            <button type="button" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_modal;