import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import img6 from "../../../assets/imgaes/image6.png";

function Sectionseven() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const questions = [
    "This is some text within a card body?",
    "This is some text within a card body?",
    "This is some text within a card body?",
    "This is some text within a card body?",
  ];

  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, pariatur asperiores! Hic doloremque deleniti error illum sit perspiciatis a aliquid maiores. Nobis, necessitatibus tempore consectetur illum odio illo recusandae quia!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, pariatur asperiores! Hic doloremque deleniti error illum sit perspiciatis a aliquid maiores. Nobis, necessitatibus tempore consectetur illum odio illo recusandae quia!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, pariatur asperiores! Hic doloremque deleniti error illum sit perspiciatis a aliquid maiores. Nobis, necessitatibus tempore consectetur illum odio illo recusandae quia!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, pariatur asperiores! Hic doloremque deleniti error illum sit perspiciatis a aliquid maiores. Nobis, necessitatibus tempore consectetur illum odio illo recusandae quia!",
  ];

  return (
    <section className="section7 container" id="section7">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="sec7-div">
            <div className="sec7-head">
              <div>
                <h1>Real Estate Services</h1>
              </div>
            </div>

            <div className="sec7-card">
              {questions.map((text, index) => (
                <div key={index} className="p-2">
                  <div className="card-body border p-3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCardClick(index)}
                    >
                      <span>{text}</span>
                      <MdArrowOutward />
                    </div>
                    <div
                      className={`description ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      {descriptions[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="sec7-img text-center">
            <img src={img6} className="img-fluid" alt="Client Questions" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionseven;
