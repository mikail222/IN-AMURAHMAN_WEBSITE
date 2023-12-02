import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import domestic from "./asset/8634252-removebg-preview.png";
import commercial from "./asset/images-removebg-preview (1).png";
import event from "./asset/images-removebg-preview (3).png";
import plank from "./asset/1886966-removebg-preview.png";
import drainage from "./asset/images-removebg-preview (2).png";
import consult from "./asset/334-3345245_icon-consultant-removebg-preview.png";
import fumigation from "./asset/images-removebg-previews.png";
import ourService from "./asset/Frame 1000001673.svg";
import star from "./asset/Group 7842.svg";
import stars from "./asset/Group 7843.svg";
import professional from "./asset/Head.svg";
import book from "./asset/BOOK A SESSION.svg";
import demo from "./asset/SEE A DEMO.svg";
import Clean_touch from "./Clean_touch";
import Our_Products from "./Accessibility/Our_Products";
import Footer from "./Footer";
import BlogAds from "./BlogAds";
import Our_Team from "./Accessibility/Our_Team";
import Customer from "./Customer";

const Service = ({ blogList, productUpdate }) => {
  console.log(blogList);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="services">
      <div className="logo1">
        <div className="overlay">
          <div className="brand">
            <div className="alignStars">
              <img src={star} alt="" className="star" />
              <img src={professional} alt="" className="profession" />
              <img src={stars} alt="" className="stars" />
            </div>
            <div className="btns">
              <img
                src={book}
                alt=""
                onClick={() => navigate("/Booking")}
                className="book"
              />
              <img
                src={demo}
                alt=""
                className="demo"
                onClick={() => navigate("/Clues")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="serviceHead">
        <img src={ourService} alt="" />
      </div>
      <div className="service">
        <Link>
          <div data-aos="fade-down">
            <img className="serviceIcon" src={domestic} alt="domestic" />

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
        <Link>
          <div data-aos="fade-down">
            <img className="serviceIcon" src={commercial} alt="commercial" />
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
        <Link>
          <div data-aos="fade-down">
            <img className="serviceIcon" src={fumigation} alt="" />
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
        </Link>
        <Link>
          <div data-aos="fade-down">
            <img
              className="serviceIcon"
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
        <Link>
          <div data-aos="fade-down">
            <img
              src="https://eco-bali.com/wp-content/uploads/2017/01/ecobali-wastemanagement.svg"
              alt="waste  management"
              className="serviceIcon"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3>Waste Management</h3>
              <p>
                our service also provide you the access to get ride of your load
                of garbages and maintain with you a high degree of waste
                Management
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div data-aos="fade-down">
            <img src={plank} alt="termite" className="serviceIcon" />
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
        <Link>
          <div data-aos="fade-down">
            <img src={drainage} alt="" className="serviceIcon" />
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
        <Link>
          <div data-aos="fade-down">
            <img src={event} alt="" className="serviceIcon" />
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
        <Link>
          <div data-aos="fade-down">
            <img src={consult} alt="" className="serviceIcon" />
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
        <Link>
          <div data-aos="fade-down">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_461424.png"
              alt=""
              className="serviceIcon"
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
      <Customer />
      <Our_Products />
      <Clean_touch />
      <BlogAds blogList={blogList} />
      <Clean_touch />
      <Footer />
    </div>
  );
};

export default Service;
