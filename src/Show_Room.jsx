import React, { memo, useEffect, useState } from "react";
import Footer from "./Footer";
import productInfo from "./asset/productHead.svg";
import product_Head from "./asset/product_header.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowLeft, BsHeart } from "react-icons/bs";
import { MdRemoveShoppingCart, MdStarRate } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import Customer from "./Customer";
import BlogAds from "./BlogAds";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Clean_touch from "./Clean_touch";
import { BiCart } from "react-icons/bi";

const Show_Room = ({ blogList }) => {
  const [toggleProduct, setToggleProduct] = useState(true);
  const [togglePage, setTogglePage] = useState(false);

  const [searchProduct, setSearchProduct] = useState("");
  const productList = useSelector(
    (state) => state.products.product.addProduct[0]
  );
  const cartItem = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const [cart, setCart] = useState(cartItem);
  const [selected, setSelected] = useState(0);
  const [add, setAdd] = useState();
  const [remove, setRemove] = useState();

  const [warning, setWarning] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const checkList = productList?.filter((p) =>
    p.product_name?.toLowerCase().includes(searchProduct?.toLowerCase())
  );
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchProduct(event.target.value);
  };
  const handleplusClick = (p) => {
    const productId = p.id;
    const cartIds = cart.find((p) => p.id === productId);
    if (cartIds) {
      setCart(
        cart.map((pr) => (pr.id === productId ? { ...p, qty: pr.qty + 1 } : pr))
      );
    } else {
      return;
    }
  };

  const handleminusClick = (p) => {
    const productId = p.id;
    const cartIds = cart.find((p) => p.id === productId);
    if (cartIds) {
      setCart(
        cart.map((pr) => (pr.id === productId ? { ...p, qty: pr.qty - 1 } : pr))
      );
    } else {
      return;
    }
  };
  const removeCart = (p) => {
    setCart(cart.filter((id) => id !== p));
    setRemove(p.product_name);
    setTimeout(() => {
      setRemove(null);
    }, 5000);
  };
  const addCart = (product) => {
    const productId = product.id;
    const pIds = cart.some((p) => p.id === productId);
    if (!pIds) {
      setCart([...cart, { ...product }]);
      setAdd(product.product_name);
      setTimeout(() => {
        setAdd(null);
      }, 5000);
    } else {
      setSelected(product.product_name);
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 5000);
      return;
    }
  };
  const cartLenght = cart.length;
  const total = cart
    .map(({ price, qty }) => Number(price * qty))
    .reduce((a, b) => a + b, 0);

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
      {togglePage === false && (
        <div className="show_room">
          <div className="product-center">
            <img src={product_Head} alt="" />
            <p>
              Make Order for our quality product for various Fumigation,Pest
              Control and Environmental cleaning purpose at your finger tips and
              get them delivered to your Door step{" "}
            </p>
          </div>
          <div className="showCart">
            {warning == true && (
              <div className="cartwarning" data-aos="zoom-in">
                <div data-aos="slide-left">
                  <h6>{selected} </h6>
                </div>

                <p data-aos="slide-right"> is already exist</p>
              </div>
            )}
            {add && (
              <div className="cartAdded" data-aos="zoom-in">
                <div data-aos="slide-left">
                  <h6>{add} </h6>
                </div>

                <p data-aos="slide-right"> is successfully added</p>
              </div>
            )}
            {remove && (
              <div className="cartwarning" data-aos="zoom-in">
                <div data-aos="slide-left">
                  <h6>{remove} </h6>
                </div>

                <p data-aos="slide-right"> is removed successfully</p>
              </div>
            )}
            {cart.length == 0 ? (
              ""
            ) : (
              <div>
                <div className="mScreen" onClick={() => setTogglePage(true)}>
                  <h6>Cart Items</h6>{" "}
                  <span>
                    <BiCart className="cartIcon" />
                    <p>{cart.length}</p>
                  </span>
                </div>
                <nav data-aos="zoom-in" className="lgScreen">
                  <h4>Cart Items ({cartLenght})</h4>
                  <div className="carthead">
                    <h6>Product Name</h6>
                    <TbCurrencyNaira
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                      }}
                    />
                  </div>
                  {cart.map((p, idx) => (
                    <div key={idx} className="cart">
                      <img src={p.img} alt="" />
                      <p className="cartName">{p.product_name}</p>
                      <p>{p.price}</p>
                      <button>
                        <MdRemoveShoppingCart
                          className="cartIcon"
                          onClick={() => removeCart(p)}
                        />
                      </button>
                    </div>
                  ))}
                  <div className="cartTotal">
                    <h6>Total </h6>
                    <h5>NGN {total}</h5>
                  </div>
                  <button
                    className="cartdetailsbtn"
                    onClick={() => setTogglePage(true)}
                  >
                    {" "}
                    <p>See Details</p>
                  </button>
                </nav>
              </div>
              // <CartModal
              //   setTogglePage={setTogglePage}
              //   cart={cart}
              //   total={total}
              //   setCart={setCart}
              //   removeCart={removeCart}
              //   cartLenght={cartLenght}
              // />
            )}
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
              {checkList?.slice(0, 4).map((product, i) => (
                <div key={i} className="firstClass">
                  <nav className="first">
                    <img
                      className="imgs"
                      onClick={() => navigate(`Product_Detail/${id}`)}
                      src={product.img}
                      alt=""
                    />
                    <BsHeart className="heartIcon" />
                    <p className="head">{product.product_name}</p>
                    <div className="starclass">
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                    </div>
                    <div className="chartprice">
                      <p>NGN </p>
                      <p>{product.price}</p>
                    </div>
                    <div className=" chartClass">
                      <button
                        className="chartBtn"
                        onClick={() => addCart(product)}
                      >
                        ADD TO CHART
                      </button>{" "}
                    </div>
                  </nav>
                </div>
              ))}
            </div>
          )}

          {!toggleProduct && (
            <div className="cleaning_product">
              {checkList.map((product, i) => (
                <div key={i} className="firstClass">
                  <nav className="first">
                    <img
                      className="imgs"
                      onClick={() => navigate(`Product_Detail/${id}`)}
                      src={product.img}
                      alt=""
                    />
                    <BsHeart className="heartIcon" />
                    <p className="head">{product.product_name}</p>
                    <div className="starclass">
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                      <MdStarRate className="firstStarIcon" />
                    </div>

                    <div className="chartprice">
                      <p>NGN </p>
                      <p>{product.price}</p>
                    </div>
                    <div className=" chartClass">
                      <button
                        className="chartBtn"
                        onClick={() => addCart(product)}
                      >
                        ADD TO CHART
                      </button>
                    </div>
                  </nav>
                </div>
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
              <button
                className="minimize"
                onClick={() => setToggleProduct(true)}
              >
                MINIMIZE
              </button>
            )}
          </div>
        </div>
      )}
      {togglePage == true && (
        <div>
          {" "}
          <div className="cartsumContainer">
            <nav data-aos="slide-left" className="cartNav">
              <div className="cartlen">
                <h4>Shopping Cart </h4>
                <p>{cartLenght} Items</p>
              </div>
              <div className="carthead">
                <h6>Product </h6>
                <TbCurrencyNaira
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
              </div>
              {cart.map((p, idx) => (
                <div key={idx} className="cartmodal">
                  <img
                    src={p.img}
                    alt=""
                    onClick={() => navigate(`Product_Detail/${p.id}`)}
                  />
                  <p className="cartName">{p.product_name}</p>
                  <div className="cartQty">
                    <button onClick={() => handleplusClick(p, 1)}>+</button>
                    <p>{p.qty}</p>
                    <button onClick={() => handleminusClick(p)}>-</button>
                  </div>
                  <p>{p.price}/unit</p>
                  <p>{p.qty * p.price}</p>
                  <button>
                    <MdRemoveShoppingCart
                      className="cartIcon"
                      onClick={() => removeCart(p)}
                    />
                  </button>
                </div>
              ))}
              <button className="backarr" onClick={() => setTogglePage(false)}>
                <BsArrowLeft className="backarrIcon" />
                <p>Back to Product</p>
              </button>
            </nav>{" "}
            <div className="cartsum" data-aos="slide-right">
              <h4>Summary</h4>
              <div className="cartchild">
                <p>ITEMS {cart.length}</p>
                <p>NGN {total}</p>
              </div>
              <div className="cartchild">
                <p>Delivary service </p>
                <p>NGN 0</p>
              </div>
              <div className="cartTotaldetail">
                <h6>subtotal </h6>
                <p>NGN {total}</p>
              </div>
              <div className="cartTotaldetail">
                <h6>TOTAL </h6>
                <h5>NGN {total}</h5>
              </div>
              <button
                className="cartdetailsModal"
                onClick={() => setTogglePage(true)}
              >
                <p onClick={() => navigate("/PaymentDetail")}>CHECKOUT</p>
              </button>
            </div>
          </div>
        </div>
        // <CartSummary
        //   setTogglePage={setTogglePage}
        //   cart={cart}
        //   total={total}
        //   navigate={navigate}
        //   setRemove={setRemove}
        //   cartLenght={cartLenght}
        //   removeCart={removeCart}
        // />
      )}

      <Customer />
      <Clean_touch navigate={navigate} />
      <BlogAds blogList={blogList} />
      <Clean_touch />
      <Footer />
    </div>
  );
};

export default memo(Show_Room);
