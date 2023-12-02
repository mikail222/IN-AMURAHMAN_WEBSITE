import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";

const Product_Details = () => {
  const [err, setErr] = useState(" ");
  const [product_detail, setProduct_detail] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "Products"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProduct_detail(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    const checkproduct = product_detail.find((p) => p.id === id);
    try {
      if (
        window.confirm(
          `are sure you want  to  delete  ${checkproduct.product_name} ?`
        )
      ) {
        await deleteDoc(doc(db, "Products", id));
        setProduct_detail(product_detail.filter((p) => p.id !== id));
      }
    } catch (err) {
      setErr(err.message);
      alert;
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };
  console.log(product_detail);
  return (
    <div className="productWrapper">
      <h2>Stock List</h2>
      <table className="Author">
        {/* <thead>
          <tr className="tableHeader">
            <th>Product Name</th>
            <th>Price</th>
            <th>Updated</th>
            <th>Qty</th>
          </tr>
        </thead> */}
        <tbody>
          {product_detail.map(
            ({ img, price, product_name, stock, day, id }, i) => (
              <tr key={i} className="userTableHeader">
                <td className="AuthorAlign">
                  <img src={img} alt="" className="Authoricon" />
                  <p>{product_name}</p>
                </td>

                <td>{price}</td>
                <td>{day}</td>
                <td>{stock}</td>
                <td className="delete" onClick={() => handleDelete(id)}>
                  delete
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Product_Details;
