import React, { useEffect } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useSelector } from "react-redux";

const Sales_Details = ({ sales }) => {
  const productUpdate = useSelector(
    (state) => state.products.product.addProduct[0]
  );
  // const findItem = Object.values(sales).map(({ items }) => items);
  // const findamount = Object.values(sales).map(({ amount }) => amount);
  // const findprice = productUpdate?.map(({ price }) => price);
  const findName = productUpdate?.map(({ product_name }) => product_name);

  return (
    <div className="productWrapper">
      <h2>Sales Detail</h2>
      <table className="Author">
        <thead>
          <tr className="tableHeader">
            <th> Buyer</th>
            <th>Dated</th>
            <th>Product</th>
            <th className="hide">Amount</th>
            <th className="naira">
              <TbCurrencyNaira />
            </th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(
            ({ amount, items, firstName, lastName, day, contact, qtys }, i) => (
              <tr key={i} className="userTableHeader">
                <td className="AuthorAlign">
                  {firstName} {lastName}
                </td>{" "}
                <td>{contact}</td>
                <td>{day}</td>
                <td>{items}</td>
                <td>{amount}</td>
                <td>{qtys}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Sales_Details;
