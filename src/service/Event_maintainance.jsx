import React from "react";
import eventImg from "../asset/marc-babin-ecGZWPOvya0-unsplash.jpg";
const Event_maintainance = () => {
  return (
    <div className="event">
      <main style={{ width: "60%", padding: "2rem" }}>
        <div>
          Experience has shown how difficult it is to be responding
          simutaniously to many need in an event and this has mirror the level
          of negligence of the people toward the hygienic aspect of numerious
          ceremonial environment.
          <p>
            Therefore,to alivate this stress explain the reason why <b>IREHV</b>{" "}
            has design this particular services to celebrate with our client in
            an hygienic event environment,before,during,and after the event.
          </p>
          <img src={eventImg} alt="" />
          <h4>ESSENTIAL DUTIES AND RESPONSIBILITIES </h4>
          <p>
            Duties include, but are not limited to, setting up and tearing down
            rooms for meetings, recreation activities, conventions and
            conferences, performing daily and monthly periodic maintenance of
            the facility including carpet care, tile floor care, restroom
            cleaning, kitchen cleaning, exterior building cleanup, assist in
            supervising some parttime workers engaged in maintenance, and other
            duties as assigned.{" "}
          </p>
        </div>
      </main>
      <aside style={{ width: "35%" }}></aside>
    </div>
  );
};

export default Event_maintainance;
