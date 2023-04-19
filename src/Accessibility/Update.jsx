import { deleteUser, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { MdHowToVote } from "react-icons/md";
import profileEditIcon from "../asset/images-removebg-preview.png";
import { auth } from "../firebaseconfig";

const Update = ({ navigate }) => {
  const user = auth.currentUser;
  const [displayName, setdDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoUrl] = useState("");
  const [emailVerified, setEmailVerified] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
      phoneNumber: phoneNumber,
    })
      .then(() => {
        navigate("/Dashboard");
        alert("profile updated");
      })
      .catch((error) => {
        alert(error.message);
      });

    console.log(user);
  };
  const handleDeleteUser = () => {
    deleteUser(user)
      .then(() => {
        alert("User deleted");
        navigate("/") && setShowNav(false);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="bg">
      <div className="modal">
        <div className="updateContainer">
          <form className="accessibleUpdate ">
            <img src={profileEditIcon} alt="" className="avartaIcon" />
            <p>{user?.displayName}</p>
            <div className="inputField">
              <label htmlFor="displayName" className="label"></label>
              <input
                type="text"
                placeholder="Display Name "
                value={displayName}
                onChange={(e) => setdDisplayName(e.target.value)}
              />
              <label htmlFor="email" className="label"></label>
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="photoUrl" className="label">
                {" "}
              </label>{" "}
              <input
                type="file"
                id="fileInput"
                className="updateFile"
                placeholder="Photo url "
                onChange={(e) => setPhotoUrl(e.target.files[0])}
              />
              <label htmlFor="phoneNumber" className="label">
                {" "}
              </label>{" "}
              <input
                type="number"
                placeholder="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="updateButtonContainer">
              <button
                type="button"
                style={{ borderColor: "red", color: "red" }}
                onClick={handleDeleteUser}
              >
                Delete
              </button>
              <button type="button" onClick={() => navigate(-1)}>
                Back
              </button>
              <button type="button" onClick={(e) => handleUpdate(e)}>
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
