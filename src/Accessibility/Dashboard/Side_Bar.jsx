import React from "react";
import { MdMonitor, MdSpaceDashboard } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";

const Side_Bar = ({
  currentUser,
  setUserList,
  setDashboardInfo,
  setProductUpdateInfo,
}) => {
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
          <i
            onClick={() =>
              setDashboardInfo(true) ||
              (setUserList(false) && setProductUpdateInfo(false))
            }
          >
            Dashboard
          </i>
        </div>
        <div>
          <FcCalendar className="dashboardIcon" />
          <i onClick={() => setUserList(true) || setDashboardInfo(false)}>
            User Table
          </i>
        </div>
        <div>
          <GrUpdate />
          <i onClick={() => setProductUpdateInfo(true) || setUserList(false)}>
            Product update
          </i>
        </div>
        <div>
          <AiOutlineLogout className="dashboardIcon" />
          <i onClick={handleLogOut}>Log Out</i>
        </div>
        <div>
          <img src="" alt="" />
          <i>Chart</i>
        </div>
        <div>
          <img src="" alt="" />
          <i>CRM</i>
        </div>
        <div>
          <img src="" alt="" />
          <i>Fixed</i>
        </div>{" "}
      </div>
    </aside>
  );
};

export default Side_Bar;
