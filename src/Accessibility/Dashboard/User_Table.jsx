import React, { useState } from "react";
import { TbUserSearch } from "react-icons/tb";

const User_Table = ({ user }) => {
  const [search_user, setSearch_user] = useState(" ");
  console.log();

  return (
    <div className="user">
      <div className="searchField">
        <input
          type="text"
          onChange={(e) => setSearch_user(e.target.value)}
          placeholder="please type here to display user..."
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
          <tbody>
            {user ? (
              user
                .filter(
                  (m) =>
                    m.email.toLowerCase().includes(search_user.toLowerCase()) ||
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
            ) : (
              <div className="loaderDiv">
                <p> sorry trying to upload user,please wait a minute</p>
                <p className="loader"></p>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User_Table;
