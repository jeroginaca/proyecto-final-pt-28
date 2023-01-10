import React from "react";
import { Link } from "react-router-dom";

const Tiempos = () => {
  const buttons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
  };

  const button = {
    padding: "0.7rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "#754942",
    border: "none",
    color: "#FBF7F1",
  };

  const text = {
    textAlign: "center",
    color: "#754942",
    textDecoration: "none",
  };

  return (
    <div style={{ backgroundColor: "#EDDCC3" }}>
      <h3 style={text}>¿Cuánto vas a meditar hoy?</h3>
      <div className="buttons" style={buttons}>
        <Link to={"/audios"}>
          <button style={button}>5min</button>
        </Link>
        <button style={button}>10min</button>
        <button style={button}>15min</button>
        <button style={button}>20min</button>
        <button style={button}>25min</button>
        <button style={button}>30min</button>
      </div>
      <Link style={text} to={"/"}>
        <p>Volver</p>
      </Link>
    </div>
  );
};

export default Tiempos;
