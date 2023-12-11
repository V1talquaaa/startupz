import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="heroTitle">
          We Create <br /> Startups.
        </h1>
        <p className="heroText">
          We are startup studio that develops and launches new companies.
        </p>

        <a href="#works">
          <button type="button" className="heroBtn">
            See our works
          </button>
        </a>
      </div>
    </section>
  );
};
