import React, { useState, useEffect, useContext } from "react";
import "./navbar2.css";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";

import { Link } from "react-router-dom";
import { BotonVolver } from "../BotonVolver.jsx";

const NavbarVolver = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="navbar-2">
      <div className="navbar-container-2">
        <Link className="link-2" to={"/"}>
          <button
            className="navbar-logo-2 linksitos-2 volver-button "
            onClick={() => navigate(-1)}
          >
            <RxDoubleArrowLeft style={{ marginRight: "1rem" }} /> <p> Volver</p>
          </button>
        </Link>

        <ul className="links-2">
          <Link className="link-2 linksitos-2 hide" to={"/dashboard"}>
            Dashboard
          </Link>
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

export default NavbarVolver;
