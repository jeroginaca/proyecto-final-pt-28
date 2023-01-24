import React from "react";

import "../landing.css";
import "./tachado.css";

const TextoTachado = () => {
  return (
    <div className="tachado-container">
      <p className="tachado-texto">
        Clickea meditación, <br />
        <span>
          decinos para que queres meditar, responde otra pregunta, ahora
          selecciona entre estas opciones
        </span>{" "}
        <br />y comenza a meditar.
      </p>
    </div>
  );
};

export default TextoTachado;
