import React from "react";
import {
  MdMonitor,
  MdOutlineClear,
  MdPostAdd,
  MdSpaceDashboard,
} from "react-icons/md";
import { FcCalendar, FcSalesPerformance } from "react-icons/fc";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { TbBrandBooking, TbBrandTripadvisor } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Side_Bar = ({ currentUser, filterUser, setShow, show }) => {
  const navigate = useNavigate();
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
        {!filterUser ? (
          <div onClick={() => navigate("Data_analysis_page")}>
            <MdMonitor className="dashboardIcon" />
            <i>Dashboard</i>
          </div>
        ) : (
          <div onClick={() => navigate("User_Data") || setShow(false)}>
            <MdMonitor className="dashboardIcon" />
            <i>Dashboard</i>
          </div>
        )}
        <div onClick={() => navigate("User_Profile")}>
          <CgProfile className="dashboardIcon" />
          <i>Profile</i>
        </div>
        {!filterUser && (
          <>
            <div onClick={() => navigate("User_Table")}>
              <FcCalendar className="dashboardIcon" />
              <i>User Table</i>
            </div>
            <div onClick={() => navigate("Product_UpdateForm")}>
              <GrUpdate />
              <i>Product update</i>
            </div>
            <div onClick={() => navigate("Sales_Details")}>
              <FcSalesPerformance className="menuBar " title="dashboardIcon" />{" "}
              <i>Sales</i>
            </div>{" "}
            <div onClick={() => navigate("Post")}>
              <MdPostAdd className="menuBar " title="dashboardIcon" />{" "}
              <i>Post</i>
            </div>
            <div onClick={() => navigate("Booking")}>
              <TbBrandBooking className="menuBar " title="dashboardIcon" />
              <i>Booking</i>
            </div>{" "}
            <div onClick={() => navigate("Consult")}>
              <TbBrandTripadvisor className="menuBar " title="dashboardIcon" />
              <i>Consult</i>
            </div>{" "}
            <div onClick={() => navigate("Enquiry")}>
              <AiFillQuestionCircle
                className="menuBar "
                title="dashboardIcon"
              />{" "}
              <i>Enquiry</i>
            </div>{" "}
          </>
        )}
        <div onClick={() => navigate("Data_analysis_page")}>
          <MdOutlineClear className="menuBar " title="dashboardIcon" />{" "}
          <i>Back</i>
        </div>
      </div>
    </aside>
  );
};

export default Side_Bar;
