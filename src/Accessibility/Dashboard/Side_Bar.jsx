import React from "react";
import { MdMonitor, MdOutlineClear, MdSpaceDashboard } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";

const Side_Bar = ({ currentUser, setDrawer }) => {
  const navigate = useNavigate();
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
        {currentUser ? (
          <img src={currentUser?.photoURL} alt="" />
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
            {currentUser?.displayName}
          </p>
        </div>
      </div>
      <div className="dash">
        <div onClick={() => navigate("Data_analysis_page")}>
          <MdMonitor className="dashboardIcon" />
          <i>Dashboard</i>
        </div>
        <div onClick={() => navigate("User_Table")}>
          <FcCalendar className="dashboardIcon" />
          <i>User Table</i>
        </div>
        <div onClick={() => navigate("Product_UpdateForm")}>
          <GrUpdate />
          <i>Product update</i>
        </div>
        <div onClick={handleLogOut}>
          <AiOutlineLogout className="dashboardIcon" />
          <i>Log Out</i>
        </div>
        <div onClick={() => navigate("Data_analysis_page")}>
          <MdOutlineClear className="menuBar " title="dashboardIcon" />{" "}
          <i>Back</i>
        </div>
      </div>
    </aside>
  );
};

export default Side_Bar;
