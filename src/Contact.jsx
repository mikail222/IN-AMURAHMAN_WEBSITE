import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ handleSubmit }) => {
  return (
    <div className="contact-align">
      <p className="text" style={{ color: "#8ccaf3" }}>
        For feedback and request please kindly fill the form below
      </p>
      <i style={{ textAlign: "center", marginTop: "1rem" }}>
        or get in tounch on our social medial official handle bellow
      </i>
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
