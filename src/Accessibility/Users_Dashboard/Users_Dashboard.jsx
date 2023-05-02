import React, { useState } from "react";
import User_Side_Bar from "./User_Side_Bar";
import User_Column from "./User_Column";
import User_Data from "./User_Data";
import User_Mobile_Bar from "./User_Mobile_Bar";
import User_Profile from "./User_Profile";
import { BiMenu } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";

const Users_Dashboard = () => {
  const [drawer, setDrawer] = useState(true);
  return (
    <div className="usersContainer">
      <div className="users">
        <div className="userOverlay">
          {!drawer && <User_Mobile_Bar setDrawer={setDrawer} />}
          <User_Side_Bar />
          <div className="mainBody">
            <BiMenu
              className="menuBar "
              title="Menu Bar"
              onClick={(e) => setDrawer(true)}
            />
            <Routes>
              <Route path="User_Data" element={<User_Data />} />
              <Route path="User_Profile" element={<User_Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users_Dashboard;
