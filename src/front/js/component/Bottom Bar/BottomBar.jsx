import React, { useState, useEffect, useContext } from "react";
import "./bottomBar.css";
import { Context } from "../../store/appContext";

import { Link, useNavigate } from "react-router-dom";

const BottomBar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="navbar-3">
      <div className="navbar-container-3">
        <ul className="links-3">
          {window.location.pathname === "/dashboard" ? (
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="linksitos-3 login-3 ">Home</li>
            </Link>
          ) : (
            <Link className="link-3 linksitos-3 " to={"/dashboard"}>
              Dashboard
            </Link>
          )}

          <Link className="link-3 linksitos-3 " to={"/blog"}>
            Blog
          </Link>

          {store.token ? (
            <li
              className="linksitos-3 "
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
            >
              Logout
            </li>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li className="linksitos-3 login-3 ">Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
