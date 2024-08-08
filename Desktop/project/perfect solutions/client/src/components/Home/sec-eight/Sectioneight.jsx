import React from "react";
import CountUp from "react-countup";
import img7 from "../../../assets/imgaes/image7.jpg";

function Sectioneight() {
  return (
    <section className="section8">
      <div className="sec8-bg">
        <div className="container">
          <div
            className="row row-gap-1"
            style={{ padding: "100px 0", fontSize: "22px", fontWeight: "bold" }}
          >
            <div
              className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"
              style={{ borderRight: "1px solid black", textAlign: "center" }}
            >
              <div className="number">
                <CountUp end={10000} duration={2} />
                <span style={{ color: "#FF984C" }}>+</span>
              </div>
              <div className="text-dark">
                <h6 style={{ color: "#0312188A" }}>Satisfied Clients</h6>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"
              style={{ borderRight: "1px solid black", textAlign: "center" }}
            >
              <div className="number">
                <CountUp end={100} duration={2} />
                <span style={{ color: "#FF984C" }}>+</span>
              </div>
              <div className="text-dark">
                <h6 style={{ color: "#0312188A" }}>Expert Team</h6>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"
              style={{ borderRight: "1px solid black", textAlign: "center" }}
            >
              <div className="number">
                <CountUp end={20000} duration={2} />
                <span style={{ color: "#FF984C" }}>+</span>
              </div>
              <div className="text-dark">
                <h6 style={{ color: "#0312188A" }}>Successful Visas Created</h6>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3"
              style={{ textAlign: "center" }}
            >
              <div className="number">
                <CountUp end={20} duration={2} />
                <span style={{ color: "#FF984C" }}>+</span>
              </div>
              <div className="text-dark">
                <h6 style={{ color: "#0312188A" }}>Years Of Experiences</h6>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4 p-0">
              <img
                src={img7}
                style={{ width: "100%", borderRadius: "5px 0 0 5px" }}
                alt="Section Illustration"
              />
            </div>
            <div
              className="col-12 col-lg-8"
              style={{
                backgroundColor: "#0f1735",
                color: "white",
                padding: "1rem",
              }}
            >
              <div className="p-3">
                <div>
                  <h1>
                    We Provide The Best Way To <br /> Success Your Migration
                  </h1>
                  <p style={{ color: "#DBDBDB" }}>
                    Consectetur adipiscing elit sed do eiusmod tempor incididun
                    ut labore et dolore magna aliquaenim aminim veniam nostrud
                    consecte elit.
                  </p>
                </div>
                <div className="sec8-btn">
                  <button>APPLY VISA NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectioneight;
