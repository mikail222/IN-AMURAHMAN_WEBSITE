import React, { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseconfig";
import Footer from "./Footer";
import attendant from "./asset/kisspng-call-centre-customer-service-callcenteragent-stock-Ремонт-окон-в-Новосибирске-5b65152a726c58.1422831315333512104687-removebg-preview.png";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const clearTxt = useRef();
  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setContactData({ ...contactData, ...newInput });
  };
  const contactCollRef = collection(db, "Booking");

  const addContact = async (e) => {
    e.preventDefault();
    await addDoc(contactCollRef, {
      ...contactData,
      day: new Date().toDateString(),
      timestamp: new Date(),
    });
    alert("uploaded");
    clearTxt.current.reset();
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
      <iframe
        width="450"
        height="250"
        frameBorder="0"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/placeq?key=YOUR_API_KEY&PARAMETERS"
        allowFullScreen
      ></iframe>
      <div className="contact">
        <div className="address">
          <h2 style={{ color: "blue" }}>IREHV</h2>
          <h3 style={{ color: "#f57f80" }}>IN'AMURAHMAN </h3>
          <h4>ENVIRONMENTAL HYGIENIC VENTURE</h4>
          <p>beside Blue-Mist Water, </p>
          <p> Agbo-Oba Road Ilorin,</p>
          <p> Kwara State,</p>
          <p>Nigeria.</p>
          <p>Contact: +234-8144632165</p>
        </div>
        <div>
          <img src={attendant} alt="" />
        </div>
        <div>
          <h3
            style={{
              marginLeft: "2rem",
              color: "blue",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Book here...!
          </h3>
          <form
            ref={clearTxt}
            onChange={(e) => handleChange(e)}
            className="form"
          >
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
