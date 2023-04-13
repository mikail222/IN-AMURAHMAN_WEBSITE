import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";

const ProductDetail = ({ productUpdate }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();
  const userId = productUpdate.filter((p) => p.id === id);
  const total = userId.map(({ price }) => price * count);
  return (
    <div>
      <div className="details">
        <main>
          <div className="productDetailImage">
            {userId.map(({ img, product_name, id, price }) => (
              <div className="product_map" key={id}>
                <img src={img} alt="" />
                <p style={{ fontSize: "1.5rem" }}>{product_name}</p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  price: <TbCurrencyNaira />
                  <b>
                    {" "}
                    {console.log(price)}
                    {price}
                  </b>
                </p>
              </div>
            ))}
          </div>
          <div className="items_countbg">
            <div className="items_count">
              <h4 style={{ textAlign: "center", marginTop: "10%" }}>
                Please select the Quantity of Items you need
              </h4>

              <div className="countButton" style={{ marginTop: "5rem" }}>
                <button onClick={(e) => setCount((p) => p + 1)}>+</button>
                <button onClick={(e) => setCount((d) => (!d ? 0 : d - 1))}>
                  -
                </button>
              </div>
              <div className="buttonDiv">
                <button className="clearButton" onClick={(e) => setCount(0)}>
                  <p>Clear</p>
                </button>
                <button
                  className="clearButton"
                  onClick={() => navigate("/Payment_Method")}
                >
                  <p>Buy</p>
                </button>
              </div>
              <p style={{ textAlign: "center" }}>
                you have selected <b>{count}</b> items
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                Total Amount is <TbCurrencyNaira /> <b>{total}</b>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductDetail;
