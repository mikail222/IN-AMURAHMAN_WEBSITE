import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Booking = () => {
  const intialValue = {
    firstName: "",
    email: "",
    contact: "",
    message: "",
    lastName: "",
  };
  const [Booking, setBooking] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const clearBooking = useRef();
  const consultanceCollRef = collection(db, "Booking");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...Booking,
      [name]: value,
      day: new Date().toDateString(),
      time: serverTimestamp(),
    });
  };
  const update_Payment = async (e) => {
    e.preventDefault();
    setFormError(validate(Booking));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      window.confirm("Booking uploaded successfully");
    }
    clearBooking.current.reset();
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    const contactRegex = /^[0-9]/i;
    if (!values.firstName) {
      error.firstName = "Enter your name";
    }
    if (!values.lastName) {
      error.lastName = "Enter your surname";
    }
    if (!values.message) {
      error.message = " drop a message";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.mail)) {
      error.email = "This is not a valid email format";
    }
    if (!values.contact) {
      error.contact = "contact is required";
    } else if (!contactRegex.test(values.contact)) {
      error.contact = "This is not a valid contact it  must be a number";
    }
    return error;
  };

  console.log(Booking);
  return (
    <div>
      <div className="BookingForm">
        <div className="BookingOverlay">
          <div className="bookingUpdateForm">
            <h4 className="updateheader">How can we Help?</h4>
            <p className="BookingText">
              IREHV is professionally proud to acknowledge your Environmental
              issues, please just specify bellow.
            </p>
            <form onSubmit={update_Payment} ref={clearBooking}>
              <label htmlFor="">{formError && formError.firstName}</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={Booking.firstName}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="">{formError && formError.lastName}</label>
              <input
                type="text"
                placeholder=" Last Name"
                name="lastName"
                value={Booking.lastName}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="">{formError && formError.email}</label>
              <input
                type="Email"
                placeholder="Email"
                name="email"
                value={Booking.email}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="">{formError && formError.contact}</label>
              <input
                placeholder="Contact"
                name="contact"
                value={Booking.contact}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="booking">{formError && formError.message}</label>
              <textarea
                name="message"
                placeholder="purpose"
                id="booking"
                cols="30"
                rows="10"
                value={Booking.message}
                onChange={(e) => handleChange(e)}
                className="textarea"
              ></textarea>

              <button type="submit" className="button">
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
