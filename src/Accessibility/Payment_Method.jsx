import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { TbCurrencyNaira } from "react-icons/tb";

const Payment_Method = ({ total, product_name, product_img }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(" ");
  const [contact, setContact] = useState(" ");
  const [payment, setPayment] = useState({});
  const navigate = useNavigate();

  const collPayRef = collection(db, "Payment-details");

  const update_Payment = async (e) => {
    e.preventDefault();
    const newPayment = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      amount: total,
      contact: contact,
      items: product_name,
      day: new Date().toDateString(),
    };
    await addDoc(collPayRef, {
      ...newPayment,
      timestamp: serverTimestamp(),
    });
    alert("Payment successfully uploaded");
    navigate("/Googlepay");
  };
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  console.log(payment);
  return (
    <div
      className="paymentUpdate"
      data-aos="fade-zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <form className="productUpdateForm">
        <img src={product_img} alt="" />
        <h2>{product_name}</h2>
        <h4
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TbCurrencyNaira />
          {total}
        </h4>
        <h4 className="updateheader">Payment Form</h4>
        <input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <input
          type="number"
          placeholder="Contact"
          value={contact}
          required
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="button" onClick={update_Payment} className="button">
          Pay
        </button>
      </form>
      <div className="productSidebg">
        <div>
          <h3>"Health is Wealth"</h3>
          <p className="texts">
            The more effortless the hazard eradication looks, the more effort
            the conscious mind actually put into the process.
          </p>
          <p>IREHV</p>
        </div>
      </div>
    </div>
  );
};

export default Payment_Method;
