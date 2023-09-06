import React, { useEffect, useState } from "react";
import img from "./asset/Heading.svg";
import faqs from "./asset/fineTouch.svg";
import demoVideo from "./asset/Fram 1000001673.svg";
import satisfaction from "./asset/satisfaction.svg";
import icon1 from "./asset/Mask group.svg";
import icon2 from "./asset/Mask group (1).svg";
import icon3 from "./asset/Mask group (2).svg";
import icon4 from "./asset/Mask group (3).svg";
import img1 from "./asset/Frame 1000001682.svg";
import img2 from "./asset/Frame 1000001682 (1).svg";
import img3 from "./asset/Frame 1000001682 (2).svg";
import img4 from "./asset/Frame 1000001682 (3).svg";
import cleanTouch from "./asset/Ready to GIVE YOUR HOUSES & OFFICE A CLEAN TOUCH_ BOOK A FREE SESSION today.svg";
import { TbCurrencyNaira } from "react-icons/tb";
import videoClue from "./asset/Rectangle 102.svg";
import Irehv_pro from "./asset/IREHV Pro.svg";
import Irehv_plus from "./asset/IREHV Plus.svg";
import Irehv_starter from "./asset/IREHV Starter.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Our_Team from "./Accessibility/Our_Team";
import professional from "./asset/Head.svg";
import book from "./asset/BOOK A SESSION.svg";
import demo from "./asset/SEE A DEMO.svg";
import star from "./asset/Group 7842.svg";
import stars from "./asset/Group 7843.svg";
import rate from "./Accessibility/Users_Dashboard/ABOUT/MENUS.svg";
import Content from "./Accessibility/Users_Dashboard/ABOUT/Frame 1000001679.svg";
import aboutUsHeader from "./Accessibility/Users_Dashboard/ABOUT/Frame 1000001673.svg";
import proccess from "./asset/PROCESS.svg";
import ourService from "./asset/Frame 1000001673.svg";
import product2 from "./asset/878 (masking shape).svg";
import product1 from "./asset/4252-removebg-preview.png";
import { BsStars } from "react-icons/bs";
import irehv_Content from "./asset/Frame 1000001668.svg";
import { GrStar } from "react-icons/gr";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import irehv_content2 from "./asset/Frame 1000001668 (1).svg";
import Our_Products from "./Accessibility/Our_Products";
import Customer from "./Customer";
import BlogAds from "./BlogAds";

const Home = ({ blogList }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [counter, setCounter] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // var numArray = [];
  // for (var i = 0; i < 5; i++) {
  //   numArray.push(i);
  //   setTimeout(() => {
  //     console.log(numArray);
  //   }, 3000);
  // }
  // console.log(i);

  return (
    <div>
      <div className="logo1">
        <div className="overlay">
          <div className="brand">
            <div className="alignStars">
              <img src={star} alt="" className="star" />
              <img src={professional} alt="" className="profession" />
              <img src={stars} alt="" className="stars" />
            </div>
            <div className="btns">
              <img
                src={book}
                alt=""
                onClick={() => navigate("/Booking")}
                className="book"
              />
              <img
                src={demo}
                alt=""
                className="demo"
                onClick={() => navigate("/Clues")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs" data-aos="zoom-in">
        <div className="ProductDesignContainer">
          <div className="productDesign">
            <div className="product1">
              <img src={product1} alt="" className="productImg" />
              <BsStars className="BsStar" />
            </div>
            <div className="product2">
              <BsStars className="BsStar2" style={{ marginTop: "15rem" }} />
              <img src={product2} alt="" className="cleanImg" />
            </div>
            <div className="satisfiedClient">
              <img src={satisfaction} alt="" />
            </div>
          </div>

          <div className="aboutIrehv">
            <img src={aboutUsHeader} alt="" />
            <img src={Content} alt="" />
            <img src={rate} alt="" />
            <button onClick={() => navigate("/About_Us")}>LEARN MORE</button>
          </div>
        </div>
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
        <button onClick={() => navigate("/Service")}>VIEW ALL SERVICES</button>
      </div>
      <div className="process">
        <img src={proccess} alt="" data-aos="zoom-in" />
      </div>
      <Customer />
      <div className="who_we_are" data-aos="zoom-in">
        <img src={demoVideo} alt="" />
        <img src={videoClue} alt="" />
        <button className="galery" onClick={() => navigate("/Clues")}>
          VIEW OUR GALERY
        </button>
      </div>
      <Our_Team />
      <div className="pricing" data-aos="zoom-in">
        <img src={img} alt="" />
        <div className="pricingplan">
          <span className="span">
            <img src={Irehv_starter} alt="" className="irehvImg" />
            <img src={irehv_Content} alt="" className="irehvImg2" />
            <h5>Free</h5>

            <button className="BookNow" onClick={() => navigate("/Booking")}>
              BOOK NOW
            </button>
          </span>
          <span className="gradiant">
            <img src={Irehv_pro} alt="" className="irehvImg" />
            <img src={irehv_content2} alt="" className="irehvImg2" />
            <div className="price">
              <TbCurrencyNaira style={{ fill: "white" }} /> <p>0</p>
            </div>
            <button
              className="cleanTouchBook"
              onClick={() => navigate("/Booking")}
            >
              BOOK NOW
            </button>
          </span>
          <span className="span">
            <img src={Irehv_plus} alt="" className="irehvImg" />
            <img src={irehv_Content} alt="" className="irehvImg2" />
            <div className="price">
              <TbCurrencyNaira style={{ fill: "white" }} /> <p>0</p>
            </div>

            <button className="BookNow" onClick={() => navigate("/Booking")}>
              BOOK NOW
            </button>
          </span>{" "}
        </div>
      </div>
      <Our_Products />
      <div className="aboutFaq" data-aos="zoom-in">
        <div className="faq">
          <div className="faqform">
            <img src={faqs} alt="" className="answer" />
            <div className="toggleDetails">
              <div>
                <span>
                  <h6>What do you not clean? </h6>
                  {!show1 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow1(true)}
                    />
                  )}
                  {show1 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow1(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show1 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>{" "}
              <div>
                <span>
                  <h6>Do I need to home for every cleaning service? </h6>
                  {!show2 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow2(true)}
                    />
                  )}
                  {show2 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow2(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show2 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>{" "}
              <div>
                <span>
                  <h6>How will Our relationship work? </h6>
                  {!show3 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow3(true)}
                    />
                  )}
                  {show3 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow3(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show3 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>{" "}
              <div>
                <span>
                  <h6>what time does your Team arrive? </h6>
                  {!show4 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow4(true)}
                    />
                  )}
                  {show4 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow4(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show4 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>
              <nav className="btnRow">
                <button className="" onClick={() => navigate("/")}>
                  VIEW ALL FAQs
                </button>
                <button className="enquirybtn" onClick={() => navigate("/")}>
                  MAKE AN ENQUIRY
                </button>
              </nav>
            </div>
          </div>
          <div className="productDesign">
            <div className="product1">
              <img src={product1} alt="" className="productImg" />
              <BsStars className="BsStar" />
            </div>
            <div className="faqProduct2">
              <BsStars className="BsStar2" style={{ marginTop: "15rem" }} />
              <img src={product2} alt="" className="cleanImg" />
            </div>
          </div>
        </div>
      </div>

      <div className="cleanTouchContainer" data-aos="zoom-in">
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
      <div className="cleanTouchContainer" data-aos="zoom-in">
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

      <Footer />
    </div>
  );
};

export default Home;
