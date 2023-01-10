import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Calendario from "../component/Calendario.jsx";

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
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>

      <button onClick={handleClick}>Login</button>
      <button onClick={() => actions.logout()}>Logout</button>
      {
        !store.token ? "No estoy logeado" : "estoy logeado"
      }
      <h1>Mindfull Me</h1>
      <p>
        <img src="https://i.ibb.co/v1f1GGr/Group-2.png" />
      </p>
      <Link to={"/tiempos"}>
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
