import React from "react";

import "../landing.css";
import "./funcionesDisplay.css";

const FuncionesDisplay = () => {
  return (
    <div className="display">
      <div className="display-container">
        <div className="display-width">
          <img
            src="https://i.postimg.cc/28qtXm5v/Meditar.png"
            className="img-width"
          />
        </div>
        <div className="display-width">
          <h2 className="motivate-titulo">Medita</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button className="landing-button">Ver Más</button>
        </div>
      </div>

      <div className="display-container">
        <div className="display-width-left-hide">
          <img
            src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
            className="img-width"
          />
        </div>
        <div className="display-width">
          <h2 className="motivate-titulo">Escribí tu Journal</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button className="landing-button">Ver Más</button>
        </div>
        <div className="display-width-left">
          <img
            src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
            className="img-width"
          />
        </div>
      </div>

      <div className="display-container">
        <div className="display-width">
          <img
            src="https://i.postimg.cc/RZ7PJLdp/Objetivos.png"
            className="img-width"
          />
        </div>
        <div className="display-width">
          <h2 className="motivate-titulo">Establece tus Objetivos</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button className="landing-button">Ver Más</button>
        </div>
      </div>

      <div className="display-container">
        <div className="display-width-left-hide">
          <img
            src="https://i.postimg.cc/rySsRdWZ/Estudia3.png"
            className="img-width"
          />
        </div>
        <div className="display-width">
          <h2 className="motivate-titulo">Programa tus tiempos de estudio</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button className="landing-button">Ver Más</button>
        </div>
        <div className="display-width-left">
          <img
            src="https://i.postimg.cc/rySsRdWZ/Estudia3.png"
            className="img-width"
          />
        </div>
      </div>
    </div>
  );
};

export default FuncionesDisplay;
