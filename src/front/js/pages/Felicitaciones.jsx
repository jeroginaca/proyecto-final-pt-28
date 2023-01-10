import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FraseInspiradora from "../component/FraseInspiradora.jsx";

const Felicitaciones = () => {
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
      <h3 style={text}>¡Muy Bien!</h3>

      <FraseInspiradora />
      <Link style={text} to={"/"}>
        <p>Continuar</p>
      </Link>
    </div>
  );
};

export default Felicitaciones;
