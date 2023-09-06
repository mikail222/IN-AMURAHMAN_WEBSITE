import React, { useEffect, useState } from "react";
import Columns from "./Columns";
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
            {/* <Chart
              option={option}
              series={series}
              type="bar"
              width={500}
              height={320}
            /> */}
          </aside>
        </div>
        <aside className="revenue"></aside>
      </div>
    </div>
  );
};

export default Data_analysis_page;
