import React from "react";
import img from "./asset/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
import logo1 from "./asset/312243133_467283241883125_709980892638630759_n.png";
import img1 from "./asset/311994973_527103495932771_4660787857232063610_n.jpg";
import img2 from "./asset/312023062_445172301023267_2339998476333677235_n.jpg";
import img3 from "./asset/oliver-hale-oTvU7Zmteic-unsplash.jpg";
import img4 from "./asset/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
import img5 from "./asset/311316261_778122419947964_2059757928105644870_n.jpg";
import img6 from "./asset/312174882_1528535947626341_195442157512999292_n.jpg";
import img7 from "./asset/312158060_491770219533679_7275163015181232328_n.jpg";
import img8 from "./asset/312137280_520182353281868_4450230382255186139_n.jpg";
import img9 from "./asset/resul-mentes-DbwYNr8RPbg-unsplash.jpg";
import img10 from "./asset/neven-krcmarek-HWbxSLvmSww-unsplash.jpg";
import { Link } from "react-router-dom";
import Service from "./Service";
import Footer from "./Footer";

const Home = ({ productUpdate }) => {
  const picture = [
    { image: img },
    { image: logo1 },
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img9 },
    { image: img10 },
  ];

  return (
    <div>
      <div className="logo1">
        <div className="overlay">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="brand"
          >
            {" "}
            <h1>IREHV</h1>
            <p style={{ marginTop: "2rem" }}>BN:3466674</p>
          </div>
          <h2 style={{ color: " #f57f80" }}>INAMURAHMAN</h2>
          <h4>ENVIROMENTAL HYGIENIC VENTURE</h4>
          <i>...eradicating environmental hazard</i>
        </div>
      </div>
      <div className="slider">
        <div className="slide-container">
          {picture.map(({ image }, i) => (
            <div key={i} className="image">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <p className="Advert"> Advertise here</p>
        <Link to="Contact" className="getIntouch">
          Get in Touch
        </Link>
      </div>
      <div className="company-info">
        <div className="">
          <h2 className="environment">About us</h2>
        </div>
        <div className="profile_wrap">
          <main className="c_profile">
            <p>
              <b> IREHV</b> is a registered and accredited Environmental
              Protection service Company, certified by the Kwara State Ministry
              of Environment for Pest Control and fumigation Service and managed
              with highly professional skills to meet the demand of its client.
            </p>
            <p>
              The director of the company is blessed with several years of
              professional experience in fumigation and pest control service,
              and in forming an exceptionally strong management team, the
              company is operating with expert, effective design tools, and
              excellent support systems that allow it to compete with the very
              best and work effectively on projects of all sizes.
            </p>
            <p>
              The company is known for excellent reputation in delivering a
              high-quality, professional service and thus enjoys long-term
              relationships, with established clients.
            </p>
            <p>
              It is a common saying that health is wealth. To be healthy, it
              takes constant effort in watching our surroundings - at least, by
              observing strict hygiene! The life expectancy of man has dropped
              significantly today, compared to what was obtained some decades
              ago. This negative omen is connected with a long time of neglect
              of our surroundings which has led to pests and diseases taking
              over our abode. As a result, people have their immune systems
              under regular attacks and fall sick more often than not, leading
              to sickness and/or death. It is high time we took both preventive
              and proactive measures to forestall a worsening situation.
            </p>
          </main>
          <aside style={{ width: "40%" }} className="demo">
            <div className="display_frame"></div>
          </aside>
        </div>
      </div>
      <div className="our_Service">
        <h2 style={{ textAlign: "center" }}>Our feature Product</h2>
        <div className="cleaning_equip">
          {productUpdate.map(({ img, product_name }, i) => (
            <div key={i} style={{ margin: "1rem 0px" }}>
              <Link className="first">
                <i>Order Now</i>
                <img className="imgs" src={img} alt="" />
                <p>{product_name}</p>
              </Link>
            </div>
          ))}
        </div>
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
