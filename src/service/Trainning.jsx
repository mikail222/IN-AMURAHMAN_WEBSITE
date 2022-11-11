import React from "react";
import trainImg from "../asset/sincerely-media-dGxOgeXAXm8-unsplash.jpg";

const Trainning = ({ handleSubmit }) => {
  return (
    <div className="trainning">
      <main style={{ width: "65%" }}>
        <img src={trainImg} alt="" />
        <h2> Training Service Program </h2>
        <p>
          part of the social responsibility of our company is the{" "}
          <b> Training Service Program</b> design and tailored to give back to
          society a fundamental hygienic knowledge of how hazard endangering the
          environment can be removed effectively with the aim of producing a
          vast number of people in a form that represent foot army to combat and
          respond rapidly to environmental safety objective
        </p>
        <p>however,the Training program takes two format </p>
        <li> Virtual Training</li>
        <li>Physical Training</li>
      </main>
      <aside style={{ width: "30%" }}>
        <div style={{ width: "30%", marginLeft: "2.5rem" }} className="form">
          <h4 style={{ marginTop: "2rem" }}>Enquiry</h4>
          <form onSubmit={handleSubmit} style={{ height: "80%" }}>
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
      </aside>
    </div>
  );
};

export default Trainning;
