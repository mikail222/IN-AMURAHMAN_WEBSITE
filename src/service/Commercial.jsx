import React from "react";
import officeImg from "../asset/marc-babin-ecGZWPOvya0-unsplash.jpg";
import oficeimg1 from "../asset/kate-sade-2zZp12ChxhU-unsplash.jpg";
import resturant from "../asset/ibrahim-boran-aBNPslolmJM-unsplash.jpg";
import pool from "../asset/jay-PvyfCGpUXSQ-unsplash.jpg";
import officeimg2 from "../asset/mark-bertulfo-XKimW0pke6w-unsplash.jpg";
import officeimg3 from "../asset/martha-dominguez-de-gouveia-k-NnVZ-z26w-unsplash.jpg";
import officeimg4 from "../asset/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import officeimg5 from "../asset/ivan-aleksic-PDRFeeDniCk-unsplash.jpg";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const Commercial = ({ checkList }) => {
  return (
    <div>
      <div
        className="commercial"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <main style={{ width: "65%" }}>
          <div className="main">
            <h3 style={{}}>Commercial cleaning</h3>
          </div>
          <p style={{ marginTop: "2rem" }}>
            pleasant and healthy environment is an important consideration for a
            productive and happy work force when determining their job
            satisfaction. Your staff deserve the best conditions that can be
            provided, and Cleaneat offers office cleaning services dedicated to
            ensuring your staff can focus on your core business and love the
            spaces that they work in. We will work with you to evaluate your
            requirements and to customize our cleaning program to the specific
            concerns of your company or organization
          </p>
          <p style={{ marginTop: "2rem" }}>
            Our office cleaning service is tailored to each individual customer
            and can include specialist cleaning such as computer and IT
            equipment to prevent the risk of overheating. We can also have
            cleaning contractors that provide a washroom cleaning programme with
            the regular stocking of hygiene and paper products and
          </p>
        </main>
        <aside style={{ width: "30%" }}>
          {checkList.slice(5, 6).map(({ image, name, id }, i) => (
            <div style={{ marginTop: "3rem" }} key={i}>
              <Link className="first" to={`Product_detail/${id}`}>
                <i>Order Now</i>
                <img className="first_class_img" src={image} alt="" />
                <p style={{ marginRight: "2rem" }}>{name}</p>
              </Link>
            </div>
          ))}
          <div className="serviceDescription">
            <h4 style={{ color: "white", margin: "1rem" }}>
              {" "}
              0ur Commercial Services are:
            </h4>
            <div>
              <GiCheckMark />
              <p>Resturance cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Schools & Class Rooms cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Eatry cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Hotels cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Gym cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Hospital cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Swimming Pool cleaning</p>
            </div>
          </div>
        </aside>{" "}
      </div>
      <div className="commercialSlideImg">
        <img src={oficeimg1} alt="" />
        <img src={resturant} alt="" />
        <img src={officeimg2} alt="" />
        <img src={officeimg3} alt="" />
        <img src={officeimg4} alt="" />
        <img src={officeImg} alt="" />
        <img src={pool} alt="" />
        <img src={officeimg5} alt="" />
        {/* <img src={} alt="" /> */}
      </div>
    </div>
  );
};

export default Commercial;
