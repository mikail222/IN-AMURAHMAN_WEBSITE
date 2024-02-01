import React, { useEffect } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
      {/* {delete_User && <p className="">{delete_User}</p>} */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="tableHead">
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Last name</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Item</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales?.map(
              (
                { amount, items, firstName, lastName, day, contact, qtys },
                i
              ) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">{firstName}</TableCell>
                  <TableCell align="left"> {lastName}</TableCell>{" "}
                  <TableCell align="left">{contact}</TableCell>
                  <TableCell align="left">{items}</TableCell>
                  <TableCell align="center">{amount}</TableCell>{" "}
                  <TableCell align="left">{day}</TableCell>
                  <TableCell align="left">{qtys}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Sales_Details;
