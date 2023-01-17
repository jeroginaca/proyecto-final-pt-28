import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Calendario from "../component/Calendario.jsx";
import targetImageUrl from "../../img/target.png";
import editImageUrl from "../../img/edit.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const login = await actions.login(email, password)
    console.log(login)
    if (login) {
      navigate("/demo")
    };
  }
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
      <h1>Mindful Me</h1>
      <p>
        <img src="https://i.ibb.co/v1f1GGr/Group-2.png" />
      </p>
      <Link to={"/tiempos"}>
        <button style={meditar}>
          <img src="https://i.ibb.co/rs9ZX4X/Vector.png" width="75%" />
        </button>
      </Link>

      <Link to={"/tareas"}>
        <button style={meditar}>
          <img src={targetImageUrl} width="75%" />
        </button>
      </Link>

      <Link to={"/journal"}>
        <button style={meditar}>
          <img src={editImageUrl} width="75%" />
        </button>
      </Link>

      <Link to={"/appjournal"}>
        <button style={meditar}>
          <img src={editImageUrl} width="75%" />
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
