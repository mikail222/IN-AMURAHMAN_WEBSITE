import React from "react";
import {
  MdMonitor,
  MdOutlineClear,
  MdPostAdd,
  MdSpaceDashboard,
} from "react-icons/md";
import { FcCalendar, FcSalesPerformance } from "react-icons/fc";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { GrBlog, GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { TbBrandBooking, TbBrandTripadvisor } from "react-icons/tb";
import { CgPassword, CgProfile } from "react-icons/cg";

const Side_Bar = ({ currentUser, filteredAdmin, setShow, show }) => {
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
        <p>{currentUser?.day}</p>
      </div>
      <div className="dash">
        {filteredAdmin ? (
          <button onClick={() => navigate("Data_analysis_page")}>
            <MdMonitor className="dashboardIcon" />
            <p>Dashboard</p>
          </button>
        ) : (
          <button onClick={() => navigate("User_Data") || setShow(false)}>
            <MdMonitor className="dashboardIcon" />
            <p>Dashboard</p>
          </button>
        )}
        <button onClick={() => navigate("User_Profile")}>
          <CgProfile className="dashboardIcon" />
          <p>Profile</p>
        </button>
        <button onClick={() => navigate("ChangePassword")}>
          <CgPassword className="dashboardIcon" />
          <p>Change Password</p>
        </button>
        {filteredAdmin === true ? (
          <>
            <button onClick={() => navigate("User_Table")}>
              <FcCalendar className="dashboardIcon" />
              <p>User Table</p>
            </button>
            <button onClick={() => navigate("Product_UpdateForm")}>
              <GrUpdate />
              <p>Product update</p>
            </button>
            <button onClick={() => navigate("Blog_Update")}>
              <GrBlog className="menuBar2 " title="dashboardIcon" />{" "}
              <p>Blogs</p>
            </button>
            <button onClick={() => navigate("Post")}>
              <MdPostAdd className="menuBar2 " title="dashboardIcon" />{" "}
              <p>Post</p>
            </button>
            <button onClick={() => navigate("Booking")}>
              <TbBrandBooking className="menuBar2 " title="dashboardIcon" />
              <p>Booking</p>
            </button>{" "}
            <button onClick={() => navigate("Consult")}>
              <TbBrandTripadvisor className="menuBar2 " title="dashboardIcon" />
              <p>Consult</p>
            </button>{" "}
            <button onClick={() => navigate("Enquiry")}>
              <AiFillQuestionCircle
                className="menuBar2 "
                title="dashboardIcon"
              />{" "}
              <p>Enquiry</p>
            </button>{" "}
          </>
        ) : (
          ""
        )}
        <button
          onClick={() =>
            navigate(
              filteredAdmin === true ? "Data_analysis_page" : "User_data"
            )
          }
        >
          <MdOutlineClear className="menuBar2 " title="dashboardIcon" />{" "}
          <p>Back</p>
        </button>
      </div>
    </aside>
  );
};

export default Side_Bar;
