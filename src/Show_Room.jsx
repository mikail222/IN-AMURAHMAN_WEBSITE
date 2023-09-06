import React, { memo, useEffect, useState } from "react";
import Footer from "./Footer";
import productInfo from "./asset/productHead.svg";
import product_Head from "./asset/product_header.svg";
import product_text from "./asset/protect_text.svg";
import stars from "./asset/Group 7843.svg";

import AOS from "aos";
import addToChart from "./asset/Frame 1206.svg";
import "aos/dist/aos.css";
import { BsHeart } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import Customer from "./Customer";
import BlogAds from "./BlogAds";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Clean_touch from "./Clean_touch";

const Show_Room = ({ findProduct, setFindProduct, blogList }) => {
  const [toggleProduct, setToggleProduct] = useState(true);
  const [counter, setCounter] = useState(1);
  const productList = useSelector(
    (state) => state.products.product.addProduct[0]
  );
  const [searchProduct, setSearchProduct] = useState("");
  const checkList = productList?.filter((p) =>
    p.product_name?.toLowerCase().includes(searchProduct?.toLowerCase())
  );
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleChange = (event) => {
    setSearchProduct(event.target.value);
  };
  return (
    <div>
      <div className="logo2">
        <div className="overlay">
          <div className="brand">
            <div className="alignStars">
              <img src={productInfo} alt="" className="profession" />
            </div>
          </div>
        </div>
      </div>
      <div className="show_room">
        <div className="product-center">
          <img src={product_Head} alt="" />
          <img src={product_text} alt="" />
        </div>
        {!toggleProduct && (
          <input
            type="text"
            placeholder="Search your desire  Product....."
            value={searchProduct}
            onChange={handleChange}
          />
        )}
        {toggleProduct && (
          <div
            className="cleaning_product"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            {checkList
              ?.slice(0, 4)
              .map(({ img, product_name, id, price }, i) => (
                <Link
                  key={i}
                  to={`Product_Detail/${id}`}
                  className="firstClass"
                >
                  <nav className="first">
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
                      <p className="nairaIcon">NGN </p>
                      <p>{price}</p>
                    </div>
                    <div className=" chartClass">
                      <button className="chartBtn" onClick={"thanks"}>
                        ADD TO CHART
                      </button>{" "}
                    </div>
                  </nav>
                </Link>
              ))}
          </div>
        )}

        {!toggleProduct && (
          <div className="cleaning_product">
            {checkList.map(({ img, product_name, id, price }, i) => (
              <Link key={i} to={`Product_Detail/${id}`} className="firstClass">
                <nav className="first">
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
                    <p className="nairaIcon">NGN </p>
                    <p>{price}</p>
                  </div>
                  <div className=" chartClass">
                    <button className="chartBtn" onClick={"thanks"}>
                      ADD TO CHART
                    </button>
                  </div>
                </nav>
              </Link>
            ))}
          </div>
        )}
        <div className="productBtnContainer">
          {toggleProduct && (
            <button
              className="productbtn"
              onClick={() => setToggleProduct(false)}
            >
              VIEW ALL PRODUCTS
            </button>
          )}
          {!toggleProduct && (
            <button className="minimize" onClick={() => setToggleProduct(true)}>
              MINIMIZE
            </button>
          )}
        </div>
      </div>
      <Customer />
      <Clean_touch navigate={navigate} />
      <BlogAds blogList={blogList} />
      <Clean_touch />

      <Footer />
    </div>
  );
};

export default memo(Show_Room);
