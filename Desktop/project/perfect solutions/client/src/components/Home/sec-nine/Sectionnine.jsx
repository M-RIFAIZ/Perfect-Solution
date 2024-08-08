import React from "react";
import { FaArrowRight } from "react-icons/fa";
import imgNine from "../../../assets/imgaes/image9.jpg";
import { Link } from "react-router-dom";

function Sectionnine() {
  return (
    <section className="section9">
      <div className="container">
        <div className="text-center">
          <div>
            <h5>OUR BLOG</h5>
          </div>
          <div>
            <h1>Explore Our Latest Blog & Articles</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4">
            <div className="sec9-card ">
              <div className="sec9-imgdiv">
                <img
                  src={imgNine}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div className="pt-4">
                <h3>
                  Unlocking Opportunities Abroad: The Role of Visa Consultants
                </h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore...
                </p>
              </div>
              <Link to="" style={{ textDecoration: "none" }}>
                READ MORE{" "}
                <FaArrowRight style={{ marginLeft: "6px", fontSize: "15px" }} />
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sec9-card ">
              <div className="sec9-imgdiv">
                <img
                  src={imgNine}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="pt-4">
                <h3>
                  Unlocking Opportunities Abroad: The Role of Visa Consultants
                </h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore...
                </p>
              </div>
              <Link to="" style={{ textDecoration: "none" }}>
                READ MORE{" "}
                <FaArrowRight style={{ marginLeft: "6px", fontSize: "15px" }} />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sec9-card ">
              <div className="sec9-imgdiv">
                <img
                  src={imgNine}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="pt-4">
                <h3>
                  Unlocking Opportunities Abroad: The Role of Visa Consultants
                </h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore...
                </p>
              </div>
              <Link to="" style={{ textDecoration: "none" }}>
                READ MORE{" "}
                <FaArrowRight style={{ marginLeft: "6px", fontSize: "15px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionnine;
