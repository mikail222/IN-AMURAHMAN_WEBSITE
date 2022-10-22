import React from "react";
import { Link } from "react-router-dom";
import logo from "./asset/311994973_527103495932771_4660787857232063610_n.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="home">
          <img className="logo" src={logo} alt="logo" />
          <p className="styleLogo">IREHV</p>
        </div>
      </Link>
      <div className="navs">
        <Link to="Service">
          <p>Service</p>
        </Link>
        <Link to="Hire">
          <p>Hire</p>
        </Link>
        <Link to="Show_Room">
          <p>Show Room</p>
        </Link>
        <Link to="Blog">
          <p>Blog</p>
        </Link>
        <Link to="CSR">
          <p>CSR</p>
        </Link>
        <Link to="Clues">
          <p>Clues</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
