import React from "react";
import "./AboutCard.css";

const AboutCard = ({ img, heading, info }) => {
  return (
    <>
      <div className="about-card">
        <div className="about-card-container">
          <img src={img} alt="img" />
          <div className="info-wrapper">
            <h2>{heading}</h2>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
