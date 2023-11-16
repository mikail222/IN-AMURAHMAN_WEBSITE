import React, { useState } from "react";
import { auth } from "../../firebaseconfig";
import { deleteUser } from "firebase/auth";
const User_Table = ({ user }) => {
  const [search_user, setSearch_user] = useState(" ");
  const [delete_User, setDelete_User] = useState();
  const [err, setErr] = useState(" ");
  const client = auth.currentUser;
  console.log();
  const handleDeleteUser = () => {
    deleteUser(client)
      .then(() => {
        setDelete_User("User deleted");
      })
      .catch((error) => {
        setErr(error.message);
        setTimeout(() => {
          setErr(null);
        }, 5000);
      });
  };

  const currentUser = auth.currentUser?.email;
  const filterImg = user.filter(({ img }) => img === img);

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
                      <img
                        src={filterImg ? img : "no image"}
                        alt=""
                        className={
                          email === currentUser
                            ? "Authoronline"
                            : "AuthoriOffline"
                        }
                      />
                    </td>
                    <td>
                      {first} {LastName}
                    </td>
                    <td>{email}</td>
                    <td>{day}</td>
                    <td> {phone}</td>
                    {email !== currentUser && (
                      <td className="offline">Offline</td>
                    )}
                    {email === currentUser && (
                      <td className="online">online</td>
                    )}
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
