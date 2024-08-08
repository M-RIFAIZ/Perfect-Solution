import React from "react";
import logo2 from "../../../assets/imgaes/logo-footer.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

function SectionTen() {
  return (
    <section className="sec10-main">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div style={{color:'white'}}>
              <h3>Perfect Solution</h3>
            </div>
            <div style={{ paddingTop: "70px", color: "white" }}>
              <p>
                Guiding you through the intricate world of visas and
                immigration, we stand as pioneers, leading the way in delivering
                unparalleled excellence.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <div>
                <h5 style={{ color: "white" }}>
                  Stay Informed With Our Newsletter
                </h5>
              </div>
              <div style={{ paddingTop: "70px" }} className="sec10-inp">
                <input type="text" placeholder="Your email address" /> <br />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="social-media">
              <span style={{ color: "white" }}>
                <FaSquareXTwitter />
              </span>
              <span style={{ color: "white" }}>
                <FaFacebookSquare />
              </span>
              <span style={{ color: "white" }}>
                <FaSquareInstagram />
              </span>
              <span style={{ color: "white" }}>
                <IoLogoYoutube />
              </span>
            </div>
            <p style={{ color: "#DBDBDB", padding: "0.5rem" }}>
              Copyright © 2023 Jegtheme. All rights reserved.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Visa</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Coaching</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Pricing</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="support">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Support</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Terms & Conditions</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <FaLocationDot style={{ color: "#ff8c42" }} />
                  <span>Kasaragod,Kerala,India</span>
                </li>
                <li>
                  <FaPhone style={{ color: "#ff8c42" }} />
                  <span> (+021) 325 112 / (+62) 81 574 6591</span>
                </li>
                <li>
                  <IoMail style={{ color: "#ff8c42" }} />
                  <span> support@domain.com</span>
                </li>
                <li>
                  <FaClock style={{ color: "#ff8c42" }} />
                  <span> Everyday: 9:00 am - 9:00 pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTen;
