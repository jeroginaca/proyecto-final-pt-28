import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import BtnsSignupLogin from "../BTN-Sign-Log/BtnsSignupLogin.jsx";
import "../landing.css";
import "./beneficios.css";

const Beneficios = () => {
  return (
    <div className="display">
      <div className="beneficios-container">
        <Fade bottom>
          <h2 className="meditacion-beneficios">
            Obten Beneficios <br /> Personales
          </h2>
          <p className="texto text-display">
            Mindful Me te ofrece una variedad de ejercicios y herramientas para
            ayudarte en tu práctica diaria. Podrás experimentar una mayor
            sensación de paz y bienestar, mejorar tu concentración, claridad
            mental y desarrollar habilidades para manejar el estrés de manera
            efectiva.
          </p>
          <img src="https://i.postimg.cc/HnwW15Yc/Cerebro.png" />

          <BtnsSignupLogin />
        </Fade>
      </div>
    </div>
  );
};
export default Beneficios;
