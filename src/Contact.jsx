import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "./firebaseconfig";
import Footer from "./Footer";

const Contact = () => {
  const [contactData, setContactData] = useState({});

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setContactData({ ...contactData, ...newInput });
  };
  const contactCollRef = collection(db, "Contact");

  const addContact = async (e) => {
    e.preventDefault();
    await addDoc(contactCollRef, {
      ...contactData,
      day: new Date().toDateString,
      timestamp: new Date(),
    });
    console.log(new Date());
  };

  return (
    <div className="contact-align">
      <div className="contactFeedback">
        <p style={{ color: "#8ccaf3" }}>
          For feedback and request please kindly fill the form below
        </p>
        <i
          style={{
            color: "gray",
            fontWeight: "bold",
          }}
        >
          or get in tounch on our social medial official handle bellow
        </i>
      </div>
      <div className="contact">
        <div className="address">
          <h2 style={{ color: "blue" }}>IREHV</h2>
          <h3 style={{ color: "#f57f80" }}>IN'AMURAHMAN </h3>
          <h4>ENVIRONMENTAL HYGIENIC VENTURE</h4>
          <p>beside Blue-Mist Water, </p>
          <p> Agbo-Oba Road Ilorin,</p>
          <p> Kwara State,</p>
          <p>Nigeria.</p>
        </div>
        <div>
          <form onChange={(e) => handleChange(e)} className="form">
            <label htmlFor="">Full Name</label>
            <input type="text" name="fullName" required />
            <label htmlFor="">Email</label>
            <input type="email" name="mail" required />
            <label htmlFor="">Contact</label>
            <input type="number" name="number" required />
            <label htmlFor="">Message</label>
            <textarea name="msg" id="msgs" cols="50" rows="4"></textarea>
            <button type="submit" onClick={addContact}>
              submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
