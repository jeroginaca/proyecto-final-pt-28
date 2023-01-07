import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

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
