import React from "react";
import leftThumb from "../images/Thumb.svg";
import rightThumb from "../images/ThumbRight.svg";

export const Startups = () => {
  return (
    <section className="startups">
      <div className="container">
        <div className="afterCards" id="startups">
          <img src={leftThumb} alt="" />
          <p className="afterCardsText">
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </p>
          <img src={rightThumb} alt="" />
        </div>
      </div>
    </section>
  );
};
