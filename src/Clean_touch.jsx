import React, { useEffect } from "react";
import cleanTouch from "./asset/Ready to GIVE YOUR HOUSES & OFFICE A CLEAN TOUCH_ BOOK A FREE SESSION today.svg";
import "aos/dist/aos.css";
import AOS from "aos";
import stars from "./asset/Group 7843.svg";

const Clean_touch = ({ navigate }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="cleanTouchContainer" data-aos="zoom-in">
      <div className="cleanTouch">
        <div className="cleanTouchText">
          <img src={cleanTouch} alt="" className="cleanTouchImg" />
          <img src={stars} alt="" className="cleanTouchstar" />
        </div>
        <div className="cleanTouchButton">
          <button className="cleanTouchDemo" onClick={() => navigate("/Clues")}>
            SEE A DEMO
          </button>
          <button
            className="cleanTouchBook"
            onClick={() => navigate("/Booking")}
          >
            BOOK SESSION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clean_touch;
