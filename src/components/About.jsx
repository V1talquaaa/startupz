import React from "react";
import QuestionMark from "../images/questionMark.svg";

export const About = () => {
  return (
    <section className="about">
      <div className="container qmWrap">
        <img src={QuestionMark} alt="?" className="questioMark" />
        <h2 className="aboutTitle">Who we are</h2>
        <p className="aboutText">
          We create products that have innovation and technology at their core.{" "}
          <br />
          We value working with talented people that understand the
          possibilities of today.
        </p>
        <ul className="aboutList">
          <li className="aboutItem">
            <span className="aboutItemSpan">01</span>
            <p className="aboutItemText">
              We develop innovative products, systems and services
            </p>
          </li>
          <li className="aboutItem">
            <span className="aboutItemSpan">02</span>
            <p className="aboutItemText">
              Next we build teams to scale them into companies
            </p>
          </li>
          <li className="aboutItem">
            <span className="aboutItemSpan">03</span>
            <p className="aboutItemText">
              Each startup solving one problem at a time
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
