import React from "react";
import { Link } from "react-router-dom";
import "../landing.css";
import "./funciones.css";

const Funciones = () => {
  return (
    <div
      className="banner-funciones"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="funcion">
        <Link className="landing-funciones-1" to={"/tiempos"}>
          <img src="https://i.ibb.co/rs9ZX4X/Vector.png" width={"50px"} />
          <p>Meditación</p>
        </Link>
      </div>
      <div className="funcion">
        <Link className="landing-funciones-1" to={"/journal"}>
          <img src="https://i.ibb.co/bNc8Csv/icon-pencil.png" width={"40px"} />
          <p>Journal</p>
        </Link>
      </div>
      <div className="funcion">
        <Link className="landing-funciones-1" to={"/objetivos"}>
          <img src="https://i.ibb.co/HFcg5xV/icon-list.png" width={"40px"} />
          <p>Objetivos</p>
        </Link>
      </div>
      <div className="funcion">
        <Link className="landing-funciones-1" to={"/pomodoro"}>
          <img src="https://i.ibb.co/rsxMFZy/icon-timer.png" width={"40px"} />
          <p>Estudio</p>
        </Link>
      </div>
    </div>
  );
};

export default Funciones;
