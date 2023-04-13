import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import trainImg from "../asset/sincerely-media-dGxOgeXAXm8-unsplash.jpg";
import { db } from "../firebaseconfig";
import Footer from "../Footer";
import Drainage from "./Drainage";

const Trainning = () => {
  const [trainData, setTrainData] = useState({});

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setTrainData({ ...trainData, ...newInput });
  };
  const CollRef = collection(db, "Enquiry");

  const addEnguiry = async (e) => {
    e.preventDefault();
    await addDoc(CollRef, {
      ...trainData,
      day: new Date().toDateString,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div>
      <div className="trainning">
        <main style={{ width: "75%" }}>
          <img src={trainImg} alt="" />
          <h2 style={{ marginTop: "2rem" }}> Training Service Program </h2>
          <p style={{ marginTop: "2rem" }}>
            part of the social responsibility of our company is the{" "}
            <b> Training Service Program</b> design and tailored to give back to
            society a fundamental hygienic knowledge of how hazard endangering
            the environment can be removed effectively with the aim of producing
            a vast number of people in a form that represent foot army to combat
            and respond rapidly to environmental safety objective
          </p>
          <p style={{ marginTop: "2rem" }}>
            however,the Training program takes two format{" "}
          </p>
          <li> Virtual Training</li>
          <li>Physical Training</li>
          <h4 style={{ marginTop: "2rem" }}>Virtual Training</h4>
          <p>
            {" "}
            The Training is an online program that allow every participant from
            far away destination to take part in the training program,having
            fulfil the requirement for registration. This is to ensure that
            larger part of the population have access to the knowledge regarding
            environmental security and hygienic lifestyle.
          </p>
          <h4 style={{ marginTop: "2rem" }}>Physical Training</h4>
          <p style={{ marginBottom: "1rem" }}>
            of course is a physical program were participant have direct access
            to lecturers and experience a better understanding of the program
            accessing the facilities for practical bases and as well as cordial
            colaboration within the participant that will facilitate better
            understanding.
          </p>
        </main>
        <aside style={{ width: "30%" }}>
          <div style={{ width: "30%", marginLeft: "3rem" }}>
            <h4 style={{ marginTop: "2rem" }}>Enquiry</h4>
            <form
              onChange={(e) => handleChange(e)}
              style={{ height: "80%" }}
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
              <button onClick={addEnguiry} type="submit">
                submit
              </button>
            </form>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Trainning;
