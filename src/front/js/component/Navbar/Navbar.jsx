import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-container" onClick={toTheTop}>
        <div className="navbar-logo">Mindful Me</div>

        <ul className="links">
          <Link className="link" to={"/"}>
            <li className="linksitos">Home</li>
          </Link>
          <li className="linksitos">Funciones</li>
          <li className="linksitos">Nosotros</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
