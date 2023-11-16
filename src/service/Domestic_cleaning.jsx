import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import toilet from "../asset/filios-sazeides-qeIuFR5vPm8-unsplash.jpg";
import wordrobe from "../asset/paseidon72-MaeD4oBtdcE-unsplash.jpg";
import sittingRoom from "../asset/jonathan-borba-UisC7KLAWjs-unsplash.jpg";
import bedRoom from "../asset/francesca-tosolini-hCU4fimRW-c-unsplash.jpg";
import kitchen from "../asset/id-interiors-reFGz40ok8E-unsplash.jpg";
import Footer from "../Footer";

const Domestic_cleaning = ({ checkList }) => {
  return (
    <div>
      <div className="domestic">
        <main>
          <div className="cleaningBg">
            <h4>Domestic cleaning Service</h4>
          </div>
          <p style={{ marginLeft: "1rem", marginTop: "2rem" }}>
            We are proud of our home cleaning services and we are keen to
            provide an affordable service and ensuring the job is done to the
            highest quality. We are big on customer satisfaction, so we like to
            work with you and find out your specific requirements for your home
            and the areas you are particular about cleaning.
          </p>
          <div className="pictorial">
            <div className="dropdown">
              <p>Wordrobe</p>
            </div>
            <div className="dropdown">
              <p>Bed Room</p>
            </div>
            <div className="dropdown">
              <p>Kitchen</p>
            </div>
            <div className="dropdown">
              <p>Living Room</p>
            </div>
            <div className="dropdown">
              <p>Toilet</p>
            </div>
            <div className="dropdown">
              <p>Soakaway</p>
            </div>
          </div>
        </main>
        <aside>
          <Link to="/Show_Room">
            <div className="serviceDescription">
              <h4 style={{ color: "white" }}>Domestic Services are:</h4>
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
            Check out for our Products{" "}
          </Link>
          {checkList.slice(8, 9).map(({ img, product_name, id }, i) => (
            <div style={{ marginTop: "0.5rem", marginBottom: "1rem" }} key={i}>
              <Link className="first" to={`Product_detail/${id}`}>
                <i>Buy Now</i>
                <img className="first_class_img" src={img} alt="" />
                <p>{product_name}</p>
              </Link>
            </div>
          ))}
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Domestic_cleaning;
