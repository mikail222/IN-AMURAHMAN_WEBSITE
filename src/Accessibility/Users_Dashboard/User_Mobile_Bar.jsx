import React from "react";
import { auth } from "../../firebaseconfig";
import { MdMonitor, MdOutlineClear } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const User_Mobile_Bar = ({ setDrawer }) => {
  const currentUser = auth.currentUser;
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
    <div>
      <aside className="mobile_dash_asides">
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
          <div>
            <MdMonitor className="dashboardIcon" />
            <i>Dashboard</i>
          </div>
          <div>
            <CgProfile className="dashboardIcon" />
            <i>Profile</i>
          </div>
          <div>
            <GrUpdate />
            <i>Product update</i>
          </div>
          <div onClick={handleLogOut}>
            <AiOutlineLogout className="dashboardIcon" />
            <i>Log Out</i>
          </div>
          <div onClick={(e) => setDrawer(true)}>
            <MdOutlineClear className="menuBar " title="dashboardIcon" />{" "}
            <i>Back</i>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default User_Mobile_Bar;
