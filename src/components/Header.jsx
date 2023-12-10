import React from "react";
import MainLogo from "../logo.svg";

export const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <nav>
          <a href="/">
            <img src={MainLogo} alt="" />
          </a>

          <ul className="navList">
            <li className="navItem">
              <a href="#works" className="navLink">
                Startups
              </a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <button type="button" className="headerBtn"><a href="#hiring">Work with us!</a></button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
