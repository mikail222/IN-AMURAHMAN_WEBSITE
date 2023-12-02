import React from "react";
import { Link } from "react-router-dom";
import irehv from "./asset/BrandName_Logo.svg";
import { useState } from "react";
import { auth } from "./firebaseconfig";

const Navbar = ({ navigate, setShowNav }) => {
  const [show, setShow] = useState(false);
  const currentUser = auth.currentUser;
  const handleLogOut = async (e) => {
    const { signOut } = await import("firebase/auth");
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log(" Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="nav">
      <img
        className="irehv"
        src={irehv}
        alt="logo"
        onClick={() => navigate("/")}
      />

      <div className="menuBar_container">
        <div className="dropdown-bar">
          <div className="navs">
            <Link to="Service">
              <p>Service</p>
            </Link>
            <Link to="About_Us">
              <p>About us</p>
            </Link>
            <Link to="Show_Room">
              <p>Products</p>
            </Link>
            <Link to="Booking">
              <p>Book</p>
            </Link>
            <Link to="Blog">
              <p>Blog</p>
            </Link>
            <Link to="Clues">
              <p>Clues</p>
            </Link>
            <Link to="./Contact">
              <p>Ask us</p>
            </Link>
            <div className="userStatus">
              {currentUser === null && (
                <p onClick={() => navigate("/Login")} className="logout">
                  LOGIN
                </p>
              )}{" "}
              {currentUser && currentUser?.emailVerified === true && (
                <div className="dropdown">
                  <p onClick={handleLogOut} className="logout">
                    LOGOUT
                  </p>

                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <Link to="/Dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="Users_Dashboard/User_Profile" className="row">
                          <p>Profile</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div onClick={() => navigate("/Sign_up")} className="getIntouch">
              <p>
                <p>SIGN UP</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
