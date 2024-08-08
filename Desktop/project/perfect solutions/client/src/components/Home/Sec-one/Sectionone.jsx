import React from "react";
import img1 from "../../../assets/imgaes/image1.png";

function Sectionone() {
  return (
    <section className="section1" id="section1">
      <div className="row container align-items-center m-0">
        <div className="col col-lg-6 col-left">
          <div className="header-section">
            <div className="header-content">
              <div className="header-tagline ">
                Certification Services and Education
              </div>
              <p className="header-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ea illum dolores tempora eaque sunt natus sequi dolorum,
                perspiciatis laborum in, dolor magni suscipit quo, unde
                architecto ratione quae veritatis!
              </p>
              <h1 className="header-title">
                Certification Services and Education
              </h1>
              <div className="header-actions">
                <button className="btn explore-button">Explore Now</button>
                <button className="btn intro-button">Watch Intro</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-6 col-right">
          <div className="header-image">
            <img
              src={img1}
              className="img-fluid w-100"
              alt="Visa Immigration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;
