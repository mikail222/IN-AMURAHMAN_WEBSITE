import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Booking = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [contact, setContact] = useState(" ");
  const [Booking, setBooking] = useState({});
  const navigate = useNavigate();
  const consultanceCollRef = collection(db, "Booking");

  const update_Payment = async (e) => {
    e.preventDefault();
    const newBooking = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: contact,
      message: message,
    };

    setBooking({ ...Booking, ...newBooking });

    await addDoc(consultanceCollRef, {
      ...Booking,
      day: new Date().toDateString(),
      timestamp: serverTimestamp(),
    });
    alert("booked");
  };

  // useEffect(() => {
  //   AOS.init({ duration: 3000 });
  // }, []);
  return (
    <div>
      <form className="BookingForm">
        <div className="BookingOverlay">
          <div className="productUpdateForm">
            <h4 className="updateheader">Booking Form</h4>

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

            <label htmlFor="">{contact ? "Contact" : " "}</label>
            <input
              type="number"
              placeholder="Contact"
              value={contact}
              required
              onChange={(e) => setContact(e.target.value)}
            />

            <button type="button" onClick={update_Payment} className="button">
              Book
            </button>
          </div>
          <div className="productUpdateForm">
            <h4 className="updateheader">How can we Help?</h4>
            <p className="BookingText">
              IREHV is professionally proud to acknowledge your Environmental
              issues, please just specify bellow.
            </p>
            <label htmlFor="booking">{message ? "purpose" : " "}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="booking"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
