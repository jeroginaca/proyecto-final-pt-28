import React from "react";

import "../landing.css";
import "./tachado.css";

const TextoTachado = () => {
  return (
    <div className="tachado-container">
      <p className="tachado-texto">
        Clickea meditación, <br />
        <span>
          dinos para qué quieres meditar, responde otra pregunta, ahora
          selecciona entre estas opciones
        </span>{" "}
        <br />y comienza a meditar.
      </p>
    </div>
  );
};

export default TextoTachado;
