import React, { useState } from "react";
import logo from "../logo.svg";
import mobileMenuIcon from "../images/mobileMenuIcon.svg";
import closeIcon from "../images/cross.svg";
import mobLogoIcon from "../logoWhite.svg";
import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/Linkedin.svg";
import twitterIcon from "../images/twitter.svg";

export const MobileHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  return (
    <header className="mobHeader">
      <div className="container">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <button type="button" className="mobMenuBtn" onClick={onButtonClick}>
          <img src={mobileMenuIcon} alt="" width={34} height={34} />
        </button>
        <div className={`mobMenu ${isVisible ? "isVisible" : ""}`}>
          <button type="button" className="mobMenuCloseBtn">
            <img
              src={closeIcon}
              alt=""
              className="mobMenuCloseIcon"
              width={34}
              height={34}
              onClick={onButtonClick}
            />
          </button>
          <ul className="mobMenuList">
            <li className="mobMenuItem">
              <a href="#works" onClick={closeMenu}>
                Startups
              </a>
            </li>
            <li className="mobMenuItem">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li className="mobMenuItem">
              <a href="#hiring" onClick={closeMenu} className="mobMenuLink">
                Work with us!
              </a>
            </li>
          </ul>
          <ul className="mobMenuSocialList">
            <li className="mobMenuSocialItems">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                onClick={closeMenu}
              >
                <img
                  src={twitterIcon}
                  alt=""
                  className="mobMenuSocIcon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className="mobMenuSocialItems">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                onClick={closeMenu}
              >
                <img
                  src={linkedinIcon}
                  alt=""
                  className="mobMenuSocIcon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className="mobMenuSocialItems">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                onClick={closeMenu}
              >
                <img src={instagramIcon} alt="" width={40} height={40} />
              </a>
            </li>
          </ul>
          <img src={mobLogoIcon} alt="" className="mobLogoIcon" />
        </div>
      </div>
    </header>
  );
};
