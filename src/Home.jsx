import React from "react";
import img from "./asset/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
import logo1 from "./asset/312243133_467283241883125_709980892638630759_n.png";

import { Link } from "react-router-dom";

const Home = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div className="logo1">
        <img src={logo1} alt="" />
      </div>
      <div className="company-info">
        <h4 className="environment">
          Environmental Hard Eradication and Elevating Homes to the Most Advance
          Hygienic State of Comfort
        </h4>
        <p></p>
        <p>
          we are much more concern with the safety and standard Environmental
          sanity pleasure of the people
        </p>
      </div>

      <div className="cleaning_product">
        {products.map(({ image, name }, i) => (
          <div key={i}>
            <Link className="first">
              <i>Order Now</i>
              <img className="imgs" src={image} alt="" />
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
