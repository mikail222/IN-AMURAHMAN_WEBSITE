import React, { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import irehv from "./asset/BrandName_Logo.svg";
import { auth } from "./firebaseconfig";
import { Link, useNavigate } from "react-router-dom";
import {
  FcBusinessContact,
  FcContacts,
  FcServices,
  FcShop,
  FcSoundRecordingCopyright,
} from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrBlog } from "react-icons/gr";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLoginCircleFill, RiLogoutBoxRLine } from "react-icons/ri";
import { MdContacts, MdOutlineClear } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const Mobile_nav = ({ show, setShowNav }) => {
  const [drawer, setDrawer] = useState(true);
  const [open, setOpen] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleLogOut = async (e) => {
    e.preventDefault();
    const { signOut } = await import("firebase/auth");

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
        <div>
          <div className="mbnavoverlay">
            <div className="mobile_navs">
              {" "}
              <div className="mobile_bar">
                <img
                  src={irehv}
                  alt=""
                  className="mobile_logo"
                  onClick={() => navigate("/") || setDrawer(true)}
                />
                <MdOutlineClear
                  className="menuBar5 "
                  title="Menu Bar"
                  onClick={(e) => setDrawer(true)}
                />
              </div>
              <div
                className="rowwing"
                onClick={() => navigate("/Service") || setDrawer(true)}
              >
                <FcServices className="icon" />
                <span>Service</span>
              </div>
              <div
                className="rowwing"
                onClick={() => navigate("/About_us") || setDrawer(true)}
              >
                <FcBusinessContact className="icon" />
                <p>About us</p>
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
              <div
                className="rowwing"
                onClick={() => navigate("/Contact") || setDrawer(true)}
              >
                <MdContacts className="icon" />
                <p>Ask us</p>
              </div>
              <div className="userStatus">
                {currentUser === null ? (
                  <div className="rowwing">
                    <AiOutlineLogin className="icon" />
                    <p
                      onClick={() => navigate("/Login") || setDrawer(true)}
                      className="logout"
                    >
                      Login
                    </p>
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
                    <p>Sign up</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile_nav;
