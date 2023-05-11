import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Show_Room = ({
  checkList,
  findProduct,
  setFindProduct,
  productUpdate,
}) => {
  const [saveProduct, setSaveProduct] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleChange = (event) => {
    setFindProduct(event.target.value);
  };
  return (
    <div>
      <div className="show_room">
        <input
          type="text"
          placeholder="Search your desire  Product....."
          value={findProduct}
          onChange={handleChange}
        />
        <div className="cleaning_product">
          {checkList.map(({ img, product_name, id }, i) => (
            <div key={i} data-aos="fade-down">
              <Link className="first" to={`Product_detail/${id}`}>
                <i>Buy Now</i>
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
