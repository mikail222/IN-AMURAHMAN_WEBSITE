import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { GrProductHunt } from "react-icons/gr";
import { TbCurrencyNaira } from "react-icons/tb";

const User_Column = () => {
  return (
    <div className="user_col">
      <div className="container">
        <div className="WrapperContainer">
          <div>
            <article className="colarrange">
              <p>SERVICE INFO</p>
              <nav>
                <p>
                  Booking : <i></i>{" "}
                </p>
                <p>
                  Consult : <i></i>{" "}
                </p>{" "}
                <p>
                  Enquiry : <i></i>{" "}
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
                  Bought item : <i></i>{" "}
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
                    <TbCurrencyNaira />
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
                    <TbCurrencyNaira />
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
