import React, { useState } from "react";
import who_we_are from "./asset/Frames 1000001673.svg";
import { GrStar } from "react-icons/gr";
import { MdStarOutline } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customer = () => {
  const customer = [
    {
      paragraph:
        " IREHV is an excellent Pest  Control Company so far we've ever deal with",
      picture: "",
      rate: "GrStar",
      rate_limit: "MdStarOutline",
      client_name: "Blue Mist Water Corporation",
      statuses: "Customer",
    },
    {
      paragraph:
        " Trust Worthy Company with 100 Percent timely  service delivery",
      picture: "",
      rate: "GrStar",
      rate_limit: "MdStarOutline",
      client_name: "Inamurahman Fashion House",
      statuses: "Customer",
    },
    {
      paragraph:
        "One in a million Proffesional Pest and Hazard  Eradication company ",
      picture: "",
      rate: "GrStar",
      rate_limit: "MdStarOutline",
      client_name: "Vission and Mission Limted",
      statuses: "Customer",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "center",
    centerPadding: "610px",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        {/* <Slider {...settings}> */}
        {customer.map(({ paragraph, client_name, statuses }, i) => (
          <div key={i}>
            <p>{paragraph}</p>
            <nav className="pics"></nav>
            <span>
              <GrStar className="starr" />
              <GrStar className="starr" />
              <GrStar className="starr" />
              <GrStar className="starr" />
              <MdStarOutline className="starr" />
            </span>
            <p className="clientName">{client_name}</p>
            <p style={{ color: "gray", fontWeight: "bold" }}>{statuses}</p>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Customer;
