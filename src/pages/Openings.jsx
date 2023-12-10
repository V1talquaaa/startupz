import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'

export const Openings = () => {
  return (
    <section className="openings">
      <div className="container">
        <Link to="/" className="homeLink"><img src={logo} alt="" /></Link>
            <div className="tableHead">
                <h2>Position</h2>
                <h2>Stack</h2>
                <h2>Location</h2>
            </div>
            <div className="tableBody">
                <a href="/" className="tableBodyLink">Frondend Developer</a>
                <p>HTML, CSS, SASS, JS, REACT, NODE</p>
                <p>Poland</p>
            </div>
            <div className="tableBody">
            <a href="/" className="tableBodyLink">Frondend Developer</a>
                <p>HTML, CSS, SASS, JS, REACT, NODE</p>
                <p>Poland</p>
            </div>
            <div className="tableBody">
            <a href="/" className="tableBodyLink">Frondend Developer</a>
                <p>HTML, CSS, SASS, JS, REACT, NODE</p>
                <p>Poland</p>
            </div>
            <div className="tableBody">
            <a href="/" className="tableBodyLink">Frondend Developer</a>
                <p>HTML, CSS, SASS, JS, REACT, NODE</p>
                <p>Poland</p>
            </div>
            <div className="tableBody">
            <a href="/" className="tableBodyLink">Frondend Developer</a>
                <p>HTML, CSS, SASS, JS, REACT, NODE</p>
                <p>Poland</p>
            </div>
      </div>
    </section>
  );
};
