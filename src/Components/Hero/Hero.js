import React from "react";
import "./Hero.css";
import heroImg from "./../../images/screen-mockups.svg";
import people from "./../../images/icon-communities.svg";
import message from "./../../images/icon-messages.svg";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="text-box">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              {" "}
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="btn btn-primary">Get Started For Free</button>
          </div>
          <img src={heroImg} alt="heroImg" id="heroImg" />
        </div>
      </section>
      <section className="numbers">
        <div className="container">
          <div className="firstNo">
            <img src={people} alt="people" />
            <span>1.4k+</span>
            <p>Communities Formed</p>
          </div>
          <div className="secondNo">
            <img src={message} alt="people" />
            <span>2.7m+</span>
            <p>Message Sent</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
