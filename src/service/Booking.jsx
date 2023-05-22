import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Booking = () => {
  const [Booking, setBooking] = useState({});
  const navigate = useNavigate();
  const clearBooking = useRef();
  const consultanceCollRef = collection(db, "Booking");

  const handleChange = (e) => {
    const newBooking = {
      [e.target.name]: e.target.value,
    };

    setBooking({ ...Booking, ...newBooking });
  };
  const update_Payment = async (e) => {
    e.preventDefault();
    await addDoc(consultanceCollRef, {
      ...Booking,
      day: new Date().toDateString(),
      timestamp: serverTimestamp(),
    });
    clearBooking.current.reset();

    alert("booked");
  };

  // useEffect(() => {
  //   AOS.init({ duration: 3000 });
  // }, []);
  console.log(Booking);
  return (
    <div>
      <form
        className="BookingForm"
        onChange={(e) => handleChange(e)}
        ref={clearBooking}
      >
        <div className="BookingOverlay">
          <div className="productUpdateForm">
            <h4 className="updateheader">Booking Form</h4>

            <label htmlFor=""> First Name</label>
            <input
              type="text"
              placeholder="First Name"
              required
              name="firstName"
            />
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder=" Last Name"
              name="lastName"
              required
            />
            <label htmlFor="">Email</label>
            <input type="Email" placeholder="Email" name="email" required />

            <label htmlFor="">Contact</label>
            <input
              type="number"
              placeholder="Contact"
              name="contact"
              required
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
            <label htmlFor="booking">purpose</label>
            <textarea
              name="message"
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
