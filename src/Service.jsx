import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import domestic from "./asset/domestic";
// import commercial from "./asset/comercial";
// import wast from "./asset/wast-management";
// import event from "./asset/event-management";
// import plank from "./asset/plank-pest";
// import drainage from "./asset/drainage";
// import consult from "./asset/consultance";
// import fumigation from "./asset/fumigation";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="services">
      <div className="service-overlay">
        <div>
          <h1 className="environment">𝖔𝖚𝖗 𝖘𝖊𝖗𝖛𝖎𝖈𝖊𝖘</h1>
        </div>
        <div className="service">
          <Link to="Domestic_cleaning">
            <div data-aos="fade-down">
              <img className="domestic" src="" alt="domestic" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Domestic cleaning</h3>
                <p>
                  we offer a unique and Standard cleaning service to keep your
                  Home clean and free from iritating, disgusting element of
                  dirtiness
                </p>
              </div>
            </div>
          </Link>
          <Link to="Commercial">
            <div data-aos="fade-down">
              <img className="commercial" src="" alt="commercial" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Commercial cleaning</h3>
                <p>
                  for best cleaning solution and justifiable,sparkling,fresh and
                  outstanding climatic condition to work in,at your workspace,is
                  why we are available to contract with.
                </p>
              </div>
            </div>
          </Link>
          <Link to="Pest_control">
            <div data-aos="fade-down">
              <img className="fumigation" src="" alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3> Pest control</h3>
                <p>
                  Pest are the most mind disturbing parasite that not only
                  deprive us of Healthy living,but also consider as a threat to
                  our life.contact <b> IREHV </b> for reliable help
                </p>
              </div>
            </div>
          </Link>
          <Link to="Disinfect">
            <div data-aos="fade-down">
              <img
                className="disinfection"
                src="https://icon-library.com/images/137_spray-can-aerosol-hand-disinfection-512.png"
                alt="disinfection"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Disinfection Service</h3>
                <p>
                  infection is a result of lack of hygienic ideaology in any
                  environment and such environment is open to high level of risk
                  peculiar to the Health of the People. therefore we eradicate
                  environmental hazard
                </p>
              </div>
            </div>
          </Link>
          <Link to="Wast_management">
            <div data-aos="fade-down">
              <img className="wast" src="" alt="waste  management" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Wast Management</h3>
                <p>
                  our service also provide you the access to get ride of your
                  load of garbages and maintain with you a high degree of wast
                  Management
                </p>
              </div>
            </div>
          </Link>
          <Link to="Plank_pest_control">
            <div data-aos="fade-down">
              <img src="" alt="termite" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Plank pest control</h3>
                <p>
                  we help in maintaining your furnitures,Roof and other wooden
                  material that might got sever attack from Termite and other
                  destroyer pest.
                </p>
              </div>
            </div>
          </Link>
          <Link to="Drainage">
            <div data-aos="fade-down">
              <img src="" alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Drainage Maintainance</h3>
                <p>
                  abandoning and neglection of Drainage system as been proved to
                  bring sever distruction to people's life and property through
                  flood and erosion.need help? contact <b>IREHV</b>
                </p>
              </div>
            </div>
          </Link>
          <Link to="Event_Maintainance">
            <div data-aos="fade-down">
              <img src="" alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Event Hygienic Maintainance</h3>
                <p>
                  Thinking of Hygienic Event organization or gathering of
                  personalities? feel free to employ our service.
                </p>
              </div>
            </div>
          </Link>
          <Link to="Consultance">
            <div data-aos="fade-down">
              <img src="" alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Consultance</h3>
                <p>
                  The paramount part of our service is to put you through on how
                  and why you must maintain an hygienic and create enabling
                  Environment,to improve your quality of living
                </p>
              </div>
            </div>
          </Link>
          <Link to="Trainning">
            <div data-aos="fade-down">
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_461424.png"
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>Training</h3>
                <p>
                  a qualified and certified knowledge is not that,that is
                  static,but that which flow from generation to generation.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
