import React, { memo, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Show_Room = ({ checkList, findProduct, setFindProduct }) => {
  console.log(findProduct);
  console.log(checkList);

  const handleChange = (event) => {
    setFindProduct(event.target.value);
  };
  return (
    <div className="show_room">
      <input
        type="text"
        placeholder="Search your Product....."
        value={findProduct}
        onChange={handleChange}
      />
      <div className="cleaning_product">
        {checkList.map(({ image, name, id }, i) => (
          <div key={i}>
            <Link className="first" to={`Product_detail/${id}`}>
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

export default memo(Show_Room);
