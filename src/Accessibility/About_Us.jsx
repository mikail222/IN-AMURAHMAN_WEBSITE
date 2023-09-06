import React, { useState, version } from "react";
import professional from "../asset/about_us.svg";
import mission from "../asset/MISSION.svg";
import vission from "../asset/VISION.svg";
import expert from "../asset/expertise.svg";
import disinfect_man from "../asset/person-disinfecting-restricted-area.jpg";
import proccess from "../asset/PROCESS.svg";
import img1 from "../asset/Frame 1000001682.svg";
import img2 from "../asset/Frame 1000001682 (1).svg";
import img3 from "../asset/Frame 1000001682 (2).svg";
import img4 from "../asset/Frame 1000001682 (3).svg";
import ourService from "../asset/Frame 1000001673.svg";
import rodient from "../asset/pexels-rodient.jpg";
import cocroach from "../asset/240_F_392124281_6KyIoUorbphrNQ0GuIMuz84QuZDDOIxL.jpg";
import blogHeading from "../asset/blog.svg";
import cleanTouch from "../asset/Ready to GIVE YOUR HOUSES & OFFICE A CLEAN TOUCH_ BOOK A FREE SESSION today.svg";
import mosquito from "../asset/pexels-mosquito.jpg";
import stars from "../asset/Group 7843.svg";
import icon1 from "../asset/Mask group.svg";
import icon2 from "../asset/Mask group (1).svg";
import icon3 from "../asset/Mask group (2).svg";
import icon4 from "../asset/Mask group (3).svg";
import Our_Team from "./Our_Team";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import BlogAds from "../BlogAds";

const About_Us = ({ blogList }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <div className="logo2">
        <div className="overlay">
          <div className="brand">
            <div className="alignStars">
              <img src={professional} alt="" className="profession" />
            </div>
          </div>
        </div>
      </div>
      <div className="missionClass">
        <img src={mission} alt="" className="missionImgResize" />
        <img src={vission} alt="" className="missionImgResize" />
        <div className="expert">
          <img src={expert} alt="" />
          <img src={disinfect_man} alt="" />
        </div>
        <div className="process">
          <img src={proccess} alt="" data-aos="zoom-in" />
        </div>
        <div className="ourServiceContainer" data-aos="zoom-in">
          <img src={ourService} alt="" />
          <div className="serviceList">
            <div>
              <img src={icon1} alt="" />
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={icon2} alt="" />
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={icon3} alt="" />
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={icon4} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
        <Our_Team />
        <div className="aboutUscleanTouchContainer" data-aos="zoom-in">
          <div className="cleanTouch">
            <div className="cleanTouchText">
              <img src={cleanTouch} alt="" className="cleanTouchImg" />
              <img src={stars} alt="" className="cleanTouchstar" />
            </div>
            <div className="cleanTouchButton">
              <button
                className="cleanTouchDemo"
                onClick={() => navigate("/Clues")}
              >
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
        <BlogAds blogList={blogList} />
        <div className="aboutUscleanTouchContainer" data-aos="zoom-in">
          <div className="cleanTouch">
            <div className="cleanTouchText">
              <img src={cleanTouch} alt="" className="cleanTouchImg" />
              <img src={stars} alt="" className="cleanTouchstar" />
            </div>
            <div className="cleanTouchButton">
              <button
                className="cleanTouchDemo"
                onClick={() => navigate("/Clues")}
              >
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
      </div>
      <Footer />
    </div>
  );
};

export default About_Us;
