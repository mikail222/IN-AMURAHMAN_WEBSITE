import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { Route, Routes } from "react-router-dom";
import Data_analysis_page from "./Data_analysis_page";
import User_Table from "./User_Table";
import Side_Bar from "./Side_Bar";
import Product_UpdateForm from "./Product_UpdateForm";
import { BiMenu } from "react-icons/bi";
import Mobile_Side_Bar from "./Mobile_Side_Bar";
import Sales_Details from "./Sales_Details";
import Post from "./Post";
import Consult from "./Consult";
import Enquiry from "./Enquiry";
import User_Data from "../Users_Dashboard/User_Data";
import User_Profile from "../Users_Dashboard/User_Profile";
import Blog_Update from "./Blog_Update";
import { collection, onSnapshot } from "firebase/firestore";
import Booking from "./Booking.1";
import ChangePassword from "../Users_Dashboard/ChangePassword";

const Dashboard = ({ adminPost, productUpdate, count }) => {
  const [consult, setConsult] = useState([]);
  const [show, setShow] = useState(false);

  const [booking, setBooking] = useState([]);
  const [enquiry, setEnquiry] = useState([]);
  const [user, setUser] = useState([]);
  const [sales, setSales] = useState([]);
  const [totalamount, setTotalamount] = useState([]);
  const [product_detail, setProduct_detail] = useState([]);
  const [userList, setUserList] = useState(false);
  const [dashboardInfo, setDashboardInfo] = useState(false);
  const [productUpdateInfo, setProductUpdateInfo] = useState(false);
  const [drawer, setDrawer] = useState(true);

  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      // currentUser.reload();
    }

    const getUser = async () => {
      const { collection, getDocs } = await import("firebase/firestore");
      const { db } = await import("../../firebaseconfig");

      const collectionOfUser = collection(db, "Admin");
      const collBooking = collection(db, "Booking");
      const collSales = collection(db, "Payment-details");
      const collTotalAmount = collection(db, "Payment-details");
      const collConsult = collection(db, "Consultance");
      const collEnquiry = collection(db, "Enquiry");

      const data = await getDocs(collectionOfUser);
      const Booking = await getDocs(collBooking);
      const sales = await getDocs(collSales);
      const totalAmount = await getDocs(collTotalAmount);
      const Consult = await getDocs(collConsult);
      const Enquiry = await getDocs(collEnquiry);
      setBooking(Booking.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setSales(sales.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTotalamount(
        totalAmount.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setEnquiry(Enquiry.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setConsult(Consult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
    const unsub = onSnapshot(
      collection(db, "Products"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProduct_detail(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, [currentUser]);
  const filteredAdmin = user
    ?.filter(({ role }) => role == "author")
    .some((r) => r.email === currentUser?.email);

  return (
    <div className="parentContainer">
      <div className="dashBoardDiv">
        {!drawer && (
          <Mobile_Side_Bar
            currentUser={currentUser}
            setDashboardInfo={setDashboardInfo}
            setUserList={setUserList}
            setProductUpdateInfo={setProductUpdateInfo}
            setDrawer={setDrawer}
            setShow={setShow}
            filteredAdmin={filteredAdmin}
          />
        )}
        <div className="parentDiv">
          <Side_Bar
            currentUser={currentUser}
            setDashboardInfo={setDashboardInfo}
            setUserList={setUserList}
            setProductUpdateInfo={setProductUpdateInfo}
            setDrawer={setDrawer}
            filteredAdmin={filteredAdmin}
            setShow={setShow}
            show={show}
          />
          <main className="mainClass">
            <BiMenu
              className="menuBar"
              style={{ marginTop: "3rem" }}
              title="Menu Bar"
              onClick={(e) => setDrawer(false)}
            />

            <Routes>
              <Route
                path="Data_analysis_page"
                element={
                  <Data_analysis_page
                    user={user}
                    booking={booking}
                    enquiry={enquiry}
                    consult={consult}
                    productUpdate={productUpdate}
                    sales={sales}
                    totalamount={totalamount}
                    adminPost={adminPost}
                  />
                }
              />
              <Route
                path="User_Data"
                element={
                  <User_Data
                    booking={booking}
                    enquiry={enquiry}
                    consult={consult}
                    sales={sales}
                  />
                }
              />

              <Route
                path="User_Profile"
                element={<User_Profile user={user} />}
              />
              <Route
                path="/ChangePasword"
                element={<ChangePassword user={user} />}
              />
              <Route path="Blog_Update" element={<Blog_Update />} />
              <Route path="Post" element={<Post adminPost={adminPost} />} />
              <Route path="Booking" element={<Booking booking={booking} />} />
              <Route path="Consult" element={<Consult consult={consult} />} />
              <Route path="Enquiry" element={<Enquiry enquiry={enquiry} />} />
              <Route path="User_Table" element={<User_Table user={user} />} />
              <Route
                path="Product_UpdateForm"
                element={<Product_UpdateForm count={count} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
