import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div
      style={{ paddingTop: "5rem", paddingBottom: "3rem" }}
      className="services"
    >
      <div className="h1">
        <h1>our services</h1>
      </div>
      <div className="service">
        <a href="Domestic_cleaning">
          <div>
            <img
              className="domestic"
              src="https://e7.pngegg.com/pngimages/267/998/png-clipart-window-cleaner-maid-service-house-cleaning-house-blue-text-thumbnail.png"
              alt="domestic"
            />

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
        </a>
        <a href="Commercial">
          <div>
            <img
              className="commercial"
              src="https://img.freepik.com/free-vector/industrial-cleaning-team-work-flat-poster_1284-8622.jpg?w=2000"
              alt="commercial"
            />
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
        </a>
        <a href="Pest_control">
          <div>
            <img
              className="fumigation"
              src="https://pngimage.net/wp-content/uploads/2018/06/fumigador-png-4.png"
              alt="fumigation"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3> Pest control</h3>
              <p>
                Pest are the most mind disturbing parasite that not only deprive
                us of Healthy living,but also consider as a threat to our
                life.contact <b> IREHV </b> for reliable help
              </p>
            </div>
          </div>
        </a>
        <a href="Disinfect">
          <div>
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
        </a>
        <a href="Wast_management">
          <div>
            <img
              className="wast"
              src="https://w7.pngwing.com/pngs/708/566/png-transparent-waste-management-waste-container-bus-stop-text-recycling-logo.png"
              alt="waste  management"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3>Wast Management</h3>
              <p>
                our service also provide you the access to get ride of your load
                of garbages and maintain with you a high degree of wast
                Management
              </p>
            </div>
          </div>
        </a>
        <a href="Plank_pest_control">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdyIYDf-BQmZL-9MVmmOP2aPgjb1fSIjWCA&usqp=CAU"
              alt="termite"
            />
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
                distroyer pest.
              </p>
            </div>
          </div>
        </a>
        <a href="Drainage">
          <div>
            <img
              src="https://e7.pngegg.com/pngimages/460/273/png-clipart-cleaner-plumbing-cleaning-maid-service-drain-24-hour-service-blue-furniture-thumbnail.png"
              alt=""
            />
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
                bring sever distruction to people life and property through
                flood and erosion.need help? contact <b>IREHV</b>
              </p>
            </div>
          </div>
        </a>
        <a href="Event_Maintainance">
          <div>
            <img
              src="https://e7.pngegg.com/pngimages/268/1005/png-clipart-cleaning-laborer-empresa-mr-power-clean-mr-clean-service-team.png"
              alt=""
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3>Event Hygienic Maintainance</h3>
              <p>
                Thinking of Hygienic event organization or gathering of
                personalities? feel free to employ our service.
              </p>
            </div>
          </div>
        </a>
        <a href="Consultance">
          <div>
            <img
              src="https://www.pngfind.com/pngs/m/69-698301_thx-mobile-consulting-icon-png-transparent-png.png"
              alt=""
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3>Consultance</h3>
              <p>
                The paramont part of our service is to put you through on how
                and why you must maintain an hygienic and create enabling
                Environment,to improve your quality of living
              </p>
            </div>
          </div>
        </a>
        <a href="Trainning">
          <div>
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
        </a>
      </div>
    </div>
  );
};

export default Service;
