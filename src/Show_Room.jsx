import React from "react";
import { Link } from "react-router-dom";

const Show_Room = ({ products }) => {
  console.log(products);
  return (
    <div className="show_room">
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

export default Show_Room;
