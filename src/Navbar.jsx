import React from "react";
import { MdAndroid } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "./asset/311994973_527103495932771_4660787857232063610_n.jpg";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="nav">
      <a href="/">
        <div className="home">
          <img className="logo" src={logo} alt="logo" />
          <p className="styleLogo">IREHV</p>
        </div>
      </a>
      {show ? (
        <div className="menuBar_container">
          {/* <CgMenuGridR className="menuBar" /> */}
          <div className="dropdown-bar">
            <div className="navs">
              <div className="dropdown">
                <span>Service</span>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link to="/Domestic_cleaning">Domestic cleaning</Link>
                    </li>
                    <li>
                      <Link to="/Commercial">Commercial cleaning</Link>
                    </li>
                    <div className="subdropdown">
                      <li>
                        <Link to="/Pest_control">Pest control</Link>
                      </li>
                      <div className="subdropdown-content">
                        <li>
                          <Link to="/Ants">Ant control</Link>
                        </li>
                        <li>
                          <Link to="/Bedbugs">Bedbugs control</Link>
                        </li>
                        <li>
                          <Link to="/Cockroaches">Cockroaches control</Link>
                        </li>
                        <li>
                          <Link to="Mosquitoes">Mosquitoes control</Link>
                        </li>
                        <li>
                          <Link to="/Rodents">Rodents control</Link>
                        </li>
                        <li>
                          <Link to="/Spider">Spider control</Link>
                        </li>
                        <li>
                          <Link to="/Termites">Termites control</Link>
                        </li>
                        <li>
                          <Link to="/Snakes">Snakes control</Link>
                        </li>
                      </div>
                    </div>
                    <li>
                      <Link to="/Plank_pest_control"> Plank pest control</Link>
                    </li>
                    <li>
                      <Link to="/Drainage">Drainage Maintainance</Link>
                    </li>
                    <li>
                      <Link to="/Trainning">Training service</Link>
                    </li>
                    <li>
                      <Link to="/Event_maintainance">
                        Event hygienic Maintainance
                      </Link>
                    </li>
                    <li>
                      <Link to="/Wast_management">Wast Management</Link>
                    </li>
                    <li>
                      <Link to="/Disinfect">Disinfect</Link>
                    </li>
                    <li>
                      <Link to="/Consultance">Consultance</Link>
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
        </div>
      ) : (
        <CgMenuGridR
          style={{ width: "4rem", height: "2rem", marginRight: "2rem" }}
          title="Menu Bar"
          onClick={(e) => setShow(!show)}
          className="menuBar"
        />
      )}
    </div>
  );
};

export default Navbar;
