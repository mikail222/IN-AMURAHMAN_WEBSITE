import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { auth, db } from "../../firebaseconfig";
import { TbCurrencyNaira } from "react-icons/tb";

const Columns = ({
  user,
  booking,
  enquiry,
  consult,
  productUpdate,
  sales,
  totalamount,
}) => {
  const currentUser = auth.currentUser;
  const day = new Date();

  const lastMonth = new Date(new Date().setMonth(day.getMonth() - 1));
  console.log(lastMonth);
  useEffect(() => {
    const getLastMonth = async () => {
      const lastMonthQuery = query(
        collection(db, "Admin"),
        where("timeStamp", "<=", day, where("timeStamp", ">", lastMonth))
      );
      const lastMonthData = await getDocs(lastMonthQuery);
      // console.log(lastMonthData.docs.length);
    };
    getLastMonth();
  }, []);

  const today = new Date().toDateString();
  const findNewUser = user.filter((m) => m.day === today);
  const findEnquire = enquiry.filter((m) => m.day === today);
  const findBooking = booking.filter((m) => m.day === today);
  const findConsult = consult.filter((m) => m.day === today);
  const finduser = enquiry.filter((m) => m.day === today);

  const newSale = sales.filter((d) => d.day === today);
  const totalSales = totalamount
    .map(({ amount }) => amount[0])
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="container">
        <div className="WrapperContainer">
          <div>
            <article className="colarrange">
              <p>NEW CLIENT</p>
              <nav>
                <p>
                  Booking : <i>{findBooking.length}</i>{" "}
                </p>
                <p>
                  Consult : <i>{findConsult.length}</i>{" "}
                </p>{" "}
                <p>
                  Enquiry : <i>{findEnquire.length}</i>{" "}
                </p>{" "}
              </nav>
            </article>
            <span>
              <AiOutlineUserAdd className="icon" />
            </span>
          </div>
          <div>
            <article className="colarrange">
              <p>PRODUCTS & SALES</p>
              <nav>
                <p>
                  Products in Stock: <i>{productUpdate.length}</i>{" "}
                </p>
                <p>
                  New Sales : <i>{newSale.length + 1}</i>{" "}
                </p>

                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Total Sales :
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TbCurrencyNaira />
                    {totalSales}
                  </i>
                </p>
              </nav>
            </article>
            <span>
              <AiOutlineShoppingCart className="icon" />
            </span>
          </div>
          <div>
            <article className="colarrange">
              <p>USERS INFORMATION</p>
              <nav>
                <p>
                  Users : <i>{user.length}</i>{" "}
                </p>
                <p>
                  New user : <i>{findNewUser.length}</i>{" "}
                </p>{" "}
                <p>
                  current User : <i>0</i>{" "}
                </p>{" "}
              </nav>
            </article>
            <span>
              <BiUserCheck className="icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columns;
