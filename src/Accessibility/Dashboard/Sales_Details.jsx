import React, { useEffect } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useSelector } from "react-redux";

const Sales_Details = ({ sales }) => {
  const productUpdate = useSelector(
    (state) => state.products.product.addProduct[0]
  );
  const findItem = Object.values(sales).map(({ items }) => items[0]);
  const findamount = Object.values(sales).map(({ amount }) => amount[0]);
  const findprice = productUpdate?.map(({ price }) => price);
  const findName = productUpdate?.map(({ product_name }) => product_name);

  useEffect(() => {
    const filtterQuantity = () => {
      if (sales?.filter((a) => a.items[0].toLowerCase().includes(findName))) {
        return console.log(
          sales.map(({ amount }) => amount[0]) /
            productUpdate?.map(({ price }) => price)
        );
      }
    };
    filtterQuantity();
  }, []);

  // console.log(findamount);
  // console.log(findprice);
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
          {sales
            // .filter(
            //   (m) =>
            //     m.email.toLowerCase().includes(search_user.toLowerCase()) ||
            //     m.first.includes(search_user.toLocaleLowerCase())
            // )
            .map(
              (
                { amount, items, firstName, lastName, day, contact, qtys },
                i
              ) => (
                <tr key={i} className="userTableHeader">
                  <td className="AuthorAlign">{firstName}</td>
                  <td className="hide">{contact}</td>
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
