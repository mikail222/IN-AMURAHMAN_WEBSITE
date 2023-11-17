import React, { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseconfig";
import Footer from "./Footer";
import attendant from "./asset/kisspng-call-centre-customer-service-callcenteragent-stock-Ремонт-окон-в-Новосибирске-5b65152a726c58.1422831315333512104687-removebg-preview.png";

const Contact = () => {
  const intialValue = { fullName: "", mail: "", number: "", msg: "" };
  const [contactData, setContactData] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const clearTxt = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
      day: new Date().toDateString(),
      time: serverTimestamp(),
    });
  };
  const contactCollRef = collection(db, "Booking");

  const addContact = async (e) => {
    e.preventDefault();
    setFormError(validate(contactData));
    setIsSubmit(true);
    await addDoc(contactCollRef, contactData);
    if (Object.keys(formError).length === 0 && isSubmit) {
      window.confirm("Uploaded successfully");
    }
    clearTxt.current.reset();
  };
  console.log(formError);
  console.log(contactData);
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    const contactRegex = /^[0-9]/i;
    if (!values.fullName) {
      error.fullName = "Enter your full name";
    }
    if (!values.msg) {
      error.msg = " drop a message";
    }
    if (!values.mail) {
      error.mail = "email is required";
    } else if (!regex.test(values.mail)) {
      error.mail = "This is not a valid email format";
    }
    if (!values.number) {
      error.number = "contact is required";
    } else if (!contactRegex.test(values.number)) {
      error.number = "This is not a valid contact it  must be a number";
    }
    return error;
  };

  return (
    <div className="contact-align">
      <div className="contactFeedback">
        <i>For feedback and request please kindly fill the form </i>
        <i>or get in tounch on our social medial official handle bellow</i>
      </div>

      <div className="contact">
        <div className="address">
          <h2 style={{ color: "#133063" }}>IREHV</h2>
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
              color: "#00668B",
              padding: "1rem",
            }}
          >
            You can reach out to us here...!
          </h3>
          <form ref={clearTxt} onSubmit={addContact} className="form">
            <label htmlFor=""> {formError && formError.fullName}</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={contactData.fullName}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="">{formError && formError.mail}</label>
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={contactData.mail}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="">{formError && formError.number}</label>
            <input
              // type="number"
              name="number"
              placeholder="Contact"
              value={contactData.number}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=""> {formError && formError.msg}</label>
            <textarea
              name="msg"
              value={contactData.msg}
              id="msgs"
              cols="50"
              rows="4"
              placeholder="Message"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
