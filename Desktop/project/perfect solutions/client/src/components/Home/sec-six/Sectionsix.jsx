import React from "react";
import { FaBook } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import { PiSuitcaseSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

function Sectionsix() {
  return (
    <section className="section6" id="section6">
      <div className="container">
        <div className="row">
          <div className="sec6 col-lg-6 col-md-12 mb-4">
            <div className="sec6-h1">
              <h1 style={{ fontSize: "45px",paddingTop:'50px' }}>Pro Metric Exam</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="sec6-p">
              <p style={{ color: "#0312188A" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                quisquam illum quod, amet aspernatur ducimus ipsam culpa, qui
                aut a quos natus nulla. Neque iusto fuga delectus minus
                voluptatibus quae!
              </p>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}
        >
          <div className="sec6-box1 mb-3 col-lg-3 col-md-6 ">
            <div
              className="sec6-div1"
              style={{ backgroundColor: "#ffe5d1", padding: "1rem" }}
            >
              <div style={{ fontSize: "40px" }}>
                <FaBook />
              </div>
              <div style={{ position: "relative", top: "120px" }}>
                <div>
                  <h3>TOEFL Coaching</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sec6-box1 mb-3 col-lg-3 col-md-6">
            <div
              className="sec6-div2"
              style={{ backgroundColor: "#f6f8fb", padding: "1rem" }}
            >
              <div style={{ fontSize: "40px", color: "#13B7FF" }}>
                <AiOutlineFileSearch />
              </div>
              <div style={{ position: "relative", top: "120px" }}>
                <div>
                  <h3>IELTS Coaching</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sec6-box1 mb-3 col-lg-3 col-md-6">
            <div
              className="sec6-div3"
              style={{ backgroundColor: "#ffe5d1", padding: "1rem" }}
            >
              <div style={{ fontSize: "40px" }}>
                <SlNote />
              </div>
              <div style={{ position: "relative", top: "120px" }}>
                <div>
                  <h3>PTE Coaching</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sec6-box1 mb-3 col-lg-3 col-md-6">
            <div
              className="sec6-div4"
              style={{ backgroundColor: "#f6f8fb", padding: "1rem" }}
            >
              <div style={{ fontSize: "40px", color: "#13B7FF" }}>
                <PiSuitcaseSimple />
              </div>
              <div style={{ position: "relative", top: "120px" }}>
                <div>
                  <h3>GMAT Coaching</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    READ MORE →
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

export default Sectionsix;
