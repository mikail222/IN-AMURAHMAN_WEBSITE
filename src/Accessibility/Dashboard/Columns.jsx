import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { auth, db } from "../../firebaseconfig";
import { TbCurrencyNaira } from "react-icons/tb";
import { GrProductHunt } from "react-icons/gr";

const Columns = ({
  user,
  booking,
  enquiry,
  consult,
  productUpdate,
  sales,
  totalamount,
  bookingDetails,
  setBookingDetails,
  consultDetails,
  setConsultDetails,
  enquiryDetails,
  setEnquiryDetails,
}) => {
  const currentUser = auth.currentUser;
  const day = new Date();
  const [comment, setComment] = useState([]);

  const lastMonth = new Date(new Date().setMonth(day.getMonth() - 1));
  console.log(lastMonth);

  useEffect(() => {
    const getLastMonth = async () => {
      const { collection, getDocs, query, where } = await import(
        "firebase/firestore"
      );
      const lastMonthQuery = query(
        collection(db, "Admin"),
        where("timeStamp", "<=", day, where("timeStamp", ">", lastMonth))
      );
      const lastMonthData = await getDocs(lastMonthQuery);
      // console.log(lastMonthData.docs.length);
    };
    getLastMonth();
    const getComment = async () => {
      const { collection, getDocs } = await import("firebase/firestore");
      const CommentRef = collection(db, "User_Comment");

      const comment_data = await getDocs(CommentRef);
      setComment(
        comment_data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getComment();
  }, []);

  const today = new Date().toDateString();
  const findCommentCount = comment.filter(({ day }) => day === today);
  const findNewUser = user.filter((m) => m.day === today);
  const findEnquire = enquiry.filter((m) => m.day === today);
  const findBooking = booking.filter((m) => m.day === today);
  const findConsult = consult.filter((m) => m.day === today);
  const finduser = enquiry.filter((m) => m.day === today);

  const newSale = sales?.filter((d) => d.day === today);
  const totalSales = newSale
    .map(({ amount }) => amount[0])
    .reduce((a, b) => a + b, 0);
  const grossTotalSales = totalamount
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
                  {!bookingDetails ? (
                    <button onClick={() => setBookingDetails(true)}>
                      {" "}
                      Booking
                    </button>
                  ) : (
                    <button onClick={() => setBookingDetails(false)}>
                      hide Booking
                    </button>
                  )}
                  : <i>{findBooking.length}</i>
                </p>
                <p>
                  {!consultDetails ? (
                    <button onClick={() => setConsultDetails(true)}>
                      {" "}
                      Consult
                    </button>
                  ) : (
                    <button onClick={() => setConsultDetails(false)}>
                      hide Consult
                    </button>
                  )}
                  : <i>{findConsult.length}</i>{" "}
                </p>{" "}
                <p>
                  {!enquiryDetails ? (
                    <button onClick={() => setEnquiryDetails(true)}>
                      {" "}
                      Enquiry
                    </button>
                  ) : (
                    <button onClick={() => setEnquiryDetails(false)}>
                      hide Enquiry
                    </button>
                  )}
                  : <i>{findEnquire.length}</i>
                </p>
              </nav>
            </article>
            <span>
              <AiOutlineUserAdd className="icon" />
            </span>
          </div>
          <div>
            <article className="colarrange">
              <p>PRODUCTS & OTHERS</p>
              <nav>
                <p>
                  Products in Stock: <i>{productUpdate.length}</i>
                </p>
              </nav>
              <nav>
                <p>
                  Client Comments: <i>{findCommentCount.length}</i>
                </p>
              </nav>{" "}
              <nav>
                <p>
                  All Comments: <i>{comment.length}</i>
                </p>
              </nav>
            </article>
            <span>
              <GrProductHunt className="icon" />
            </span>
          </div>
          <div>
            <article className="colarrange">
              <p>TODAY'S SALES</p>
              <nav>
                <p>
                  Sold item : <i>{newSale.length}</i>{" "}
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
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Gross Sales :
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TbCurrencyNaira />
                    {grossTotalSales}
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
