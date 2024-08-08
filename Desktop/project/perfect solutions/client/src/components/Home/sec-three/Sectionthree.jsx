import React from "react";
import img2 from "../../../assets/imgaes/image2.png";
import avatar from "../../../assets/imgaes/image4.jpg";

function Sectionthree() {
  return (
    <section className="section3" id="section3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="about-img">
              <img src={img2} className="img-fluid" alt="About" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-div p-2">
              <div className="about-head" style={{ borderBottom: "1px solid black" }}>
                <h1 className=" mb-4" style={{ fontSize: "45px" }}>
                  Business Consultancy
                </h1>
                <p className="mb-4">
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua enim aminim veniam nostrud
                  consecte elit.
                </p>
                <div>
                  <div className="mb-4">
                    <div className="p-3 h-100">
                      <ul className="">
                        <li className="mb-2">Immigration Resources</li>
                        <p style={{ color: "#0312188A" }}>
                          Consectetur adipiscing elit sed do eiusmod tempor
                          incididunt.
                        </p>
                        <li className="mb-2">Apply Visa Online</li>
                        <p style={{ color: "#0312188A" }}>
                          Consectetur adipiscing elit sed do eiusmod tempor
                          incididunt.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-5">
                <div className="col-lg-6 mb-3 mb-lg-0">
                  <button className="btn btn-light" onClick={"home"}>
                    More About
                  </button>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <img
                    src={avatar}
                    alt="Agent"
                    style={{ borderRadius: "51%", height: "51px" }}
                    className="me-2"
                  />
                  <div className="Contact-Agent p-2">
                    <h5>
                      Contact Agent <br />
                      (+021) 117 871
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionthree;
