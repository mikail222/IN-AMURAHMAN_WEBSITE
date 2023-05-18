import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { db } from "../firebaseconfig";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import pest1 from "../asset/ed-van-duijn-UUdJ-0LQs0M-unsplash.jpg";
import pest2 from "../asset/peter-f-wolf-XG8eYNYdz54-unsplash.jpg";
import pest3 from "../asset/312226385_1797629957237115_964696407549559286_n.jpg";
import pest4 from "../asset/257752417_1255051138337073_5686005790869040366_n.jpg";
import pest5 from "../asset/sina-katirachi-VfdRlDDp_sk-unsplash (1).jpg";
import pest6 from "../asset/312150053_1090676514947704_4342979459506156222_n.jpg";
import pest7 from "../asset/erik-karits-8aBgCl_TNfc-unsplash.jpg";
import pest8 from "../asset/alexas_fotos-gSYeFmQamuo-unsplash.jpg";
import pest9 from "../asset/chris-curry-N4AFGRPZGk4-unsplash.jpg";

const Consultance = () => {
  const [consultanceData, setConsultanceData] = useState({});

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setConsultanceData({ ...consultanceData, ...newInput });
  };
  const consultanceCollRef = collection(db, "Consultance");

  const addconsultance = async (e) => {
    e.preventDefault();
    await addDoc(consultanceCollRef, {
      ...consultanceData,
      day: new Date().toDateString(),
      timestamp: serverTimestamp(),
    });
    console.log("booked");
  };
  console.log(consultanceData);
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
          <h3>
            <em>
              We also specialise in handling though pest like does ones bellow
            </em>
          </h3>
          <div className="pest_map">
            <Link to="/Spider">
              <img src={pest1} alt="" />
              <p>Spider</p>
            </Link>
            <Link to="/Ants">
              <img src={pest2} alt="" />
              <p>Ants</p>
            </Link>
            <Link to="/Snakes">
              <img src={pest3} alt="" />
              <p>Snakes</p>
            </Link>
            <Link to="/Termites">
              <img src={pest4} alt="" />
              <p>Termites</p>
            </Link>
            <a href="/Scorpion">
              <img src={pest5} alt="" />
              <p>Scorpions</p>
            </a>
            <Link to="/Bedbugs">
              <img src={pest6} alt="" />
              <p>Bedbugs</p>
            </Link>
            <Link to="/Cockroaches">
              <img src={pest7} alt="" />
              <p>Cockroaches</p>
            </Link>
            <Link to="/Rodents">
              <img src={pest8} alt="" />
              <p>Rodents</p>
            </Link>
            <Link to="/Flies">
              <img src={pest9} alt="" />
              <p>Flies</p>
            </Link>
          </div>
        </main>
        <aside>
          <div className="drainAdvert">
            <div className="consultform">
              <h4>Book here</h4>
              <form className="form" onChange={(e) => handleChange(e)}>
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
            <img
              src="https://agro4africa.com/wp-content/uploads/2021/10/meat-chicken-breeds.jpg"
              alt="broilers"
            />
            <p>For Chicken breeding Consultation service</p>
            <p>reach out to IREHV</p>
          </div>
          <div className="drainAdvert">
            <img
              src="https://media.istockphoto.com/id/1135314838/photo/repair-of-hydraulic-heating-system-in-the-house.jpg?s=612x612&w=0&k=20&c=Z8-BohVX0_Niqp72nroZzeK3m8C69U2xLcvQYE_iHuA="
              alt="plumbing"
            />

            <p>For proffessional plumbing service</p>
            <p>reach out to IREHV</p>
          </div>
          <div className="serviceDescription">
            <h4 style={{ color: "white", textAlign: "center" }}>
              {" "}
              0ur Consultation Services are:
            </h4>
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
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Consultance;
