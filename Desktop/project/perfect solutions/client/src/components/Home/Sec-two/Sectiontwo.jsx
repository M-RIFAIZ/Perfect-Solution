import React from "react";
import clientlog1 from "../../../assets/imgaes/client-logo-1.png";
import clientlog2 from "../../../assets/imgaes/client-logo-2.png";
import clientlog3 from "../../../assets/imgaes/client-logo-3.png";
import clientlog4 from "../../../assets/imgaes/client-logo-4.png";
import clientlog5 from "../../../assets/imgaes/client-logo-5.png";

function Sectiontwo() {
  return (
    <section className="section2 container">
      <div className="row aling-items-center">
        <div className="col-12 col-lg-4">
          <div className="trusted-section w-100">
            <h2>Vizago Trusted By Big Companies</h2>
            <p>
              Adipiscing elit sed do eiusmod tempor incididunt labore dolore.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center">
          <div className="row company-logos justify-content-center">
            <div className="col-lg-3 col-md-12 mb-3">
              <img src={clientlog1} alt="Client Logo 1" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-12 mb-3">
              <img src={clientlog2} alt="Client Logo 2" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-12 mb-3">
              <img src={clientlog3} alt="Client Logo 3" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-12 mb-3">
              <img src={clientlog4} alt="Client Logo 4" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectiontwo;
