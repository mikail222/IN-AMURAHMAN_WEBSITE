import React from "react";
import cleaningImg from "../asset/cdc-jjrXvzbqC5E-unsplash.jpg";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import toilet from "../asset/filios-sazeides-qeIuFR5vPm8-unsplash.jpg";
import wordrobe from "../asset/paseidon72-MaeD4oBtdcE-unsplash.jpg";
import sittingRoom from "../asset/jonathan-borba-UisC7KLAWjs-unsplash.jpg";
import bedRoom from "../asset/francesca-tosolini-hCU4fimRW-c-unsplash.jpg";
import kitchen from "../asset/id-interiors-reFGz40ok8E-unsplash.jpg";

const Domestic_cleaning = ({ checkList }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
      className="domestic"
    >
      <main style={{ width: "65%", height: "100%" }}>
        <div className="cleaningBg">
          <h4>Domestic cleaning Service</h4>
        </div>
        <p>
          We are proud of our home cleaning services and we are keen to provide
          an affordable service and ensuring the job is done to the highest
          quality. We are big on customer satisfaction, so we like to work with
          you and find out your specific requirements for your home and the
          areas you are particular about cleaning.
        </p>
        <div className="pictorial">
          <div className="dropdown">
            <p>Wordrobe</p>
            <span className="dropdown-content">
              <img src={wordrobe} alt="" />
            </span>
          </div>
          <div className="dropdown">
            <p>Bed Room</p>
            <span className="dropdown-content">
              <img src={bedRoom} alt="" />
            </span>
          </div>
          <div className="dropdown">
            <p>Kitchen</p>
            <span className="dropdown-content">
              <img src={kitchen} alt="" />
            </span>
          </div>
          <div className="dropdown">
            <p>Living Room</p>
            <span className="dropdown-content">
              <img src={sittingRoom} alt="" />
            </span>
          </div>
          <div className="dropdown">
            <p>Toilet</p>
            <span className="dropdown-content">
              <img src={toilet} alt="" />
            </span>
          </div>
          <div className="dropdown">
            <p>Soakaway</p>
            <span className="dropdown-content">
              <img
                src="https://media.istockphoto.com/id/177365225/photo/black-hose-in-a-manhole.jpg?s=612x612&w=0&k=20&c=DaIZUuwcC14MCOdISiokSJ_aCkjbdizUtSd0SnbMOFk="
                alt=""
              />
            </span>
          </div>
        </div>
      </main>
      <aside style={{ width: "30%", marginLeft: "1rem", alignItems: "center" }}>
        <Link
          style={{
            marginTop: "3rem",
            textAlign: "center",
            fontSize: "1.4rem",
            fontFamily: "serif",
          }}
          to="/Show_Room"
        >
          Check out for our Products{" "}
        </Link>
        {checkList.slice(7, 8).map(({ image, name, id }, i) => (
          <div style={{ marginTop: "0.5rem" }} key={i}>
            <Link className="first" to={`Product_detail/${id}`}>
              <i style={{ marginLeft: "15rem" }}>Order Now</i>
              <img className="first_class_img" src={image} alt="" />
              <p>{name}</p>
            </Link>
          </div>
        ))}
        <div className="serviceDescription">
          <h4 style={{ color: "white", margin: "1rem" }}>
            Domestic Services Includes:
          </h4>
          <Link to="/Sitting_Room">
            <div>
              <GiCheckMark />
              <p>Living Room cleaning</p>
            </div>
          </Link>
          <Link to="/Bed_Room">
            <div>
              <GiCheckMark />
              <p>Bed Room cleaning</p>
            </div>
          </Link>
          <Link to="Toilet">
            <div>
              <GiCheckMark />
              <p>Toilet cleaning</p>
            </div>
          </Link>
          <Link to="/Wordrobe">
            <div>
              <GiCheckMark />
              <p>Wordrobe cleaning</p>
            </div>
          </Link>
          <Link to="/Kitchen">
            <div>
              <GiCheckMark />
              <p>Kitchen cleaning</p>
            </div>
          </Link>
          <Link to="/Store">
            <div>
              <GiCheckMark />
              <p>Store cleaning</p>
            </div>
          </Link>
          <Link to="/Soakaway">
            <div>
              <GiCheckMark />
              <p>Soakway Maintenance</p>
            </div>
          </Link>
          <div>
            <GiCheckMark />
            <p>Others</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Domestic_cleaning;
