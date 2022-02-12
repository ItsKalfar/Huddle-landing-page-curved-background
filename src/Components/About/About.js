import React from "react";
import "./About.css";
import AboutCard from "./../AboutCard";

import growTogether from "./../../images/illustration-grow-together.svg";
import flowingConversation from "./../../images/illustration-flowing-conversation.svg";
import yourUsers from "./../../images/illustration-your-users.svg";

import bgSectionTopMobile1 from "./../../images/bg-section-top-mobile-1.svg";
import bgSectionTopMobile2 from "./../../images/bg-section-top-mobile-2.svg";
import bgSectionBottomMobile1 from "./../../images/bg-section-bottom-mobile-1.svg";
import bgSectionBottomMobile2 from "./../../images/bg-section-bottom-mobile-2.svg";

import bgSectionTopDesktop1 from "./../../images/bg-section-top-desktop-1.svg";
import bgSectionTopDesktop2 from "./../../images/bg-section-top-desktop-2.svg";
import bgSectionBottomDesktop1 from "./../../images/bg-section-bottom-desktop-1.svg";
import bgSectionBottomDesktop2 from "./../../images/bg-section-bottom-desktop-2.svg";

const About = () => {
  return (
    <>
      <section id="about">
        <img className="bgTopMobile" src={bgSectionTopMobile1} alt="" />
        <img className="bgTopDesktop" src={bgSectionTopDesktop1} alt="" />
        <AboutCard
          id="first-card"
          img={growTogether}
          heading={"Grow Together"}
          info={
            "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
          }
        />
        <img className="bgBottomMobile" src={bgSectionBottomMobile1} alt="" />
        <img className="bgBottomDesktop" src={bgSectionBottomDesktop1} alt="" />
        <AboutCard
          id="second-card"
          img={flowingConversation}
          heading={"Flowing Conversation"}
          info={
            "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          }
        />
        <img className="bgTopMobile" src={bgSectionTopMobile2} alt="" />
        <img className="bgTopDesktop" src={bgSectionTopDesktop2} alt="" />

        <AboutCard
          id="third-card"
          img={yourUsers}
          heading={"Your Users"}
          info={
            "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          }
        />
        <img className="bgBottomMobile" src={bgSectionBottomMobile2} alt="" />
        <img className="bgBottomDesktop" src={bgSectionBottomDesktop2} alt="" />
      </section>
    </>
  );
};

export default About;
