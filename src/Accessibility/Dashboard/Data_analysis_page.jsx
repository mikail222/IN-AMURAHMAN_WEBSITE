import React, { useState } from "react";
import Columns from "./Columns";
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  ValueAxis,
} from "@devexpress/dx-react-chart";
import { Paper } from "@material-ui/core";
import Sales_Details from "./Sales_Details";
import Post from "./Post";
import Toggle_Buttons from "./Toggle_Buttons";
import Booking from "./Booking";
import Consult from "./Consult";
import Enquiry from "./Enquiry";

const Data_analysis_page = ({
  user,
  booking,
  enquiry,
  consult,
  productUpdate,
  sales,
  totalamount,
  adminPost,
}) => {
  const [show, setShow] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(false);
  const [consultDetails, setConsultDetails] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState(false);
  const [postDetail, setPostDetail] = useState(false);
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
      <Toggle_Buttons
        show={show}
        setShow={setShow}
        setPostDetail={setPostDetail}
        postDetail={postDetail}
        bookingDetails={bookingDetails}
        setBookingDetails={setBookingDetails}
        consultDetails={consultDetails}
        setConsultDetails={setConsultDetails}
        enquiryDetails={enquiryDetails}
        setEnquiryDetails={setEnquiryDetails}
      />
      {show === true && (
        <Sales_Details sales={sales} productUpdate={productUpdate} />
      )}
      {postDetail === true && <Post adminPost={adminPost} />}
      {bookingDetails === true && <Booking booking={booking} />}
      {consultDetails === true && <Consult consult={consult} />}
      {enquiryDetails === true && <Enquiry enquiry={enquiry} />}
    </div>
  );
};

export default Data_analysis_page;
