import React, { useState } from "react";
import "./nav.css";
import { FaBars } from "react-icons/fa";
import logo1 from "../../assets/imgaes/logo-header.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars style={{ color: "black" }} />
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/" style={{ color: "#ff7f50" }}>
              Home
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              Services{" "}
              <span>
                {" "}
                <MdOutlineKeyboardArrowDown />
              </span>
            </a>

            <ul className="dropdown-menu">
              <li>
                <a href="#section1">Certification Services & Education</a>
              </li>
              <li>
                <a href="#section4">Attestation Services</a>
              </li>
              <li>
                <a href="#section3">Business Consultancy</a>
              </li>
              <li>
                <a href="#section6"> Pro Metric Exam</a>
              </li>
              <li>
                <a href="#section7">Real Estate Services</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <button className="appointment-button">APPOINTMENT</button>
      </div>
    </nav>
  );
}

export default Navbar;
