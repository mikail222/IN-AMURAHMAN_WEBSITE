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
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const User_Table = () => {
  const [search_user, setSearch_user] = useState(" ");
  const [users, setUsers] = useState([]);
  const [delete_User, setDelete_User] = useState([]);
  const [err, setErr] = useState(" ");
  const client = auth.currentUser;
  console.log();
  useEffect(() => {
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
  const Search_user = users?.filter(
    (m) =>
      m.email?.toLowerCase().includes(search_user.toLowerCase()) ||
      m.first?.includes(search_user.toLowerCase())
  );
  const handleDeleteUser = async (id) => {
    const checkPersonsName = Search_user.find((person) => person.id === id);
    try {
      if (
        window.confirm(
          `are sure you want  to  delete  ${
            checkPersonsName.first + " " + checkPersonsName.LastName
          } ?`
        )
      ) {
        await deleteDoc(doc(db, "Admin", id));
        deleteUser(client);
        setDelete_User(Search_user.filter(({ id }) => id !== id));
      }
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };
  console.log(auth.currentUser.metadata.lastSignInTime.charAt(12, 21));
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="bg-[lightgreen] text-[1.5rem]">
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Last name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Details</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Search_user?.map(
                ({ img, first, LastName, email, phone, id }, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={filterImg ? img : "no image"}
                        alt=""
                        className={
                          email === currentUser
                            ? "Authoronline"
                            : "AuthoriOffline"
                        }
                      />
                    </TableCell>
                    <TableCell align="left">{first}</TableCell>
                    <TableCell align="left"> {LastName}</TableCell>{" "}
                    <TableCell align="left">{email}</TableCell>
                    <TableCell align="center">{phone}</TableCell>{" "}
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">
                      {" "}
                      {email !== currentUser && (
                        <td className="offline">Offline</td>
                      )}
                      {email === currentUser && (
                        <td className="online">online</td>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      <button
                        onClick={() => handleDeleteUser(id)}
                        className="delete"
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default User_Table;
