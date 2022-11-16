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
  return (
    <footer>
      <div className="footer">
        <ul>
          <h5>Cleaning Service</h5>
          <li>
            <a href="Domestic_cleaning">Domestic,Office,Hotel Cleaning</a>
          </li>
          <li>
            <a href="/Pest_control">Fumigation and Pest Control</a>
          </li>
          <li>
            <a href="/Wast_management"> Wast Management</a>
          </li>
          <li>
            <a href="/Drainage">Drainage Maintainance Service</a>
          </li>
          <li>
            <a href="/Event_maintainance">Event Hygienic Maintainace service</a>
          </li>
        </ul>
        <ul>
          <h5>Our Specification</h5>
          <a href="/Service">
            <li> General Cleaning Service</li>
          </a>
          <a href="/Show_Room">
            <li> Product Sales</li>
          </a>
          <a href="/Hire">
            <li> Hiring of Equipment</li>
          </a>
          <a href="/Consultance">
            <li>Consultation Service</li>
          </a>
          <a href="/Trainning">
            <li> Trainning Services</li>
          </a>
        </ul>
        <ul>
          <h5>Product </h5>
          <li>
            <Link></Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <h5>Domestic Service</h5>

          <a href="/Toilet">
            <li>Toilet </li>
          </a>

          <a href="/Kitchen">
            <li>Kitchen </li>
          </a>

          <a href="/Bed_Room">
            <li>Bed Room </li>
          </a>

          <a href="/Wardrobe">
            <li>Wardrobe </li>
          </a>

          <a href="/Sitting_Room">
            <li>Sitting Room </li>
          </a>
        </ul>
        <ul>
          <h5>Information</h5>
          <a href="/Terms">
            <li>Terms & Condition </li>
          </a>
          <a href="/Policy">
            <li>Privacy Policy </li>
          </a>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
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
        <div
          style={{
            width: "60%",
            backgroundColor: "#0f0326",
            height: "8rem",
            borderTop: "0.25px solid grey",
            color: "gray",
          }}
        >
          <div
            style={{
              marginTop: "2.2rem",
              textAlign: "center",
              display: "inline-flex",
            }}
          >
            <BiCopyright style={{ marginTop: "4px", marginRight: "5px" }} />{" "}
            <p>
              2022 INAMURAHMAN ENVIRONMENTAL HYGIENIC VENTURE.All Right Reserved
              | BN:3466674
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ marginLeft: "8rem", marginRight: "1rem" }}>
              web design by: Mikail Abdulraheem
            </p>
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
                  fill: "rgb(255,255,255,0.5)",
                  marginRight: "1rem",
                }}
                className="facebook"
              />
            </a>
            <a
              href="http://abdulraheemmukaila6@gmail.com"
              target="_blank"
              title="Email"
              rel="noopener noreferrer"
            >
              <AiOutlineMail
                style={{
                  color: "black",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  fill: "rgb(255,255,255,0.5)",
                }}
                className="mail"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
