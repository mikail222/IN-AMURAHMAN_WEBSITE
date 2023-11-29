import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { deleteUser } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
const User_Table = () => {
  const [search_user, setSearch_user] = useState(" ");
  const [users, setUsers] = useState([]);
  const [delete_User, setDelete_User] = useState([]);
  const [err, setErr] = useState(" ");
  const client = auth.currentUser;
  console.log();
  useEffect(() => {
    // const getUser = async () => {
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "Admin"));

    //     // console.log(list);
    //   }
    // };
    // getUser();
    const unsub = onSnapshot(
      collection(db, "Admin"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  console.log(users);
  const Search_user = users?.filter(
    (m) =>
      m.email?.toLowerCase().includes(search_user.toLowerCase()) ||
      m.first?.includes(search_user.toLowerCase())
  );
  const handleDeleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "Admin", id));
      deleteUser(client);
      setDelete_User(Search_user.filter(({ id }) => id !== id));
      alert("deleted");
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };
  console.log(delete_User);
  const currentUser = auth.currentUser?.email;
  const filterImg = users.filter(({ img }) => img === img);

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
        {/* {err & <p className="err">{err}</p>} */}

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
            {users &&
              Search_user?.map(
                ({ img, first, LastName, email, phone, day, id }, i) => (
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
                    <td onClick={() => handleDeleteUser(id)} className="delete">
                      delete
                    </td>
                  </tr>
                )
              )}
            {!users == null && (
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
