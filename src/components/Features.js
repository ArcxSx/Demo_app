import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="row">
        <h1>Features that make RUNO special</h1>
        <p>
          Each of these features are curated to deliver you the best call-based
          CRM experience for your business.
        </p>
      </div>
      <div className="row">
        <div className="grid__cards">
          <div className="grid__card_rows">
            <div className="grid__box">
              <div className="grid__item">
                <img
                  src="https://runo.in/icons/Easy-Scalability-circle.svg"
                  alt=""
                />
                <h5>Easy Scalability</h5>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className="grid__box">
              <div className="grid__item">
                <img
                  src="https://runo.in/icons/Easy-Scalability-circle.svg"
                  alt=""
                />
                <h5>High Contact Ratio</h5>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className="grid__box">
              <div className="grid__item">
                <img
                  src="https://runo.in/icons/Easy-Scalability-circle.svg"
                  alt=""
                />
                <h5>Low Recurring Cost</h5>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className="grid__box">
              <div className="grid__item">
                <img
                  src="https://runo.in/icons/Easy-Scalability-circle.svg"
                  alt=""
                />
                <h5>Zero Capital Investment</h5>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className="grid__box">
              <div className="grid__item">
                <img
                  src="https://runo.in/icons/Easy-Scalability-circle.svg"
                  alt=""
                />
                <h5>High Data Security</h5>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
