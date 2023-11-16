import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import Payment_Method from "./Accessibility/Payment_Method";
import Footer from "./Footer";
import Clean_touch from "./Clean_touch";
import Our_Products from "./Accessibility/Our_Products";
import { MdKeyboardArrowDown, MdStarRate } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import chartHead from "./asset/chartHead.svg";
import chartText from "./asset/chartText.svg";
import { BiSearch } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import BlogAds from "./BlogAds";
import { useSelector } from "react-redux";

const ProductDetail = ({ productUpdate, setCount, count }) => {
  // const [count, setCount] = useState(0);
  const [togglePage, setTogglePage] = useState(true);
  const [toggleSearch, setToggleSearch] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = productUpdate?.filter((p) => p.id === id);
  const total = userId?.map(({ price }) => price * count);
  const product_name = userId?.map(({ product_name }) => product_name);
  const product_Img = userId?.map(({ img }) => img);

  return (
    <div>
      <div>
        <div className="collection">
          <div className="menu">
            <GiHamburgerMenu />
            All category
            <MdKeyboardArrowDown style={{ width: "25px", height: "25px" }} />
          </div>
          <div>
            {userId?.map(({ product_name, id }) => (
              <div key={id} className="colName">
                <h2>{product_name} Collection</h2>
                {toggleSearch && (
                  <BiSearch
                    onClick={() => setToggleSearch(!true)}
                    className="searIcon"
                  />
                )}
              </div>
            ))}
          </div>
          {!toggleSearch && (
            <div className="searchClassMobile">
              <input
                type="text"
                placeholder="Search product"
                className="searchProductDetail"
              />
              <BiSearch />
            </div>
          )}
          <div className="searchClass">
            <input
              type="text"
              placeholder="Search product"
              className="searchProductDetail"
            />
            <BiSearch />
          </div>
        </div>
        {togglePage ? (
          <div className="details">
            <main>
              <div className="adsImgclass">
                {productUpdate
                  ?.slice(0, 4)
                  .map(({ img, product_name, id, price }) => (
                    <div className="product_map" key={id}>
                      <img src={img} alt="" className="adsImg" />
                    </div>
                  ))}
              </div>
              <div className="productDetailImage">
                {userId?.map(({ img, product_name, id, price }) => (
                  <div className="product_map" key={id}>
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {userId?.map(({ qty, product_name, id, price }) => (
                  <div className="detail_Info" key={id}>
                    <p>Brand: {product_name}</p>
                    <p>Availablity: Only {qty} in stock</p>
                    <h5 className="pric">NGN {price}</h5>
                    <div className="starclass">
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolore maiores incidunt autem! Porro, adipisci dolor ipsam
                      nam inventore numquam et suscipit, quae sunt ratione eum
                      repellendus nihil sit impedit veniam.
                    </p>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis amet blanditiis dignissimos iste perspiciatis!
                      Quasi, voluptate incidunt? Mollitia, in minus earum quis
                      odit magnam reprehenderit vero voluptatum. Voluptatum,
                      dolor ea?
                    </p>
                    <p className="total">
                      Total Amount is: <b>NGN</b> <b>{total}</b>
                    </p>
                    <div className="count">
                      <div className="countButton">
                        <button onClick={(e) => setCount((p) => p + 1)}>
                          +
                        </button>
                        <p> {count}</p>
                        <button
                          onClick={(e) => setCount((d) => (!d ? 0 : d - 1))}
                        >
                          -
                        </button>
                      </div>
                      <div className="buttonDiv">
                        <button
                          className="clearButton"
                          onClick={(e) => setCount(0)}
                        >
                          <p>Clear</p>
                        </button>
                        <button
                          className="clearButton2"
                          onClick={() => setTogglePage(false)}
                        >
                          <p>Buy now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="adsImgclassMobile">
                {productUpdate
                  ?.slice(0, 4)
                  .map(({ img, product_name, id, price }) => (
                    <div className="product_map" key={id}>
                      <img src={img} alt="" className="adsImg" />
                    </div>
                  ))}
              </div>
            </main>
          </div>
        ) : (
          <Payment_Method
            total={total}
            product_name={product_name}
            product_Img={product_Img}
            setTogglePage={setTogglePage}
          />
        )}
      </div>
      <div className="our-products-container" data-aos="zoom-in">
        <div className="chartHeadClass">
          <img src={chartHead} alt="" />
          <p className="productdescript">
            Make Order for our quality product for various Fumigation,Pest
            Control and Environmental cleaning purpose at your finger tips and
            get them delivered to your Door step{" "}
          </p>{" "}
        </div>
        <div className="cleaning_equip">
          {productUpdate?.slice(0, 4).map(({ img, product_name, price }, i) => (
            <div key={i} className="firstClass">
              <div className="first">
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
                  <button className="chartBtn">ADD TO CHART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="productbtn" onClick={() => navigate(-1)}>
          VIEW ALL PRODUCTS
        </button>
      </div>{" "}
      <Clean_touch />
      <Footer />
    </div>
  );
};

export default ProductDetail;
