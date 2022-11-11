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
        <div style={{ width: "30%", marginLeft: "1.5rem" }} className="form">
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
      </div>
      <h2 style={{ textAlign: "center" }}>
        Pest control and Fumigation Services
      </h2>
      <p style={{ fontSize: "1.5rem", margin: "2rem" }}>
        Whether it’s a home, school hospital, office, factory etc, our goal is
        to eliminate the causes of pest problems for our customers, rather than
        just treat the symptoms. We provide One-time, Monthly or Quarterly
        treatments. With our dependable pest-control services, you can sit back
        and enjoy the peace of mind that comes from knowing that your family and
        property are fully protected. You can be rest assured that our
        professional team will eliminate all pests from your property so that
        you can love where you work, live and play.
      </p>
      <div>
        <div style={{ textAlign: "center", marginRight: "30%" }}>
          <b> click on any of the pest for details</b>
          <h3>pest we deal with</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="pest_map">
            <a href="Spider">
              <img src={pest1} alt="" />
              <p>Spider</p>
            </a>
            <a href="Ants">
              <img src={pest2} alt="" />
              <p>Ants</p>
            </a>
            <a href="Snakes">
              <img src={pest3} alt="" />
              <p>Snakes</p>
            </a>
            <a href="Termites">
              <img src={pest4} alt="" />
              <p>Termites</p>
            </a>
            <a href="Scorpion">
              <img src={pest5} alt="" />
              <p>Scorpions</p>
            </a>
            <a href="Bedbugs">
              <img src={pest6} alt="" />
              <p>Bedbugs</p>
            </a>
            <a href="Cockroaches">
              <img src={pest7} alt="" />
              <p>Cockroaches</p>
            </a>
            <a href="Rodents">
              <img src={pest8} alt="" />
              <p>Rodents</p>
            </a>
            <a href="Flies">
              <img src={pest9} alt="" />
              <p>Flies</p>
            </a>
          </div>
          <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
            <i style={{ textAlign: "center", marginBottom: "2rem" }}>
              For Home use and Family protection order now!
            </i>

            {checkList.slice(6, 8).map(({ image, name, id }, i) => (
              <div key={i}>
                <Link className="first" to={`Product_detail/${id}`}>
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
