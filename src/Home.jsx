import React, { useEffect } from "react";
import img from "./asset/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
import logo1 from "./asset/312243133_467283241883125_709980892638630759_n.png";
import img0 from "./asset/house-spider-two-column-removebg-preview.png";
import img1 from "./asset/identify-and-get-rid-of-venmous-snakes-removebg-preview.png";
import img2 from "./asset/images-removebgs-previews.png";
import img3 from "./asset/granulated-thick-tailed-scorpion-parabuthus-granu-2021-10-20-09-18-22-utc-removebg-preview.png";
import img4 from "./asset/29-house-fly-npma-removebg-preview.png";
import img5 from "./asset/ghows-LK-e952682d-6d11-44d7-9c25-672b5a76f663-9d1e73dd-removebg-preview.png";
import img6 from "./asset/american-cockroach-dorsal-removebg-preview.png";
import img7 from "./asset/800px-Bed_bug__Cimex_lectularius-removebg-preview.png";
import img8 from "./asset/312137280_520182353281868_4450230382255186139_n.jpg";
import img10 from "./asset/neven-krcmarek-HWbxSLvmSww-unsplash.jpg";
import { Link } from "react-router-dom";
import Service from "./Service";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Our_Team from "./Accessibility/Our_Team";

const Home = ({ productUpdate }) => {
  const picture = [
    {
      image: img1,
    },
    {
      image: img2,
      name: "Termite",
    },
    {
      image: img3,
      name: "Scorpion",
    },
    { image: img4, name: "Flies" },
    { image: img0, name: "Spider" },
    {
      image: img5,
      name: "Ant",
    },
    {
      image: img6,
      name: "Cockroach",
    },
    {
      image: img7,
      name: "Bed Bug",
    },
    {
      image:
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/MA_00030970_dffkdc.jpg",
      name: "Rodient",
    },
  ];

  const sumArrayValues = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  const numbers = [1, 2, 3, 4, 5];
  //calling a function
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
            <h1>𝐼𝑅𝐸𝐻𝒱</h1>
            <p style={{ marginTop: "2rem" }}>BN:3466674</p>
          </div>
          <h2 style={{ color: " #f57f80" }}>INAMURAHMAN</h2>
          <h4>𝓔𝓝𝓥𝓘𝓡𝓞𝓜𝓔𝓝𝓣𝓐𝓛 𝓗𝓨𝓖𝓘𝓔𝓝𝓘𝓒 𝓥𝓔𝓝𝓣𝓤𝓡𝓔</h4>
          <i>...𝖊𝖗𝖆𝖉𝖎𝖈𝖆𝖙𝖎𝖓𝖌 𝖊𝖓𝖛𝖎𝖗𝖔𝖓𝖒𝖊𝖓𝖙𝖆𝖑 𝖍𝖆𝖟𝖆𝖗𝖉</i>
        </div>
      </div>
      <div className="slider">
        <div className="slide-container">
          {picture.map(({ image, name }, i) => (
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
        <div className="company-info-overlay">
          <h2 className="environment">𝒜𝒷𝑜𝓊𝓉 𝓊𝓈</h2>

          <div className="profile_wrap">
            <main className="c_profile">
              <p>
                <b> IREHV</b> is a registered and accredited Environmental
                Protection service Company, certified by the Kwara State
                Ministry of Environment for Pest Control and fumigation Service
                and managed with highly professional skills to meet the demand
                of its client.
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
                takes constant effort in watching our surroundings - at least,
                by observing strict hygiene! The life expectancy of man has
                dropped significantly today, compared to what was obtained some
                decades ago. This negative omen is connected with a long time of
                neglect of our surroundings which has led to pests and diseases
                taking over our abode. As a result, people have their immune
                systems under regular attacks and fall sick more often than not,
                leading to sickness and/or death. It is high time we took both
                preventive and proactive measures to forestall a worsening
                situation.
              </p>
            </main>
            <aside style={{ width: "40%" }} className="demo">
              <div className="display_frame"></div>
            </aside>
          </div>
        </div>
      </div>
      <div className="our_Service">
        <Service />
        <h2
          style={{ textAlign: "center", marginTop: "1rem" }}
          className="environment"
        >
          𝕺𝖚𝖗 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝕻𝖗𝖔𝖉𝖚𝖈𝖙
        </h2>
        <div className="cleaning_equip">
          {productUpdate.map(({ img, product_name }, i) => (
            <div key={i} style={{ margin: "1rem 0px" }}>
              <Link className="first" data-aos="slide-up">
                <i>Buy Now</i>
                <img className="imgs" src={img} alt="" />
                <p>{product_name}</p>
              </Link>
            </div>
          ))}
        </div>
        <Our_Team />
        <div className="performanceContainer">
          <div className="performanceOverlay">
            <h1>Client side Compatibility</h1>
            <div className="performanceDescription">
              <p>
                " The more effortless the hazard eradication looks, the more
                effort the conscious mind actually put into the process.
              </p>
              <p>
                We pay absolute attention to our Client environmental distress
                and wage tremendous war again pathogenic visitor.
              </p>
              <p>Alway with IREHV, is the environmemtal solace you want" </p>
            </div>
            <div className="performance">
              <div className="bordering">
                <p>
                  <b>90%</b> <i>Integrity</i>
                </p>
              </div>
              <div className="bordering">
                <p>
                  <b>95%</b> <i>Bravo</i>
                </p>
              </div>
              <div className="bordering">
                <p>
                  <b>90%</b>
                  <br />
                  <i>Intuitive</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
