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
          <Link className="link linksitos" to={"/blog"}>
            Blog
          </Link>
          <Link className="link linksitos" to={"/nosotros"}>
            Quiénes somos
          </Link>

          {store.token ? (
            <li
              className="linksitos"
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
            >
              Logout
            </li>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li className="linksitos login">Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
