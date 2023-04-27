import React from "react";
import { MdMonitor, MdOutlineClear, MdSpaceDashboard } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { CgProfile } from "react-icons/cg";

const User_Side_Bar = () => {
  const navigate = useNavigate();
  const me = auth.currentUser;
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <aside className="dash_aside">
      {" "}
      <div className="statusManager">
        {me ? (
          <img src={me?.photoURL} alt="" />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU
              "
            alt=""
          />
        )}
        <div style={{ lineHeight: "3px" }}>
          <p
            style={{
              lineHeight: "1.5rem",
              fontSize: "1.2rem",
            }}
          >
            {me?.displayName}
          </p>
        </div>
      </div>
      <div className="dash">
        <div onClick={() => navigate("User_Data")}>
          <MdMonitor className="dashboardIcon" />
          <i>Dashboard</i>
        </div>
        <div onClick={() => navigate("User_Profile")}>
          <CgProfile className="dashboardIcon" />
          <i>Profile</i>
        </div>
        <div onClick={() => navigate("")}>
          <GrUpdate />
          <i>Product update</i>
        </div>
        <div onClick={handleLogOut}>
          <AiOutlineLogout className="dashboardIcon" />
          <i>Log Out</i>
        </div>
        <div onClick={() => navigate("")}>
          <MdOutlineClear className="menuBar " title="dashboardIcon" />{" "}
          <i>Back</i>
        </div>
      </div>
    </aside>
  );
};

export default User_Side_Bar;
