import React from "react";
import closeIcon from "../images/x_svg.svg";
import thumbLeft from "../images/Thumb.svg";
import thumbRight from "../images/ThumbRight.svg";
import badge from "../images/badge.svg";

export const Solutions = () => {
  return (
    <section className="solutions">
      <div className="container">
        <div className="chatWrap">
          <p className="chatText">
            Hi! I am Ben, your virtual assistant. <br />
            How can I make your day better?
          </p>
          <img src={closeIcon} alt="" />
        </div>
        <div className="solutionContentWrap">
          <div className="titleIconsWrap">
            <img src={thumbLeft} alt="thumbUp" />
            <h2 className="solutionsTitle">We love solving problems!</h2>
            <img src={thumbRight} alt="thumbUp" />
          </div>
          <img src={badge} alt="badge" className="solutionBadge" />
        </div>
      </div>
    </section>
  );
};
