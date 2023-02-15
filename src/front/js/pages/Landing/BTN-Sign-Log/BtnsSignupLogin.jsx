import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../landing.css";
import "./btns-sign-log.css";
import { Context } from "../../../store/appContext.js";

const BtnsSignupLogin = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {!store.token ? (
        <div className="botones-sign-log">
          <Link to={"/signup"}>
            <button className="landing-button">Registrarte Gratis</button>
          </Link>
          <Link to={"/login"}>
            <button className="landing-button-2">Iniciar Sesión</button>
          </Link>
        </div>
      ) : (
        <div className="botones-sign-log">
          <Link to={"/dashboard"}>
            <button className="landing-button">Ir al Dashboard</button>
          </Link>
          <Link to={"/tiempos"}>
            <button className="landing-button-2">Medita</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default BtnsSignupLogin;
