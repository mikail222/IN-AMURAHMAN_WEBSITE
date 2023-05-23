import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import irehv from "../asset/irehv-low-resolution-logo-white-on-transparent-background.png";

const User_modal = ({ user, setShowNav }) => {
  const [loggedInUserErr, setLoggedInUserErr] = useState();
  const [signOutUser, setSignOutUser] = useState();

  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setSignOutUser(" Sign-out successful, see you later.");
        setTimeout(() => {
          setSignOutUser(null);
        }, 9000) && navigate("/");
      })
      .catch((error) => {
        setLoggedInUserErr(error);
        setTimeout(() => {
          setLoggedInUserErr(null);
        }, 3000);
      });
  };

  const handleNavigation = () => {
    if (currentUser.emailVerified === false) {
      alert("please verify your are the owner of the  email provided");
    } else {
      navigate("/Dashboard");
    }
  };
  return (
    <div className="modalCol">
      <div className="loginNotification">
        {signOutUser && <p>{signOutUser}</p>}
      </div>
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
              {loggedInUserErr && <p>{loggedInUserErr}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_modal;
