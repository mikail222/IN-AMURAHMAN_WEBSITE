import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Payment_Method = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [payment, setPayment] = useState([]);
  const navigate = useNavigate();

  const update_Payment = (e) => {
    e.preventDefault();
    const newPayment = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      amount: amount,
      contact: contact,
    };
    setPayment(...payment, newPayment);
    navigate("/Googlepay");
  };
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      className="paymentUpdate"
      data-aos="fade-zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <form className="productUpdateForm" onChange={(e) => handleChange(e)}>
        <h4 className="updateheader">Payment Form</h4>

        <label htmlFor="">{firstName ? "First Name" : " "}</label>
        <input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="">{lastName ? "Last Name" : " "}</label>
        <input
          type="text"
          placeholder=" Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="">{email ? "Email" : " "}</label>
        <input
          type="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">{amount ? "Amount" : " "}</label>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label htmlFor="">{contact ? "Contact" : " "}</label>
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
