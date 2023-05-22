import React from "react";
import User_Column from "./User_Column";
import Comment from "./Comment";
import { auth } from "../../firebaseconfig";

const User_Data = ({ booking, enquiry, consult, sales }) => {
  const currentUser = auth.currentUser;
  const acquiredItem = sales?.filter(
    ({ email }) => email === currentUser?.email
  );

  const booked = booking?.filter(({ email }) => email === currentUser?.email);

  const findings = enquiry?.filter(({ email }) => email === currentUser?.email);

  const consultation = consult?.filter(
    ({ email }) => email === currentUser?.email
  );
  const data = [
    { argument: "Monday", value: 30 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 },
  ];
  return (
    <div className="data_analysis">
      <User_Column
        acquiredItem={acquiredItem}
        findings={findings}
        consultation={consultation}
        booked={booked}
      />
      <div className="analytics">
        <div className="field">
          <aside className="graphField">
            {/* <Paper>
              <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries valueField="value" argumentField="argument" />
              </Chart>
            </Paper> */}
          </aside>
        </div>
        <aside className="Image"></aside>
      </div>
      <Comment />
    </div>
  );
};

export default User_Data;
