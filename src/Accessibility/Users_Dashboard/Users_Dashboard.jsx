import React, { useState } from "react";
import User_Side_Bar from "./User_Side_Bar";
import User_Column from "./User_Column";
import User_Data from "./User_Data";
import User_Mobile_Bar from "./User_Mobile_Bar";
import User_Profile from "./User_Profile";

const Users_Dashboard = () => {
  const [drawer, setDrawer] = useState(true);
  return (
    <div className="usersContainer">
      <div className="users">
        <User_Mobile_Bar setDrawer={setDrawer} />
        <User_Side_Bar />
        <div className="mainBody">
          {/* <User_Column />
          <User_Data /> */}
          <User_Profile />
        </div>
      </div>
    </div>
  );
};

export default Users_Dashboard;
