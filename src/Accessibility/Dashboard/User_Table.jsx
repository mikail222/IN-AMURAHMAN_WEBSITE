import React, { useState } from "react";
import { auth } from "../../firebaseconfig";
import { deleteUser } from "firebase/auth";
const User_Table = ({ user }) => {
  const [search_user, setSearch_user] = useState(" ");
  const [delete_User, setDelete_User] = useState(" ");
  const [err, setErr] = useState(" ");

  console.log();
  const handleDeleteUser = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        setDelete_User("User deleted");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  const currentUser = auth.currentUser?.email;
  const userStatus = user.filter(({ email }) => email === currentUser);

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
        {delete_User && <p className="">{delete_User}</p>}
        {err & <p className="err">{err}</p>}

        <div className="tableDiv">
          <div>User Details</div>
          {/* <div>Email</div>
          <div>dated</div>
          <div>Contact</div>
          <div> Status</div> */}
          <div>Action</div>
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
                      <p>
                        <i>Name</i>
                      </p>
                      {first} {LastName}
                    </td>
                    <td>
                      <p>
                        <i>Mail</i>
                      </p>{" "}
                      {email}
                    </td>
                    <td>
                      <p>
                        <i>Date join</i>
                      </p>

                      {day}
                    </td>
                    <td>
                      {" "}
                      <p>
                        <i>Contact</i>
                      </p>
                      {phone}
                    </td>
                    {!userStatus && (
                      <td className="offline">
                        <p>
                          <i>Name</i>
                        </p>
                        Offline
                      </td>
                    )}
                    {userStatus && <td className="online">online</td>}
                    <td onClick={handleDeleteUser} className="delete">
                      delete
                    </td>
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
