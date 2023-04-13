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
    <div>
      <div className="searchField">
        <TbUserSearch className="searchIcon" />

        <input
          type="text"
          onChange={(e) => setSearch_user(e.target.value)}
          placeholder="search user..."
          className="filter-user"
          id="filter_user"
        />
      </div>
      <div className="tableWrapper">
        <table className="Author">
          <thead>
            <tr className="tableHeader">
              <th>Author</th>
              <th>Email</th>
              <th>Date Onboard</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter(
                (m) =>
                  m.email.toLowerCase().includes(search_user.toLowerCase()) ||
                  m.first.includes(search_user.toLocaleLowerCase())
              )
              .map((m, id) => (
                <tr key={id} className="userTableHeader">
                  <td className="AuthorAlign">
                    <img src={m.img} alt="" className="Authoricon" />
                    <p>{m.first + "  " + m.LastName}</p>
                  </td>
                  <td>{m.email}</td>
                  <td>{m.day}</td>
                  <td>{m.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User_Table;
