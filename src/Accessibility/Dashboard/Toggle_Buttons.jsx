import React from "react";

const Toggle_Buttons = ({
  show,
  setShow,
  postDetail,
  setPostDetail,
  bookingDetails,
  setBookingDetails,
  consultDetails,
  setConsultDetails,
  enquiryDetails,
  setEnquiryDetails,
}) => {
  return (
    <div className="routeBtn">
      {!show ? (
        <button onClick={() => setShow(true)}>Sales Detail</button>
      ) : (
        <button onClick={() => setShow(false)}>hide Sales</button>
      )}
      {!postDetail ? (
        <button onClick={() => setPostDetail(true)}> Post</button>
      ) : (
        <button onClick={() => setPostDetail(false)}>hide Post</button>
      )}
      {!bookingDetails ? (
        <button onClick={() => setBookingDetails(true)}> Booking</button>
      ) : (
        <button onClick={() => setBookingDetails(false)}>hide Booking</button>
      )}
      {!consultDetails ? (
        <button onClick={() => setConsultDetails(true)}> Consult</button>
      ) : (
        <button onClick={() => setConsultDetails(false)}>hide Consult</button>
      )}
      {!enquiryDetails ? (
        <button onClick={() => setEnquiryDetails(true)}> Enquiry</button>
      ) : (
        <button onClick={() => setEnquiryDetails(false)}>hide Enquiry</button>
      )}
    </div>
  );
};

export default Toggle_Buttons;
