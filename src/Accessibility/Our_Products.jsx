import React, { useEffect, useState } from "react";
import addToChart from "../asset/Frame 1206.svg";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdStarRate } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import chartHead from "../asset/chartHead.svg";
import chartText from "../asset/chartText.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Our_Products = () => {
  const [counter, setCounter] = useState(1);
  const productAds = useSelector(
    (state) => state.products.product.addProduct[0]
  );
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="our-products-container" data-aos="zoom-in">
      <div className="chartHeadClass">
        <img src={chartHead} alt="" />
        <img src={chartText} alt="" />
      </div>
      <div className="cleaning_equip">
        {productAds?.slice(0, 4).map(({ img, product_name, price }, i) => (
          <div key={i} className="firstClass">
            <Link to="show_Room" className="first">
              <img className="imgs" src={img} alt="" />
              <BsHeart className="heartIcon" />
              <p className="head">{product_name}</p>
              <div className="starclass">
                <MdStarRate className="firstStarIcon" />
                <MdStarRate className="firstStarIcon" />
                <MdStarRate className="firstStarIcon" />
                <MdStarRate className="firstStarIcon" />
                <MdStarRate className="firstStarIcon" />
              </div>

              <div className="chartprice">
                <p>NGN</p>
                <p>{price}</p>
              </div>
              <div className=" chartClass">
                <button className="chartBtn" onClick={"thanks"}>
                  ADD TO CHART
                </button>
                {/* <div className="chartCountBtn">
                  <button onClick={() => setCounter((d) => (!d ? 1 : d - 1))}>
                    -
                  </button>
                  <p>{counter}</p>
                  <button onClick={() => setCounter(counter + 1)}>+</button>
                </div> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="productbtn" onClick={() => navigate("show_Room")}>
        VIEW ALL PRODUCTS
      </button>
    </div>
  );
};

export default Our_Products;
