import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../landing.css";
import "./btns-sign-log.css";

const BtnsSignupLogin = () => {
  return (
    <div className="botones-sign-log">
      <Link to={"/signup"}>
        <button className="landing-button">Registrarte Gratis</button>
      </Link>
      <Link to={"/login"}>
        <button className="landing-button-2">Iniciar Sesión</button>
      </Link>
    </div>
  );
};
export default BtnsSignupLogin;
