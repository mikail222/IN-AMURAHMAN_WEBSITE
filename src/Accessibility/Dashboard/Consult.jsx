import React from "react";

const Consult = ({ consult }) => {
  const today = new Date().toDateString();
  const findConsult = consult.filter((m) => m.day === today);
  return (
    <div className="serviceDetail">
      <div>
        <h3>Consultation Details</h3>
        {consult.map(({ fullName, msg, day, number, mail, i }) => (
          <div key={i} className="info">
            {fullName ? <p>{fullName}</p> : <p>anonimous</p>}
            <a href="mailto:{mail}">{mail}</a> <p>{number}</p>
            {msg === true ? (
              <p className="info_text">{msg}</p>
            ) : (
              <p>No Content</p>
            )}
            <p className="date">{day}</p>
          </div>
        ))}
      </div>
      <div className="">
        <h3>Today's Consultation</h3>
        {findConsult &&
          findConsult.map(({ fullName, msg, day, number, mail, i }) => (
            <div key={i} className="info">
              {fullName ? <p>{fullName}</p> : <p>anonimous</p>}
              <p>{mail}</p>
              <p>{number}</p>
              {msg ? <p className="info_text">{msg}</p> : <p>No Content</p>}
              <p className="date">{day}</p>
            </div>
          ))}
        {!findConsult && (
          <p style={{ marginLeft: "2rem", marginTop: "2%", color: "gray" }}>
            <i>No Consultation yet Today...!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default Consult;
