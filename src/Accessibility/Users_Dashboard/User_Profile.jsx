import React from "react";
import { auth } from "../../firebaseconfig";
import { MdLocationOn } from "react-icons/md";

const User_Profile = () => {
  const me = auth.currentUser;
  return (
    <div className="profile">
      <div className="profileForm">
        <form className="">
          <h6>Edit Profile</h6>
          <h6>USER INFORMATION</h6>
          <div className="formDiv">
            <div className="userInfo">
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label htmlFor=""> First Name</label>
              <input type="text" />
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
          </div>
          <h6>CONTACT INFORMATION</h6>
          <div className="contactContainer">
            <article className="span">
              <label htmlFor="">Address</label>
              <input type="text" />
            </article>
            <div className="contactInfo">
              <div>
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Country</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Postal Code</label>
                <input type="number" />
              </div>
            </div>
            <h6>ABOUT ME</h6>
            <article>
              <label htmlFor="">About me</label>
              <input type="text" />
            </article>
            <div className="contactInfo">
              <div>
                <label htmlFor="">Institution</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Job</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Position</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="profileImage">
        <div className="myPics">
          <img src={me?.photoURL} alt="" />
        </div>
        <div className="userDetail">
          <h4>{me?.displayName}</h4>
          <MdLocationOn className="location" />
          <p className="scan"></p>
          <h6>Ilorin </h6>
          <h4>Nigeria</h4>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
