import React, { useState } from "react";
import { TbUserSearch } from "react-icons/tb";

const User_Table = ({ user }) => {
  const [search_user, setSearch_user] = useState(" ");
  // const [listLimit_2, setlListLimit_2] = useState(false);
  // const [listLimit_3, setlListLimit_3] = useState(false);

  // const listLimit1 = user.slice(0, 6);
  // const listLimit2 = user.slice(7, 12);
  // const listLimit3 = user;
  console.log();

  return (
    <div className="user">
      <div className="searchField">
        <TbUserSearch className="searchIcon" />
        <input
          type="text"
          onChange={(e) => setSearch_user(e.target.value)}
          placeholder="please search user..."
          className="filter-user"
          id="filter_user"
        />
      </div>

      <div className="productWrapper">
        <h2>User's List</h2>
        <div className="tableDiv">
          {/* <div> Picture</div> */}
          <div>User Name</div>
          <div>Email</div>
          <div>dated</div>
          <div>Contact</div>
        </div>
        <table className="Author">
          {/* <thead> */}
          {/* </thead> */}
          <tbody>
            {user
              ? user
                  .filter(
                    (m) =>
                      m.email
                        .toLowerCase()
                        .includes(search_user.toLowerCase()) ||
                      m.first.includes(search_user.toLocaleLowerCase())
                  )
                  .map(({ img, first, LastName, email, phone, day }, i) => (
                    <tr key={i} className="userTableHeader">
                      <td className="AuthorAlign">
                        <img src={img} alt="" className="Authoricon" />
                      </td>

                      <td>
                        {first} {LastName}
                      </td>
                      <td>{email}</td>
                      <td>{day}</td>
                      <td>{phone}</td>
                    </tr>
                  ))
              : "sorry trying  to upload user,please wait a minute"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User_Table;
