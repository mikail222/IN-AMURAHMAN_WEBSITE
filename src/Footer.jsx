import React from "react";
import { Link, useNavigate } from "react-router-dom";
import irehv from "./asset/BrandName_Logo.svg";
import { SiFacebook } from "react-icons/si";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail, MdLocationPin, MdPhoneInTalk } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import {
  GrLinkedin,
  GrLinkedinOption,
  GrLocation,
  GrLocationPin,
} from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
const Footer = () => {
  const navigate = useNavigate();
  const style = {
    // Adding media query..
    "@media (maxWidth: 4800px)": {
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <footer className="footer-container">
      <div className="footer">
        <ul className="nameClass">
          <img
            src={irehv}
            alt=""
            onClick={() => navigate("/Contact")}
            style={{ cursor: "pointer" }}
          />
          <h6>Inammurahman Environmental Hygienic Ventures</h6>
          <p>...eradicaing environmental hazards</p>
          <div className="connect">
            <div>
              <p>CONNECT WITH US</p>
            </div>
            <div className="social-medial_official">
              <BsWhatsapp className="social" />
              <MdEmail className="social" />
              <SiFacebook className="social" />
              <BsInstagram className="social" />
              <AiOutlineTwitter className="social" />
              <RiLinkedinFill className="social" />
            </div>
          </div>
        </ul>

        <ul>
          <h5>Who We Are</h5>
          <Link to="/">
            <li> About Us</li>
          </Link>
          <Link to="/Clues">
            <li> Career</li>
          </Link>
          <Link to="/Policy">
            <li> Privacy</li>
          </Link>
          <Link to="/Policy">
            <li> Terms Of Service</li>
          </Link>
        </ul>
        <ul>
          <h5> What we Do</h5>
          <li>
            <Link to="Service">Service</Link>
          </li>
          <li>
            <Link to="/Show_Room"> Products</Link>
          </li>
          <li>
            <Link to="/Trainning"> Trainings</Link>
          </li>
          <li>
            <Link to="/Consultance">Consultancy</Link>
          </li>
        </ul>
        <ul>
          <h5> Our Policy</h5>
          <Link to="/Policy">
            <li>Privacy </li>
          </Link>
          <Link to="/Policy">
            <li>Pricing </li>
          </Link>
          <Link to="/Policy">
            <li>Payment </li>
          </Link>
          <Link to="/Policy">
            <li> Delivery </li>
          </Link>
        </ul>
        <ul className="media">
          <h5>Contact Us</h5>
          <div>
            <MdPhoneInTalk className="footerIcon" />
            <li>+234 8144632165</li>
          </div>
          <div>
            <MdPhoneInTalk style={{ fill: "transparent" }} />
            <li>+234 9152529866</li>
          </div>
          <div>
            <MdLocationPin className="location" />

            <li>
              177,Beside
              <br /> Blue Mist Water,
              <br />
              Agbo-Oba Rd,Ilorin{" "}
            </li>
          </div>
        </ul>
      </div>
      <div className="media_class" style={style}>
        <div className="copyright">
          <div className="BN">
            <BiCopyright className="BiCopyright" />{" "}
            <p>2022 INAMURAHMAN ENVIRONMENTAL HYGIENIC VENTURE.</p>
          </div>
          <div className="producer">
            <p>
              ALL RIGHT RESERVED WITH LOVE BY: M&K TECH & DARA KREATIVE
              INNOVATION AGENCY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
