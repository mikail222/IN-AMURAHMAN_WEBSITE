import React from "react";

const Enquiry = ({ enquiry }) => {
  const today = new Date().toDateString();
  const findEnquire = enquiry.filter(({ day }) => day === today);

  return (
    <div className="serviceDetail">
      <div>
        <h3>Enquiry Details</h3>
        {enquiry.map(({ fullName, msg, day, number, mail, i }) => (
          <div key={i} className="info">
            {fullName ? <p>{fullName}</p> : <p>anonimous</p>}
            <p>{mail}</p>
            <p>{number}</p>
            {msg ? <p className="info_text">{msg}</p> : <p>No Content</p>}
            <p className="date">{day}</p>
          </div>
        ))}
      </div>
      <div className="">
        <h3>Today's Enquiry</h3>
        {findEnquire &&
          findEnquire.map(({ fullName, msg, day, number, mail, i }) => (
            <div key={i} className="info">
              {fullName ? <p>{fullName}</p> : <p>anonimous</p>}
              <p>{mail}</p>
              <p>{number}</p>
              {msg ? <p className="info_text">{msg}</p> : <p>No Content</p>}
              <p className="date">{day}</p>
            </div>
          ))}{" "}
        {!findEnquire && (
          <p style={{ marginLeft: "2rem", marginTop: "2%", color: "gray" }}>
            <i>No Enquiry yet Today...!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default Enquiry;
