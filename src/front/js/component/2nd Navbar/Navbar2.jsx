import React, { useState, useEffect, useContext } from "react";
import "./navbar2.css";
import { Context } from "../../store/appContext";

import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="navbar-2">
      <div className="navbar-container-2">
        <Link className="link-2" to={"/"}>
          <div className="navbar-logo-2 linksitos-2">Mindful Me</div>
        </Link>

        <ul className="links-2">
          <Link className="link-2 linksitos-2 hide" to={"/blog"}>
            Blog
          </Link>

          {store.token ? (
            <li
              className="linksitos-2 hide"
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
            >
              Logout
            </li>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li className="linksitos-2 login-2 hide">Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
