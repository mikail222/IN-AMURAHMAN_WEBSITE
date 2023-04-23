import React, { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import irehv from "./asset/irehv-low-resolution-logo-color-on-transparent-background.png";
import irehv2 from "./asset/irehv-low-resolution-logo-white-on-transparent-background.png";
import { auth } from "./firebaseconfig";
import { Link, useNavigate } from "react-router-dom";
import {
  FcBusinessContact,
  FcServices,
  FcShop,
  FcSoundRecordingCopyright,
} from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrBlog } from "react-icons/gr";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLoginCircleFill, RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
import { signOut } from "firebase/auth";
import { TbBrandBooking } from "react-icons/tb";

const Mobile_nav = ({ show, setShowNav }) => {
  const [drawer, setDrawer] = useState(true);
  const [open, setOpen] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/") && setShowNav(true);
        console.log(" Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const currentUser = auth.currentUser;
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="mobile">
      {drawer ? (
        <div className="mobile_nav">
          <img
            src={irehv}
            alt=""
            className="mobile_logo"
            onClick={() => navigate("/") || setDrawer(true)}
          />
          <CgMenuGridR
            className="menuBar "
            title="Menu Bar"
            onClick={(e) => setDrawer(false)}
          />
        </div>
      ) : (
        <div
          // data-aos="slide-right"
          data-aos-offset="300"
          data-aos-anchor-placement="center-center"
          data-aos-easing="ease-in-sine"
          style={{ width: open ? "500px" : "100px" }}
        >
          <div className="mbnavoverlay">
            <div className="mobile_navs">
              {" "}
              <div className="mobile_bar">
                <img
                  src={irehv2}
                  alt=""
                  className="mobile_logo"
                  onClick={() => navigate("/") || setDrawer(true)}
                />
                <MdOutlineClear
                  className="menuBar "
                  title="Menu Bar"
                  onClick={(e) => setDrawer(true)}
                />
              </div>
              <div className="dropdown">
                <div className="rowwing">
                  <FcServices className="icon" />
                  <span>Service</span>
                </div>
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
              <div
                className="rowwing"
                onClick={() => navigate("/Hire") || setDrawer(true)}
              >
                <FcBusinessContact className="icon" />
                <p>Hire</p>
              </div>{" "}
              <div
                className="rowwing"
                onClick={() => navigate("/Show_Room") || setDrawer(true)}
              >
                <FcShop className="icon" />
                <p>Show Room</p>
              </div>
              <div
                className="rowwing"
                onClick={() => navigate("/Booking") || setDrawer(true)}
              >
                <TbBrandBooking className="menuBar" />
                <p>Booking</p>
              </div>
              <div
                className="rowwing"
                onClick={() => navigate("/Blog") || setDrawer(true)}
              >
                <GrBlog className="menuBar" />
                <p>Blog</p>
              </div>
              <div
                className="rowwing"
                onClick={() => navigate("/Clues") || setDrawer(true)}
              >
                <FcSoundRecordingCopyright className="icon" />
                <p>Clues</p>
              </div>
              <div className="userStatus">
                {currentUser === null ? (
                  <div className="rowwing">
                    <AiOutlineLogin className="icon" />
                    <i
                      onClick={() => navigate("/Login") || setDrawer(true)}
                      className="logout"
                    >
                      Login
                    </i>
                  </div>
                ) : (
                  <div className="rowwing">
                    <RiLogoutBoxRLine className="icon" />
                    <i onClick={handleLogOut} className="logout">
                      LogOut
                    </i>
                  </div>
                )}
              </div>
              <div onClick={() => navigate("/Sign_up") || setDrawer(true)}>
                <div className="rowwing">
                  <RiLoginCircleFill className="icon" />
                  <p>
                    <em className="client">Sign up</em>
                  </p>
                </div>
              </div>
              <div>
                {open === true ? (
                  <div className="rowwing">
                    <AiOutlineLogin className="icon" />
                    <i onClick={() => setOpen(false)} className="logout">
                      Login
                    </i>
                  </div>
                ) : (
                  <div className="rowwing">
                    <RiLogoutBoxRLine className="icon" />
                    <i onClick={() => setOpen(true)} className="logout">
                      LogOut
                    </i>
                  </div>
                )}
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile_nav;
