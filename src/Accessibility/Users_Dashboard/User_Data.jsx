import {
  ArgumentAxis,
  BarSeries,
  Chart,
  ValueAxis,
} from "@devexpress/dx-react-chart";
import { Paper } from "@material-ui/core";
import React from "react";

const User_Data = () => {
  const data = [
    { argument: "Monday", value: 30 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 },
  ];
  return (
    <div>
      <div className="analytics">
        <div className="field">
          <aside className="graphField">
            <Paper>
              <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries valueField="value" argumentField="argument" />
              </Chart>
            </Paper>
          </aside>
        </div>
        <aside className="Image"></aside>
      </div>
    </div>
  );
};

export default User_Data;
