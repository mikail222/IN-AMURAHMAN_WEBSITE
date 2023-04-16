import React from "react";
import Columns from "./Columns";
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  ValueAxis,
} from "@devexpress/dx-react-chart";
import { Paper } from "@material-ui/core";
import Sales_Details from "./Sales_Details";

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
  console.log(sales);
  console.log(totalamount);
  return (
    <div className="data_analysis">
      <Columns
        user={user}
        booking={booking}
        consult={consult}
        enquiry={enquiry}
        productUpdate={productUpdate}
        sales={sales}
        totalamount={totalamount}
      />
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
        <aside className="revenue"></aside>
      </div>
      <Sales_Details sales={sales} productUpdate={productUpdate} />
    </div>
  );
};

export default Data_analysis_page;
