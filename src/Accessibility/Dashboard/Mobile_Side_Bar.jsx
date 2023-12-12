import React from "react";
import { MdMonitor, MdOutlineClear, MdPostAdd } from "react-icons/md";
import { FcCalendar, FcSalesPerformance } from "react-icons/fc";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { TbBrandBooking, TbBrandTripadvisor } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Mobile_Side_Bar = ({ currentUser, setDrawer, filteredAdmin }) => {
  const navigate = useNavigate();
  return (
    <aside className="mobile_dash_asides" onMouseLeave={() => setDrawer(true)}>
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
        {filteredAdmin ? (
          <div onClick={() => navigate("Data_analysis_page")}>
            <MdMonitor className="dashboardIcon" />
            <p>Dashboard</p>
          </div>
        ) : (
          <div onClick={() => navigate("User_data")}>
            <MdMonitor className="dashboardIcon" />
            <p>Dashboard</p>
          </div>
        )}
        <div onClick={() => navigate("User_Profile")}>
          <CgProfile className="dashboardIcon" />
          <p>Profile</p>
        </div>
        {filteredAdmin ? (
          <>
            {" "}
            <div onClick={() => navigate("User_Table")}>
              <FcCalendar className="dashboardIcon" />
              <p>User Table</p>
            </div>
            <div onClick={() => navigate("Product_UpdateForm")}>
              <GrUpdate />
              <p>Product update</p>
            </div>
            <div onClick={() => navigate("Blog_Update")}>
              <MdPostAdd className="menuBar2 " title="dashboardIcon" />{" "}
              <p>Blogs</p>
            </div>
            <div onClick={() => navigate("Post")}>
              <MdPostAdd className="menuBar2 " title="dashboardIcon" />{" "}
              <p>Post</p>
            </div>{" "}
            <div onClick={() => navigate("Booking")}>
              <TbBrandBooking className="menuBar2 " title="dashboardIcon" />
              <p>Booking</p>
            </div>{" "}
            <div onClick={() => navigate("Consult")}>
              <TbBrandTripadvisor className="menuBar2 " title="dashboardIcon" />
              <p>Consult</p>
            </div>{" "}
            <div onClick={() => navigate("Enquiry")}>
              <AiFillQuestionCircle
                className="menuBar2 "
                title="dashboardIcon"
              />{" "}
              <p>Enquiry</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </aside>
  );
};

export default Mobile_Side_Bar;
