import React, { useEffect } from "react";

const Sales_Details = ({ sales, productUpdate }) => {
  const findItem = Object.values(sales).map(({ items }) => items[0]);
  const findamount = Object.values(sales).map(({ amount }) => amount[0]);
  const findprice = productUpdate.map(({ price }) => price);
  const findName = productUpdate.map(({ product_name }) => product_name);

  useEffect(() => {
    const filtterQuantity = () => {
      if (sales.filter((a) => a.items[0].toLowerCase().includes(findName))) {
        return console.log(
          sales.map(({ amount }) => amount[0]) /
            productUpdate.map(({ price }) => price)
        );
      }
    };
    filtterQuantity();
  }, []);

  // console.log(productUpdate.map(({ price }) => price));
  console.log(findamount);
  console.log(findprice);
  return (
    <div className="tableWrapper">
      <table className="Author">
        <thead className="tableHeader">
          <tr>
            <th>Buyer</th>
            <th>Contact</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Date Updated</th>
            {/* <th>Quantity</th> */}
          </tr>
        </thead>
        <tbody>
          {sales
            // .filter(
            //   (m) =>
            //     m.email.toLowerCase().includes(search_user.toLowerCase()) ||
            //     m.first.includes(search_user.toLocaleLowerCase())
            // )
            .map(({ amount, items, firstName, lastName, day, contact }, i) => (
              <tr key={i} className="userTableHeader">
                <td className="AuthorAlign">
                  <td>
                    {firstName} {lastName}
                  </td>
                  <td>{contact}</td>
                  <td>{items}</td>
                </td>
                <td>{amount / productUpdate.price}</td>
                <td>{day}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales_Details;
