import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";
import Calendario from "../component/Calendario.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const meditar = {
    padding: "1rem 2.6rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "#7286E9",
    border: "none",
    color: "#FBF7F1",
  };

  return (
    <div className="text-center mt-5">
      <h1>Mindfull Me</h1>
      <p>
        <img src="https://i.ibb.co/v1f1GGr/Group-2.png" />
      </p>
      <Link to={"/tiempos"}>
        <button style={meditar}>
          <img src="https://i.ibb.co/rs9ZX4X/Vector.png" width="75%" />
        </button>
      </Link>
      <Link to={"/pomodoro"}>
        <button style={meditar}>
          <img src="https://i.ibb.co/rs9ZX4X/Vector.png" width="75%" />
        </button>
      </Link>
      <Link to={"/youtube"}>
        <button style={meditar}>
          <img src="https://i.ibb.co/rs9ZX4X/Vector.png" width="75%" />
        </button>
      </Link>

      <Calendario />

      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};
