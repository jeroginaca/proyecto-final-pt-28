import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { Context } from "../../store/appContext";

import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isScrolling }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

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
          <li className="linksitos">
            {store.token ? (
              <button
                className="btn btn-danger"
                onClick={() => {
                  actions.logout();
                  navigate("/dashboard");
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <span className="btn btn-success">Login</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
