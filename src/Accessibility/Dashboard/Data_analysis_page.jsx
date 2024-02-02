import React, { useEffect, useState } from "react";
import Columns from "./Columns";
import "react-circular-progressbar/dist/styles.css";
import Sales_Details from "./Sales_Details";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { CircularProgressbar } from "react-circular-progressbar";
import { BiDotsVerticalRounded } from "react-icons/bi";

// import Chart from "react-apexcharts";

const Data_analysis_page = ({
  user,
  booking,
  enquiry,
  consult,
  productUpdate,
  sales,
  totalamount,
}) => {
  // const [option, setChart] = useState({
  //   chart: {
  //     id: "apexchart-example",
  //   },
  //   xaxis: {
  //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //   },
  // });
  // const [series, setSeries] = useState([
  //   {
  //     name: "series-1",
  //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  //   },
  // ]);
  const data = [
    {
      name: "January",
      Total: 4000,
    },
    {
      name: "February",
      Total: 3000,
    },
    {
      name: "March",
      Total: 2000,
    },
    {
      name: "April",
      Total: 2780,
    },
    {
      name: "May",
      Total: 1890,
    },
    {
      name: "June",
      Total: 2390,
    },
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
            <h5 className="">Last 6 month Registration</h5>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
              <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 0, left: 7, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="green" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" className="gridLine" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </aside>
        </div>
        <aside className="revenue">
          <div className="bar">
            <p>Total Registration</p>
            <BiDotsVerticalRounded />
          </div>
          <div className="progressbar">
            <CircularProgressbar
              value={user?.length}
              text={`${user?.length}%`}
              strokeWidth={6}
            />
          </div>
        </aside>
      </div>

      <Sales_Details sales={sales} productUpdate={productUpdate} />
    </div>
  );
};

export default Data_analysis_page;
