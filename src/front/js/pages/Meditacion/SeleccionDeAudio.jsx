import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ListaDeAudios from "../../component/ListaDeAudios.jsx";

const SeleccionDeAudios = () => {
  const buttons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
  };

  const text = {
    textAlign: "center",
    color: "#754942",
    textDecoration: "none",
  };

  return (
    <div style={{ backgroundColor: "#EDDCC3" }}>
      <h3 style={text}>Selecciona tu Audio</h3>
      <div className="buttons" style={buttons}>
        <ListaDeAudios />
        <Link style={text} to={"/tiempos"}>
          <p>Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default SeleccionDeAudios;
