import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { Route, Routes, useNavigate } from "react-router-dom";
import Data_analysis_page from "./Data_analysis_page";
import User_Table from "./User_Table";
import Side_Bar from "./Side_Bar";
import Product_UpdateForm from "./Product_UpdateForm";
import { CgMenuGridR } from "react-icons/cg";
import { FcMenu } from "react-icons/fc";
import { BiMenu } from "react-icons/bi";
import Mobile_Side_Bar from "./Mobile_Side_Bar";

const Dashboard = ({ adminPost, productUpdate, count }) => {
  const [consult, setConsult] = useState([]);
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
  console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      currentUser.reload();
    }
    console.log(currentUser?.emailVerified);
    const collectionOfUser = collection(db, "Admin");
    const collBooking = collection(db, "Booking");
    const collSales = collection(db, "Payment-details");
    const collTotalAmount = collection(db, "Paymeny_details");
    const collConsult = collection(db, "Consultance");
    const collEnquiry = collection(db, "Enquiry");
    const collProductUpdate = collection(db, "Products");

    const getUser = async () => {
      const data = await getDocs(collectionOfUser);
      const Booking = await getDocs(collBooking);
      const sales = await getDocs(collSales);
      const totalAmount = await getDocs(collTotalAmount);
      const Consult = await getDocs(collConsult);
      const Enquiry = await getDocs(collEnquiry);
      const Products = await getDocs(collProductUpdate);
      setBooking(Booking.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setSales(sales.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTotalamount(
        totalAmount.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setEnquiry(Enquiry.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setConsult(Consult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setProduct_detail(
        Products.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUser();
  }, [currentUser]);
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
          />
        )}
        <div className="parentDiv">
          <Side_Bar
            currentUser={currentUser}
            setDashboardInfo={setDashboardInfo}
            setUserList={setUserList}
            setProductUpdateInfo={setProductUpdateInfo}
            setDrawer={setDrawer}
          />
          <main className="mainClass">
            <BiMenu
              className="menuBar "
              title="Menu Bar"
              onClick={(e) => setDrawer(false)}
            />
            {/* <Data_analysis_page
              user={user}
              booking={booking}
              enquiry={enquiry}
              consult={consult}
              productUpdate={productUpdate}
              sales={sales}
              totalamount={sales}
            /> */}
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
                    totalamount={sales}
                    adminPost={adminPost}
                  />
                }
              />
              <Route path="User_Table" element={<User_Table user={user} />} />
              <Route
                path="Product_UpdateForm"
                element={
                  <Product_UpdateForm
                    product_detail={product_detail}
                    count={count}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
