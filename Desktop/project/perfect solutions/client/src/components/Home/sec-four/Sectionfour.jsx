import React from "react";
import { Link } from "react-router-dom";
import backgroundImage1 from "../../../assets/imgaes/sec4-img1.jpg";
import backgroundImage2 from "../../../assets/imgaes/sec4-img2.jpg";
import backgroundImage3 from "../../../assets/imgaes/sec4-img3.jpg";
import backgroundImage4 from "../../../assets/imgaes/sec4-img4.jpg";
import backgroundImage5 from "../../../assets/imgaes/sec4-img5.jpg";

function Sectionfour() {
  return (
    <section className="section4" id="section4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center ">
            <h1>Attestation Services</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pt-5 ">
            <div
              className="card1"
              style={{ backgroundImage: `url(${backgroundImage1})` }}
            >
              <div class="card-content">
                <h3>Student Visa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor.
                </p>
                <div>
                  <Link style={{ textDecoration: "none", color: "#13B7FF" }}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div
              className="card2"
              style={{ backgroundImage: `url(${backgroundImage2})` }}
            >
              <div class="card-content">
                <h3>Worker Visa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor.
                </p>
                <div>
                  <Link style={{ textDecoration: "none", color: "#13B7FF" }}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div
              className="card3"
              style={{ backgroundImage: `url(${backgroundImage3})` }}
            >
              <div class="card-content">
                <h3>Tourist Visa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor.
                </p>
                <div>
                  <Link style={{ textDecoration: "none", color: "#13B7FF" }}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 pt-5">
            <div
              className="card4"
              style={{ backgroundImage: `url(${backgroundImage4})` }}
            >
              <div class="card-content">
                <h3>Business Visa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor.
                </p>
                <div>
                  <Link style={{ textDecoration: "none", color: "#13B7FF" }}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div
              className="card5"
              style={{ backgroundImage: `url(${backgroundImage5})` }}
            >
              <div class="card-content">
                <h3>Residence Visa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor.
                </p>
                <div>
                  <Link style={{ textDecoration: "none", color: "#13B7FF" }}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div
              className="card6"
              style={{ backgroundImage: `url(${backgroundImage2})` }}
            >
              <div class="card-content">
                <h3>Family Visa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor.
                </p>
                <div>
                  <Link style={{ textDecoration: "none", color: "#13B7FF" }}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionfour;
