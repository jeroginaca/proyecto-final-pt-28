import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FraseInspiradora from "../../component/FraseInspiradora.jsx";

const Felicitaciones = () => {
  return (
    <div className="meditacion-background">
      <h3 className="meditacion-titulo">¡Muy Bien!</h3>

      <FraseInspiradora />
      <Link className="meditacion-titulo" to={"/"}>
        <p className="siguiente">Continuar</p>
      </Link>
    </div>
  );
};

export default Felicitaciones;
