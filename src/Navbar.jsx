import React from "react";
import { MdAndroid } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "./asset/311994973_527103495932771_4660787857232063610_n.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="/">
        <div className="home">
          <img className="logo" src={logo} alt="logo" />
          <p className="styleLogo">IREHV</p>
        </div>
      </a>
      <div className="navs">
        <div className="dropdown">
          <span>Service</span>
          <div className="dropdown-content">
            <ul>
              <li>
                <Link to="/Domestic_cleaning">Domestic cleaning</Link>
              </li>
              <li>
                <a href="/Commercial">Commercial cleaning</a>
              </li>
              <div className="subdropdown">
                <li>
                  <a href="/Pest_control">Pest control</a>
                </li>
                <div className="subdropdown-content">
                  <li>
                    <a href="/Ants">Ant control</a>
                  </li>
                  <li>
                    <a href="/Bedbugs">Bedbugs control</a>
                  </li>
                  <li>
                    <a href="/Cockroaches">Cockroaches control</a>
                  </li>
                  <li>
                    <a href="Mosquitoes">Mosquitoes control</a>
                  </li>
                  <li>
                    <a href="/Rodents">Rodents control</a>
                  </li>
                  <li>
                    <a href="/Spider">Spider control</a>
                  </li>
                  <li>
                    <a href="/Termites">Termites control</a>
                  </li>
                  <li>
                    <a href="/Snakes">Snakes control</a>
                  </li>
                </div>
              </div>
              <li>
                <a href="/Plank_pest_control"> Plank pest control</a>
              </li>
              <li>
                <a href="/Drainage">Drainage Maintainance</a>
              </li>
              <li>
                <a href="/Trainning">Training service</a>
              </li>
              <li>
                <a href="/Event_maintainance">Event hygienic Maintainance</a>
              </li>
              <li>
                <a href="/Wast_management">Wast Management</a>
              </li>
              <li>
                <a href="/Disinfect">Disinfect</a>
              </li>
              <li>
                <a href="/Consultance">Consultance</a>
              </li>
            </ul>
          </div>
        </div>
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
