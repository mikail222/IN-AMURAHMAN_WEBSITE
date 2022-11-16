import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";

const ProductDetail = ({ products }) => {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const userId = products.filter((p) => p.id === Number(id));
  const total = userId.map(({ price }) => price * count);
  return (
    <div className="details">
      <main>
        <div>
          {userId.map(({ image, name, id, price }) => (
            <div className="product_map" key={id}>
              <img src={image} alt="" />
              <p style={{ fontSize: "1.5rem" }}>{name}</p>
              <p
                style={{
                  fontSize: "1.5rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                price: <TbCurrencyNaira />
                <b> {price}</b>
              </p>
            </div>
          ))}
        </div>
        <div className="items_count">
          <h4 style={{ textAlign: "center" }}>
            Please select the Quantity of Items you need
          </h4>

          <div className="countButton" style={{ marginTop: "5rem" }}>
            <button onClick={(e) => setCount((p) => p + 1)}>+</button>
            <button onClick={(e) => setCount((d) => (!d ? 0 : d - 1))}>
              -
            </button>
          </div>
          <button className="clearButton" onClick={(e) => setCount(0)}>
            <p>Clear</p>
          </button>
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
      </main>
      <aside></aside>
    </div>
  );
};

export default ProductDetail;
