import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = e.target;
    const add = {
      Name: details.fullName.value,
      email: details.mail.value,
      contact: details.number.value,
      message: details.msg.value,
    };
    setUser(user.concat(add));
    details.reset();
  };
  console.log(user);
  return (
    <div className="contact-align">
      <p className="text">
        Form feed back and request please kindly fill the form below
      </p>
      <div className="contact">
        <div className="address">
          <h3>IN'AMURAHMAN </h3>
          <h4>ENVIRONMENTAL HYGIENIC VENTURE</h4>
          <p>beside Blue-Mist Water, </p>
          <p> Agbo-Oba Road Ilorin,</p>
          <p> Kwara State,</p>
          <p>Nigeria.</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Full Name</label>
            <input type="text" name="fullName" required />
            <label htmlFor="">Email</label>
            <input type="email" name="mail" required />
            <label htmlFor="">Contact</label>
            <input type="number" name="number" required />
            <label htmlFor="">Message</label>
            <textarea name="msg" id="msgs" cols="50" rows="4"></textarea>
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
