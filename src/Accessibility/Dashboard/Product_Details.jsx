import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
      <h2 className="productHead">Stock List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-[lightgreen] text-[1.5rem]">
              <TableCell>Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Stock</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product_detail?.map(
              ({ img, price, product_name, stock, day, id }, i) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <img src={img} alt="" className="AuthoriOffline" />
                  </TableCell>
                  <TableCell align="left">{product_name}</TableCell>
                  <TableCell align="left"> {price}</TableCell>{" "}
                  <TableCell align="left">{day}</TableCell>
                  <TableCell align="center">{stock}</TableCell>{" "}
                  <TableCell align="left">
                    <button onClick={() => handleDelete(id)} className="delete">
                      delete
                    </button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Product_Details;
