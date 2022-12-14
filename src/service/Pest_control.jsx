import React from "react";
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
const Pest_control = ({ handleSubmit, checkList }) => {
  return (
    <div className="pest">
      <div style={{ display: "flex", flexDirection: "row", height: "90%" }}>
        <div className="pest_class">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbRXnAcu5SMCvc0e5tT15YElEvCgfg50wKw&usqp=CAU"
            alt=""
          />
        </div>
        <div style={{ width: "30%", marginLeft: "5rem" }} className="form">
          <h4 style={{ marginTop: "2rem" }}>Enquiry</h4>
          <form
            onSubmit={handleSubmit}
            style={{ height: "80%", marginTop: "1rem" }}
          >
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
      <h2 style={{ textAlign: "center" }}>
        Pest control and Fumigation Services
      </h2>
      <p style={{ fontSize: "1.5rem", margin: "2rem" }}>
        Whether it???s a home, school hospital, office, factory etc, our goal is
        to eliminate the causes of pest problems for our customers, rather than
        just treat the symptoms. We provide One-time, Monthly or Quarterly
        treatments. With our dependable pest-control services, you can sit back
        and enjoy the peace of mind that comes from knowing that your family and
        property are fully protected. You can be rest assured that our
        professional team will eliminate all pests from your property so that
        you can love where you work, live and play.
      </p>
      <p style={{ fontSize: "1.5rem", margin: "2rem" }}>
        {" "}
        We provide each individual with professional and effective pest control
        solutions which ensure the health and hygiene one needs in order to live
        and work in a safe, hygienic, pest-free environment. Cleaneat Services
        focuses primarily on the control and eradication of pests common in
        Nigeria using only environmentally friendly products. Some of these
        pests include bed bugs, termites, rats, houseflies among others
      </p>
      <div>
        <div style={{ textAlign: "center", marginRight: "30%" }}>
          <b> click on any of the pest for details</b>
          <h3>pest we deal with</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
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
          <div style={{ marginTop: "2rem", marginLeft: "2rem", width: "30%" }}>
            <i
              style={{
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              For Home use and Family protection order now!
            </i>

            {checkList.slice(6, 8).map(({ image, name, id }, i) => (
              <div key={i}>
                <Link
                  className="first"
                  style={{ margin: "2rem" }}
                  to={`Product_detail/${id}`}
                >
                  <i>Order Now</i>
                  <img className="first_class_img" src={image} alt="" />
                  <p>{name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pest_control;
