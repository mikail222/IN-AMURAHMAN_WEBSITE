import React, { useEffect } from "react";
import img from "./asset/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
import logo1 from "./asset/312243133_467283241883125_709980892638630759_n.png";
import img1 from "./asset/chris-curry-N4AFGRPZGk4-unsplash.jpg";
import img2 from "./asset/ed-van-duijn-UUdJ-0LQs0M-unsplash.jpg";
import img3 from "./asset/peter-f-wolf-XG8eYNYdz54-unsplash.jpg";
import img4 from "./asset/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
import img5 from "./asset/311316261_778122419947964_2059757928105644870_n.jpg";
import img6 from "./asset/312174882_1528535947626341_195442157512999292_n.jpg";
import img7 from "./asset/312158060_491770219533679_7275163015181232328_n.jpg";
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
      image:
        "https://www.saferbrand.com/media/Articles/Safer-Brand/identify-and-get-rid-of-venmous-snakes.jpg",
      name: "Snake",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzAhaKlJ1WU7Neyi_RrsW19__bbjlp4lpZA&usqp=CAU",
      name: "Termite",
    },
    {
      image:
        "https://8991486.fs1.hubspotusercontent-na1.net/hubfs/8991486/granulated-thick-tailed-scorpion-parabuthus-granu-2021-10-20-09-18-22-utc.jpg",
      name: "Scorpion",
    },
    { image: img1, name: "Flies" },
    { image: img2, name: "Spider" },
    {
      image:
        "https://www.gannett-cdn.com/authoring/2015/08/04/NFTU/ghows-LK-e952682d-6d11-44d7-9c25-672b5a76f663-9d1e73dd.jpeg",
      name: "Ant",
    },
    {
      image:
        "https://www.pestworld.org/media/560921/american-cockroach-dorsal.jpg",
      name: "Cockroach",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bed_bug%2C_Cimex_lectularius.jpg/800px-Bed_bug%2C_Cimex_lectularius.jpg",
      name: "Bed Bug",
    },
    {
      image:
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/MA_00030970_dffkdc.jpg",
      name: "Rodient",
    },
    { image: "" },
    { image: "" },
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
  console.log(sumArrayValues(picture));
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
              <p className="pestName">{name}</p>
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
        <Service />
        <Our_Team />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
