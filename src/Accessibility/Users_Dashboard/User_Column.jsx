import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { GrProductHunt } from "react-icons/gr";
import { TbCurrencyNaira } from "react-icons/tb";
import { auth } from "../../firebaseconfig";

const User_Column = ({ booked, consultation, findings, acquiredItem }) => {
  return (
    <div className="user_col">
      <div className="container">
        <div className="WrapperContainer">
          <div>
            <article className="colarrange">
              <p>SERVICE INFO</p>
              <nav>
                <p>
                  Booking : <i>{booked == true ? booked?.lenght : 0}</i>
                </p>
                <p>
                  Consult :{" "}
                  <i>{consultation == true ? consultation?.lenght : 0}</i>
                </p>{" "}
                <p>
                  Enquiry : <i>{findings == true ? findings?.lenght : 0}</i>
                </p>{" "}
              </nav>
            </article>
            <span>
              <AiOutlineUserAdd className="icon" />
            </span>
          </div>
          <div>
            <article className="colarrange">
              <p>PRODUCTS</p>
              <nav>
                <p>
                  Products : <i></i>
                </p>
              </nav>
            </article>
            <span>
              <GrProductHunt className="icon" />
            </span>
          </div>
          <div>
            <article className="colarrange">
              <p>TODAY'S PURCHASE</p>
              <nav>
                <p>
                  Bought item :
                  <i>{acquiredItem == true ? acquiredItem?.lenght : 0}</i>
                </p>

                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Discount :
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TbCurrencyNaira />0
                  </i>
                </p>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Gross payment :
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TbCurrencyNaira />0
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
                  Users : <i></i>{" "}
                </p>
                <p>
                  New user : <i></i>{" "}
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

export default User_Column;
