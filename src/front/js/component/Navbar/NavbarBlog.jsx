import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { Context } from "../../store/appContext";

import { Link, useNavigate } from "react-router-dom";

const NavbarBlog = ({ isScrolling }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-container" onClick={toTheTop}>
        <div
          className="navbar-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          Mindful Me
        </div>

        <ul className="links">
          <Link
            className={`link linksitos ${
              isScrolling > 20 ? "scroleando" : null
            }`}
            to={"/"}
          >
            Home
          </Link>

          {store.token ? (
            <li
              className={`link linksitos ${
                isScrolling > 20 ? "scroleando" : null
              }`}
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
            >
              Logout
            </li>
          ) : (
            <li
              className={`link linksitos ${
                isScrolling > 20 ? "scroleando" : null
              }`}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarBlog;
