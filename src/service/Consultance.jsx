import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { db } from "../firebaseconfig";
import Footer from "../Footer";

const Consultance = () => {
  const [consultanceData, setConsultanceData] = useState({});

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setConsultanceData({ ...consultanceData, ...newInput });
  };
  const consultanceCollRef = collection(db, "Booking");

  const addconsultance = async (e) => {
    e.preventDefault();
    await addDoc(consultanceCollRef, {
      ...consultanceData,
      day: new Date().toDateString(),
      timestamp: serverTimestamp(),
    });
    console.log("booked");
  };

  return (
    <div>
      <div className="consultance">
        <main>
          <div className="consultbg">
            <h4>Consultation Service</h4>
          </div>
          <div className="consultparag">
            <p>
              Amidst the important service delivery from IREHV to her Client is
              consultaton service,because it's an avenue to Orientate and
              educate our Client to facilitate optium collaboration in securing
              an hygienic Environment for quality asurance and establishement of
              a standardized enabling Environment as well as elimination of
              Environment Hazard
            </p>
            <p>
              Also your Consultation with IREHV provide sensitive information on
              new development in the Environment which are meant to be handle
              through extensive research and action confrontation.
            </p>
            <p>
              Pests and insects are generally undesirable beings, this is
              because they cause severe damage to the resources of man, and also
              they are a threat to public health.
            </p>
            <p>
              The recent Corona Virus & Lassa fever epidemic is just the tip of
              the iceberg of what dangers our society is exposed to if pests are
              not checked. Except with a sound control strategy, pests breed
              freely where might condition are not available. Pest control in
              all places, particularly homes, factories, and schools is
              important and compulsory as contained in existing national
              regulations towards enhancing a disease-free society
            </p>
          </div>
        </main>
        <aside>
          <div className="drainAdvert">
            <img
              src="https://agro4africa.com/wp-content/uploads/2021/10/meat-chicken-breeds.jpg"
              alt="broilers"
            />
            <p>For Chicken breeding Consultation service</p>
            <p>reach out to IREHV</p>
          </div>
          <div className="serviceDescription" style={{ marginTop: "5rem" }}>
            <h4 style={{ color: "white" }}> 0ur Consultation Services are:</h4>
            <div>
              <GiCheckMark />
              <p>Environmental Hazard Management</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Seasonal Orientation Service</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Inspection</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Treatment</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Gym cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Hospital cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Swimming Pool cleaning</p>
            </div>
            <div>
              <GiCheckMark />
              <p>Factory cleaning & others</p>
            </div>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <h4 style={{ marginTop: "2rem", marginLeft: "1rem" }}>Booking</h4>
            <form
              className="form"
              onChange={(e) => handleChange(e)}
              style={{ width: "90%", height: "80%", marginTop: "1rem" }}
            >
              <label htmlFor="">Full Name</label>
              <input type="text" name="fullName" required />
              <label htmlFor="">Email</label>
              <input type="email" name="mail" required />
              <label htmlFor="">Contact</label>
              <input type="number" name="number" required />
              <label htmlFor="">Purpose</label>
              <textarea name="msg" id="msgs" cols="50" rows="4"></textarea>
              <button type="sbmit" onClick={addconsultance}>
                submit
              </button>
            </form>
          </div>
          <div className="drainAdvert">
            <img
              src="https://media.istockphoto.com/id/1135314838/photo/repair-of-hydraulic-heating-system-in-the-house.jpg?s=612x612&w=0&k=20&c=Z8-BohVX0_Niqp72nroZzeK3m8C69U2xLcvQYE_iHuA="
              alt="plumbing"
            />

            <p>For proffessional plumbing service</p>
            <p>reach out to IREHV</p>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Consultance;
