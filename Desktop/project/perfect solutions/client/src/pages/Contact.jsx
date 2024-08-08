import React from "react";
import "./styles.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div style={{ backgroundColor: "#f5f7fb" }}>
        <div className="contact-page container d-flex justify-content-center align-items-center vh-100">
          <div className="row w-100">
            <div className="col-lg-6 mb-4">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Your Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder=" Your subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-6 contact-info-section text-white">
              <h2>Contact Information</h2>
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
              <div className="contact-info">
                <div className="mb-3">
                  <IoLocationSharp style={{fontSize:'25px',marginRight:'15px'}}/>
                  <p>
                    Our Location: <br />
                    Jl. Sunset Road No.815, Kuta - Bali
                  </p>
                </div>
                <div className="mb-3">
                  <IoMail style={{fontSize:'25px'}}/>
                  <p>
                    Email Us: <br />
                    support@domain.com
                  </p>
                </div>
                <div className="mb-3">
                  <FaPhoneSquareAlt style={{fontSize:'25px'}}/>
                  <p>
                    Phone Number: <br />
                    (+021) 325 112 / (+62) 81 574 6591
                  </p>
                </div>
              </div>
              <div className="social-media">
                <h3>Follow our social media:</h3>
                <div className="social-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
