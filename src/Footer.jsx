import React from "react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  const style = {
    // Adding media query..
    "@media (maxWidth: 4800px)": {
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <footer>
      <div className="footer">
        <ul>
          <h5>Cleaning Service</h5>
          <li>
            <Link to="Domestic_cleaning">Domestic,Office,Hotel Cleaning</Link>
          </li>
          <li>
            <Link to="/Pest_control">Fumigation and Pest Control</Link>
          </li>
          <li>
            <Link to="/Wast_management"> Wast Management</Link>
          </li>
          <li>
            <Link to="/Drainage">Drainage Maintainance Service</Link>
          </li>
          <li>
            <Link to="/Event_maintainance">
              Event Hygienic Maintainace service
            </Link>
          </li>
        </ul>
        <ul>
          <h5>Our Specification</h5>
          <Link to="/Service">
            <li> General Cleaning Service</li>
          </Link>
          <Link to="/Show_Room">
            <li> Product Sales</li>
          </Link>
          <Link to="/Hire">
            <li> Hiring of Equipment</li>
          </Link>
          <Link to="/Consultance">
            <li>Consultation Service</li>
          </Link>
          <Link to="/Trainning">
            <li> Trainning Services</li>
          </Link>
        </ul>
        <ul>
          <h5>Domestic Service</h5>

          <Link to="/Toilet">
            <li>Toilet </li>
          </Link>

          <Link to="/Kitchen">
            <li>Kitchen </li>
          </Link>

          <Link to="/Bed_Room">
            <li>Bed Room </li>
          </Link>

          <Link to="/Wardrobe">
            <li>Wardrobe </li>
          </Link>

          <Link to="/Sitting_Room">
            <li>Sitting Room </li>
          </Link>
        </ul>
        <ul>
          <h5>Information</h5>
          <Link to="/Terms">
            <li>Terms & Condition </li>
          </Link>
          <Link to="/Policy">
            <li>Privacy Policy </li>
          </Link>
        </ul>
      </div>
      <div className="media_class" style={style}>
        <div className="media">
          <a
            href="http://"
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <SiFacebook
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                fill: "rgb(255,255,255,0.3)",
              }}
              className="facebook"
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <FiTwitter
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "twitter",
                borderRadius: "50%",
                fill: "rgb(255,255,255,0.3)",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <BsInstagram
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "instagram",
                fill: "rgb(255,255,255,0.3)",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="Email"
            rel="noopener noreferrer"
          >
            <AiOutlineMail
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "mail",
                borderRadius: "50%",
                fill: "rgb(255,255,255,0.3)",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="whatsApp"
            rel="noopener noreferrer"
          >
            <BsWhatsapp
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                className: "whatsApp",
                borderRadius: "50%",
                fill: "rgb(255,255,255,0.3)",
              }}
            />
          </a>

          <a
            href="http://"
            target="_blank"
            title="+234(0)8144632165"
            rel="noopener noreferrer"
          >
            <MdPhoneInTalk
              style={{
                color: "black",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                className: "contact",
                fill: "rgb(255,255,255,0.3)",
              }}
            />
          </a>
        </div>
        <div className="copyright">
          <div className="BN">
            <BiCopyright className="BiCopyright" />{" "}
            <p>
              2022 INAMURAHMAN ENVIRONMENTAL HYGIENIC VENTURE.All Right Reserved
              | BN:3466674
            </p>
          </div>
          <div className="producer">
            <p>web design by: Mikail Abdulraheem</p>
            <a
              href="http://"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <SiFacebook className="facebook" />
            </a>
            <a
              href="http://abdulraheemmukaila6@gmail.com"
              target="_blank"
              title="Email"
              rel="noopener noreferrer"
            >
              <AiOutlineMail className="mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
