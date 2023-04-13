import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import Data_analysis_page from "./Data_analysis_page";
import User_Table from "./User_Table";
import Side_Bar from "./Side_Bar";
import Product_UpdateForm from "./Product_UpdateForm";

const Dashboard = ({ setShowNav, productUpdate }) => {
  const [consult, setConsult] = useState([]);
  const [booking, setBooking] = useState([]);
  const [enquiry, setEnquiry] = useState([]);
  const [user, setUser] = useState([]);
  const [userList, setUserList] = useState(false);
  const [dashboardInfo, setDashboardInfo] = useState(false);
  const [productUpdateInfo, setProductUpdateInfo] = useState(false);

  const currentUser = auth.currentUser;

  useEffect(() => {
    const collectionOfUser = collection(db, "Admin");
    const collBooking = collection(db, "Booking");
    const collConsult = collection(db, "Consultance");
    const collEnquiry = collection(db, "Enquiry");
    const collProductUpdate = collection(db, "Products");

    const getUser = async () => {
      const data = await getDocs(collectionOfUser);
      const Booking = await getDocs(collBooking);
      const Consult = await getDocs(collConsult);
      const Enquiry = await getDocs(collEnquiry);
      const Products = await getDocs(collProductUpdate);
      setBooking(Booking.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setEnquiry(Enquiry.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setConsult(Consult.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, [currentUser]);
  console.log(productUpdate.map((m, id) => m.img));

  return (
    <div className="parentContainer">
      <div className="dashBoardDiv">
        <Side_Bar
          currentUser={currentUser}
          setDashboardInfo={setDashboardInfo}
          setUserList={setUserList}
          setProductUpdateInfo={setProductUpdateInfo}
        />
        <div className="parentDiv">
          <main className="mainClass">
            {dashboardInfo ? (
              <Data_analysis_page
                user={user}
                booking={booking}
                enquiry={enquiry}
                consult={consult}
                productUpdate={productUpdate}
              />
            ) : userList ? (
              <User_Table user={user} onChange={() => setShowNav(false)} />
            ) : productUpdate ? (
              <Product_UpdateForm />
            ) : (
              ""
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
