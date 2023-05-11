import React from "react";

const Product_Details = ({ product_detail, count }) => {
  console.log(product_detail);
  return (
    <div className="productWrapper">
      <h2>Stock List</h2>
      <table className="Author">
        <thead>
          <tr className="tableHeader">
            <th>Product Name</th>
            <th>Price</th>
            <th>Updated</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {product_detail
            // .filter(
            //   (m) =>
            //     m.email.toLowerCase().includes(search_user.toLowerCase()) ||
            //     m.first.includes(search_user.toLocaleLowerCase())
            // )
            .map(({ img, price, product_name, qty, day }, i) => (
              <tr key={i} className="userTableHeader">
                <td className="AuthorAlign">
                  <img src={img} alt="" className="Authoricon" />
                  <p>{product_name}</p>
                </td>

                <td>{price}</td>
                <td>{day}</td>
                <td>{qty}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product_Details;
