import React from "react";

export const Booking = ({ booking }) => {
  const today = new Date().toDateString();
  const findBooking = booking.filter((m) => m.day === today);
  return (
    <div className="serviceDetail">
      <div>
        <h3>Booking Details</h3>
        {booking.map(
          ({ firstName, lastName, message, day, contact, email, i }) => (
            <div key={i} className="info">
              {firstName && lastName ? (
                <p>{firstName + " " + lastName}</p>
              ) : (
                <p>anonimous</p>
              )}
              <p onClick={() => window.open(`mailto:${email}`)}>{email}</p>
              <p>{contact}</p>
              {message ? (
                <p className="info_text">{message}</p>
              ) : (
                <p>No Content</p>
              )}
              <p className="date">{day}</p>
            </div>
          )
        )}
      </div>
      <div>
        <h3>Today's Booking</h3>
        {findBooking &&
          findBooking.map(
            ({ firstName, lastName, message, day, contact, email, i }) => (
              <div key={i} className="info">
                {firstName && lastName ? (
                  <p>{firstName + "" + lastName}</p>
                ) : (
                  <p>anonimous</p>
                )}
                <p>{email}</p>
                <p>{contact}</p>
                {message ? (
                  <p className="info_text">{message}</p>
                ) : (
                  <p>No Content</p>
                )}
                <p className="date">{day}</p>
              </div>
            )
          )}
        {!findBooking && (
          <p style={{ marginLeft: "2rem", marginTop: "2%", color: "gray" }}>
            <i>No Booking yet Today...!</i>
          </p>
        )}
      </div>
    </div>
  );
};
export default Booking;
