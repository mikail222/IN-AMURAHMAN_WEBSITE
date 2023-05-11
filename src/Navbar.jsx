import React from "react";
import { Link } from "react-router-dom";
import irehv from "./asset/irehv-low-resolution-logo-color-on-transparent-background.png";
import { useState } from "react";
import { auth } from "./firebaseconfig";
import { signOut } from "firebase/auth";

const Navbar = ({ navigate, setShowNav }) => {
  const [show, setShow] = useState(false);
  const currentUser = auth.currentUser;
  const handleLogOut = (e) => {
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
    <div className="nav" onScroll={{}}>
      <img
        className="irehv"
        src={irehv}
        alt="logo"
        onClick={() => navigate("/")}
      />

      <div className="menuBar_container">
        <div className="dropdown-bar">
          <div className="navs">
            <div className="dropdown">
              <span>Service</span>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to="/Domestic_cleaning">Domestic cleaning</Link>
                  </li>
                  <li>
                    <Link to="/Commercial">Commercial cleaning</Link>
                  </li>
                  <div className="subdropdown">
                    <li>
                      <Link to="/Pest_control">Pest control</Link>
                    </li>
                    <div className="subdropdown-content">
                      <li>
                        <Link to="/Ants">Ant control</Link>
                      </li>
                      <li>
                        <Link to="/Bedbugs">Bedbugs control</Link>
                      </li>
                      <li>
                        <Link to="/Cockroaches">Cockroaches control</Link>
                      </li>
                      <li>
                        <Link to="Mosquitoes">Mosquitoes control</Link>
                      </li>
                      <li>
                        <Link to="/Rodents">Rodents control</Link>
                      </li>
                      <li>
                        <Link to="/Spider">Spider control</Link>
                      </li>
                      <li>
                        <Link to="/Termites">Termites control</Link>
                      </li>
                      <li>
                        <Link to="/Snakes">Snakes control</Link>
                      </li>
                    </div>
                  </div>
                  <li>
                    <Link to="/Plank_pest_control"> Plank pest control</Link>
                  </li>
                  <li>
                    <Link to="/Drainage">Drainage Maintainance</Link>
                  </li>
                  <li>
                    <Link to="/Trainning">Training service</Link>
                  </li>
                  <li>
                    <Link to="/Event_maintainance">
                      Event hygienic Maintainance
                    </Link>
                  </li>
                  <li>
                    <Link to="/Wast_management">Wast Management</Link>
                  </li>
                  <li>
                    <Link to="/Disinfect">Disinfect</Link>
                  </li>
                  <li>
                    <Link to="/Consultance">Consultance</Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="Hire">
              <p>Hire</p>
            </Link>
            <Link to="Show_Room">
              <p>Show Room</p>
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
            <div className="userStatus">
              {currentUser === null ? (
                <i onClick={() => navigate("/Login")} className="logout">
                  Login
                </i>
              ) : (
                <div className="dropdown">
                  <i onClick={handleLogOut} className="logout">
                    LogOut
                  </i>

                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <Link to="/Dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="Users_Dashboard/User_Profile" className="row">
                          <img
                            src={currentUser?.photoURL}
                            alt=""
                            className="profileImg"
                          />{" "}
                          <p>My Profile</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => navigate("/Sign_up")}
              className="getIntouch"
              style={{ marginRight: "1.2rem", height: "7vh" }}
            >
              <p>
                <em className="client">Sign up</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <CgMenuGridR
        style={{ width: "4rem", height: "2rem", marginRight: "2rem" }}
        title="Menu Bar"
        onClick={(e) => setShow(!show)}
        className="menuBar"
      /> */}
    </div>
  );
};

export default Navbar;
