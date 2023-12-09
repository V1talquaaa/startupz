import React from "react";
import bulbIcon from "../images/bulb.svg";

export const Values = () => {
  return (
    <section className="values">
      <div className="container bulbWrap">
        <img src={bulbIcon} alt="?" className="bulb" />
        <h2 className="valuesTitle">Our core values</h2>
        <ul className="valuesList">
          <li className="valuesItem">
            <span className="valuesItemSpan">01.</span>
            <p className="valuesItemText">
              Startupz operates where entrepreneurship and technology intersect.
              We design solutions and turn them into businesses models.
            </p>
          </li>
          <li className="valuesItem">
            <span className="valuesItemSpan">02.</span>
            <p className="valuesItemText">
              Talent is what enable us to create great companies.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
