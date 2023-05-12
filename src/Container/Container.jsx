import React, { useEffect } from "react";
import Service from "../Service";
import Contact from "../Contact";
import Home from "../Home";
import Hire from "../Hire";
import Clues from "../Clues";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Show_Room from "../Show_Room";
import { useState } from "react";
import ProductDetail from "../ProductDetail";
import Wast_managment from "../service/Wast_managment";
import Domestic_cleaning from "../service/Domestic_cleaning";
import Plank_pest_control from "../service/Plank_pest_control";
import Disinfect from "../service/Disinfect";
import Pest_control from "../service/Pest_control";
import Commercial from "../service/Commercial";
import Trainning from "../service/Trainning";
import Event_maintainance from "../service/Event_maintainance";
import Drainage from "../service/Drainage";
import Consultance from "../service/Consultance";
import Ants from "../Pest/Ants";
import Spider from "../Pest/Spider";
import Rodents from "../Pest/Rodents";
import BedBugs from "../Pest/BedBugs";
import Cockroaches from "../Pest/Cockroaches";
import Termites from "../Pest/Termites";
import Mosquitoes from "../Pest/Mosquitoes";
import Snakes from "../Pest/Snakes";
import Bed_Room from "../Domestic_service/Bed_Room";
import Sitting_Room from "../Domestic_service/Sitting_Room";
import Kitchen from "../Domestic_service/Kitchen";
import Toilet from "../Domestic_service/Toilet";
import Wardrobe from "../Domestic_service/Wardrobe";
import Policy from "../Information/Policy";
import Terms from "../Information/Terms";
import Login from "../Accessibility/Login";
import Sign_up from "../Accessibility/Sign_up";
import Blog from "../Blog";
import User_modal from "../Accessibility/User_modal";
import Update from "../Accessibility/Update";
import Navbar from "../Navbar";
import Dashboard from "../Accessibility/Dashboard/Dashboard";
import Reset_Password from "../Accessibility/Dashboard/Reset_Password";
import Googlepay from "../Accessibility/Googlepay";
import Mobile_nav from "../Mobile_Nav";
import Booking from "../service/Booking";
import Users_Dashboard from "../Accessibility/Users_Dashboard/Users_Dashboard";

const Container = ({ user, setShowNav }) => {
  const [findProduct, setFindProduct] = useState("");
  const [productUpdate, setProductUpdate] = useState([]);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const checkList = productUpdate?.filter((p) =>
    p.product_name.toLowerCase().includes(findProduct.toLowerCase())
  );

  useEffect(() => {
    const getProduct = async () => {
      const { db } = await import("../firebaseconfig");
      const { collection, getDocs } = await import("firebase/firestore");

      const collProductUpdate = collection(db, "Products");

      const Products = await getDocs(collProductUpdate);
      setProductUpdate(
        Products.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getProduct();
  }, []);
  const { id } = useParams();
  const userId = productUpdate.filter((p) => p.id === id);
  const total = userId.map(({ price }) => price * count);

  return (
    <div className="toogle_Nav">
      <Mobile_nav setShowNav={setShowNav} />

      <Navbar navigate={navigate} setShowNav={setShowNav} />

      <div className="App">
        <Routes>
          <Route
            path="/Dashboard/*"
            element={
              <Dashboard
                user={user}
                onChange={() => setShowNav(false)}
                productUpdate={productUpdate}
                count={count}
              />
            }
          />
          <Route path="/Users_Dashboard/*" element={<Users_Dashboard />} />
          <Route path="/Googlepay" element={<Googlepay />} />
          <Route path="/Booking" element={<Booking />} />

          <Route path="/" element={<Home productUpdate={productUpdate} />} />
          <Route path="Clues" element={<Clues />} />
          <Route path="Hire" element={<Hire />} />
          <Route
            path="Show_Room"
            element={
              <Show_Room
                checkList={checkList}
                findProduct={findProduct}
                setFindProduct={setFindProduct}
                productUpdate={productUpdate}
              />
            }
          />
          <Route path="/Blog" element={<Blog />} />
          <Route
            path="/Reset_Password"
            element={<Reset_Password user={user} />}
          />

          <Route
            path="/Login"
            element={<Login navigate={navigate} user={user} />}
          />
          <Route
            path="/Sign_up"
            element={<Sign_up navigate={navigate} user={user} />}
          />
          <Route path="/User_modal" element={<User_modal user={user} />} />
          <Route path="/Update" element={<Update navigate={navigate} />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="Show_Room/Product_detail/:id"
            element={
              <ProductDetail
                productUpdate={productUpdate}
                userId={userId}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            path="Pest_control/Product_detail/:id"
            element={
              <ProductDetail
                productUpdate={productUpdate}
                userId={userId}
                total={total}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            path="Commercial/Product_detail/:id"
            element={
              <ProductDetail
                productUpdate={productUpdate}
                userId={userId}
                total={total}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            path="Domestic_cleaning/Product_detail/:id"
            element={
              <ProductDetail
                productUpdate={productUpdate}
                userId={userId}
                total={total}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route path="Wast_management" element={<Wast_managment />} />
          <Route
            path="/Domestic_cleaning"
            element={<Domestic_cleaning checkList={checkList} />}
          />
          <Route path="Plank_pest_control" element={<Plank_pest_control />} />
          <Route path="Disinfect" element={<Disinfect />} />
          <Route
            path="Pest_control"
            element={<Pest_control checkList={checkList} />}
          />
          <Route
            path="Commercial"
            element={<Commercial checkList={checkList} />}
          />
          <Route path="Trainning" element={<Trainning />} />
          <Route
            path="Event_maintainance"
            element={<Event_maintainance checkList={checkList} />}
          />

          <Route
            path="Event_maintainance/Product_detail/:id"
            element={<ProductDetail productUpdate={productUpdate} />}
          />
          <Route path="Drainage" element={<Drainage />} />
          <Route path="Consultance" element={<Consultance />} />
          <Route path="Ants" element={<Ants />} />
          <Route path="Spider" element={<Spider />} />
          <Route path="Rodents" element={<Rodents />} />
          <Route path="Mosquitoes" element={<Mosquitoes />} />
          <Route path="Bedbugs" element={<BedBugs />} />
          <Route path="Cockroaches" element={<Cockroaches />} />
          <Route path="Termites" element={<Termites />} />
          <Route path="Snakes" element={<Snakes />} />
          <Route path="Service" element={<Service />} />
          <Route path="Bed_Room" element={<Bed_Room />} />
          <Route path="Sitting_Room" element={<Sitting_Room />} />
          <Route path="Kitchen" element={<Kitchen />} />
          <Route path="Toilet" element={<Toilet />} />
          <Route path="Wardrobe" element={<Wardrobe />} />
          <Route path="Terms" element={<Terms />} />
          <Route path="Policy" element={<Policy />} />
        </Routes>
      </div>
    </div>
  );
};

export default Container;
