import React from "react";
import footerIcon from "../logo.svg";
import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/Linkedin.svg";
import twitterIcon from "../images/twitter.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerCopyWrap">
          <img src={footerIcon} alt="" />
          <p className="footerCopy">&copy; 2020 Startupz</p>
          <span>All rights reserved.</span>
        </div>
        <div className="footerCompanies">
          <h3 className="footerTitle">Companies</h3>
          <ul className="footerList">
            <li className="footerItem">
              <a
                href="https://tolq.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footerItemLink"
              >
                Tolq
              </a>
            </li>
            <li className="footerItem">
              <a
                href="https://legalsite.co/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footerItemLink"
              >
                LegalSite
              </a>
            </li>
            <li className="footerItem">
              <a
                href="https://codekeeper.co/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footerItemLink"
              >
                Codekeeper
              </a>
            </li>
            <li className="footerItem">
              <a
                href="https://feedbacklabs.org/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footerItemLink"
              >
                Feedback Labs
              </a>
            </li>
          </ul>
        </div>
        <div className="footerContact">
          <h3 className="footerTitle">Contact</h3>
          <p className="footerContactText">
            World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{" "}
            <br /> 2595 AM The Hague <br /> The Netherlands
          </p>
          <a href="#contact" className="footerContactLink">
            Send us an email
          </a>
        </div>
        <div className="footerSocial">
          <h3 className="footerTitle">Follow us</h3>
          <ul className="footerSocialList">
            <li className="footerSocialItems">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src={twitterIcon} alt="" />
              </a>
            </li>
            <li className="footerSocialItems">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </li>
            <li className="footerSocialItems">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src={instagramIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
