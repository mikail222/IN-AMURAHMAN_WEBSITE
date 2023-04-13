import React, { memo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

const Show_Room = ({
  checkList,
  findProduct,
  setFindProduct,
  productUpdate,
}) => {
  console.log(findProduct);
  console.log(checkList);

  const handleChange = (event) => {
    setFindProduct(event.target.value);
  };
  return (
    <div>
      <div className="show_room">
        <input
          type="text"
          placeholder="Search your Product....."
          value={findProduct}
          onChange={handleChange}
        />
        <div className="cleaning_product">
          {productUpdate.map(({ img, product_name, id }, i) => (
            <div key={i}>
              <Link className="first" to={`Product_detail/${id}`}>
                <i>Order Now</i>
                <img className="imgs" src={img} alt="" />
                <p>{product_name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default memo(Show_Room);
