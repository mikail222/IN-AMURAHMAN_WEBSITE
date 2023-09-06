import React, { useState } from "react";
import who_we_are from "./asset/Frames 1000001673.svg";
import { GrStar } from "react-icons/gr";
import { MdStarOutline } from "react-icons/md";

const Customer = () => {
  const [customer1, setCustomer1] = useState(true);
  const [customer2, setCustomer2] = useState(false);
  const [customer3, setCustomer3] = useState(false);
  const customer = [
    {
      paragraph:
        " IREHV is an excellent Pest  Control Company so far we've ever deal with",
      picture: "",
      rate: "GrStar",
      rate_limit: "MdStarOutline",
      client_name: "Blue Mist Water Corporation",
      status: "Customer",
    },
    {
      paragraph:
        " Trust Worthy Company with 100 Percent timely  service delivery",
      picture: "",
      rate: "GrStar",
      rate_limit: "MdStarOutline",
      client_name: "Inamurahman Fashion House",
      status: "Customer",
    },
    {
      paragraph:
        "One in a million Proffesional Pest and Hazard  Eradication company ",
      picture: "",
      rate: "GrStar",
      rate_limit: "MdStarOutline",
      client_name: "Vission and Mission Limted",
      status: "Customer",
    },
  ];
  return (
    <div className="who_we_are">
      <img src={who_we_are} alt="" />
      <p>
        "The more effortless the hazard eradication looks,the more effort the
        concious mind actually put into the proccess, We pay absolute attention
        to our Client environmental distress and wage tremendous war against
        pathogenic visitors.Alway with IREHV is the environmental solace you
        want"
      </p>
      <div className="customer">
        {customer1 &&
          customer.map(({ picture, paragraph, client_name, status }) => (
            <div data-aos="zoom-in">
              <p>{paragraph}</p>
              <nav className="pics">{picture}</nav>
              <span>
                <GrStar className="starr" />
                <GrStar className="starr" />
                <GrStar className="starr" />
                <GrStar className="starr" />
                <MdStarOutline className="starr" />
              </span>
              <p className="clientName">{client_name}</p>
              <p style={{ color: "gray", fontWeight: "bold" }}>{status}</p>
            </div>
          ))}

        {customer2 &&
          customer.map(({ picture, paragraph, client_name, status }) => (
            <div data-aos="zoom-in">
              <p>{paragraph}</p>
              <nav className="pics">{picture}</nav>
              <span>
                <GrStar className="starr" />
                <GrStar className="starr" />
                <GrStar className="starr" />
                <GrStar className="starr" />
                <MdStarOutline className="starr" />
              </span>
              <p className="clientName">{client_name}</p>
              <p style={{ color: "gray", fontWeight: "bold" }}>{status}</p>
            </div>
          ))}
        {customer3 &&
          customer.map(({ picture, paragraph, client_name, status }) => (
            <div data-aos="zoom-in">
              <p>{paragraph}</p>
              <nav className="pics">{picture}</nav>
              <span>
                <GrStar className="starr" />
                <GrStar className="starr" />
                <GrStar className="starr" />
                <GrStar className="starr" />
                <MdStarOutline className="starr" />
              </span>
              <p className="clientName">{client_name}</p>
              <p style={{ color: "gray", fontWeight: "bold" }}>{status}</p>
            </div>
          ))}
      </div>
      <div className="dot">
        <p
          onClick={() =>
            setCustomer1(true) || setCustomer2(false) || setCustomer3(false)
          }
        >
          1
        </p>
        <p
          onClick={() =>
            setCustomer2(true) || setCustomer1(false) || setCustomer3(false)
          }
        >
          2
        </p>
        <p
          onClick={() =>
            setCustomer3(true) || setCustomer1(false) || setCustomer2(false)
          }
        >
          3
        </p>
      </div>
    </div>
  );
};

export default Customer;
