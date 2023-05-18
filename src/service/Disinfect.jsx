import React, { useState } from "react";
import Footer from "../Footer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseconfig";
import pest1 from "../asset/ed-van-duijn-UUdJ-0LQs0M-unsplash.jpg";
import pest2 from "../asset/peter-f-wolf-XG8eYNYdz54-unsplash.jpg";
import pest3 from "../asset/312226385_1797629957237115_964696407549559286_n.jpg";
import pest4 from "../asset/257752417_1255051138337073_5686005790869040366_n.jpg";
import pest5 from "../asset/sina-katirachi-VfdRlDDp_sk-unsplash (1).jpg";
import pest6 from "../asset/312150053_1090676514947704_4342979459506156222_n.jpg";
import pest7 from "../asset/erik-karits-8aBgCl_TNfc-unsplash.jpg";
import pest8 from "../asset/alexas_fotos-gSYeFmQamuo-unsplash.jpg";
import pest9 from "../asset/chris-curry-N4AFGRPZGk4-unsplash.jpg";
import { Link } from "react-router-dom";

const Disinfect = () => {
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
  return (
    <div className="">
      <div className="disinfect">
        <main>
          <div className="disinfectimg">
            <h4>Disinfection Service</h4>
          </div>
          <div className="drainageTexts">
            <p>
              <h3> Disinfection</h3> ....is the process, which involves the
              elimination of most pathogenic microorganisms (excluding bacterial
              spores) on inanimate objects. •Chemicals used in disinfection are
              called disinfectants. Different disinfectants have different
              target ranges, not all disinfectants can kill all microorganisms
            </p>
            <p>
              also is reduction in the number of bacteria, viruses, or fungi to
              a desired concentration. Sterilization, or the complete
              elimination of all microorganisms, is generally not needed or in
              most cases not possible. The actual concentration of
              microorganisms required to cause a disease (or some other
              criteria) is not well-defined under most conditions, and
              disinfection procedures have developed primarily from an empirical
              basis. Disinfection may be needed for two distinctly different
              situations: (1) disinfection of nets, holding facilities, and
              piping prior to use; and (2) disinfection of process water prior
              to use or before reuse. In general, the first situation is much
              simpler as toxicity to culture organisms is not usually a problem.
              In the second case, the toxicity of the disinfection agent and its
              residues or derivatives to non-target organisms (i.e., culture
              organisms) is critical and will control the disinfection process.
              The effectiveness of a given disinfectant depends on the
              concentration of disinfectant, contact time, temperature,
              turbidity, particulate concentration, and specific microorganisms.
              Because the concentration of microorganisms varies widely,
              microorganism concentrations are typically expressed in what are
              called log units. If concentrations are expressed in #/ml, then
              the log concentration is equal to the base 10 logarithm of the
              actual concentration
            </p>
            <p>
              To minimise number of organisms in the population worldwide. The
              method of disinfection is used internationally for the safety of
              humans, to decrease the scale of transmission of diseases. A large
              emphasis of sterilisation and disinfection has been placed in the
              food industry, water sanitisation and medical care and hospitals.
              As these have found to be largest affected organisations with
              microorganisms and modes of transmission amongst the population.
              Different disinfectants are used in different industries, which
              target the specific flora.
            </p>
            <p>
              Disinfectants are classified by their chemical nature and each
              class has its unique characteristics, hazards, toxicities and
              efficacy against various microorganisms. Environmental conditions,
              such as the presence of organic matter, pH or water hardness can
              also impact the action of a disinfectant.
            </p>
            <p>
              The professional Staffs at IREHV are all Well mannered, bonded,
              and Certified, so you know that you can trust our work. We
              guarantee our workmanship and parts, confidently backing
              everything we do. With every client, our aim is to provide durable
              and effective repairs on the first visit, so we can resolve your
              drain issues quickly with as little inconvenience to you.
            </p>
          </div>
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
          <div className="consultform">
            <h4>Booking</h4>
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
          <div className="drainAdvert">
            <img
              src="https://media.istockphoto.com/id/1135314838/photo/repair-of-hydraulic-heating-system-in-the-house.jpg?s=612x612&w=0&k=20&c=Z8-BohVX0_Niqp72nroZzeK3m8C69U2xLcvQYE_iHuA="
              alt="plumbing"
            />

            <p>For proffessional plumbing service</p>
            <p>reach out to IREHV</p>
          </div>
          <div className="drainAdvert">
            <img
              src="https://www.liveandwingit.com/wp-content/uploads/2022/07/DOWNLOAD-FISH-FARMING-BUSINESS-PLAN-SAMPLE-300x225.jpeg"
              alt="Catfish"
            />

            <p>For Healthy Catfish procurement</p>
            <p>Consult IREHV</p>
          </div>
          <div className="drainAdvert">
            <img
              src="https://guardian.ng/wp-content/uploads/2020/08/Fish-1062x598.jpg"
              alt="Smoked Catfish"
            />

            <p>For Hygienic Smoked Catfish </p>
            <p>Get in Touch IREHV</p>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Disinfect;
