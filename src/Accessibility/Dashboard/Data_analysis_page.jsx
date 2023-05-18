import React, { useState } from "react";
import Columns from "./Columns";

const Data_analysis_page = ({
  user,
  booking,
  enquiry,
  consult,
  productUpdate,
  sales,
  totalamount,
}) => {
  const data = [
    { argument: "Monday", value: 30 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 },
  ];

  return (
    <div className="data_analysis">
      <Columns
        user={user}
        productUpdate={productUpdate}
        sales={sales}
        totalamount={totalamount}
        booking={booking}
        consult={consult}
        enquiry={enquiry}
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
        <aside className="revenue"></aside>
      </div>
    </div>
  );
};

export default Data_analysis_page;
