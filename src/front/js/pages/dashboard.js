import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
import { Calendario } from "../component/Calendario.jsx";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [store.token]);

  // useEffect(() => {
  //   if (!store.token) {
  //     navigate("/")
  //   }
  // }, [store.token])

  return (
    <div className="home-bg-image">
      <h1 className="title">Mindful Me</h1>

      <div className="home-grid">
        <div className="home-buttons-mobile">
          <Link to={"/tiempos"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674747833/funciones/Group_36_kuoff5.png"
              className="home-button"
            />
          </Link>
          <Link to={"/appjournal"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674747833/funciones/Group_30_yvkcru.png"
              className="home-button"
            />
          </Link>
          <Link to={"/tareas"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674747833/funciones/Group_34_xfutj7.png"
              className="home-button"
            />
          </Link>
          <Link to={"/pomodoro"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674748871/funciones/Group_40_a77kdt.png"
              className="home-button"
            />
          </Link>
        </div>
        <Calendario />
        <div className="home-buttons">
          <Link to={"/tiempos"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674747833/funciones/Group_36_kuoff5.png"
              className="home-button"
            />
          </Link>
          <Link to={"/appjournal"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674747833/funciones/Group_30_yvkcru.png"
              className="home-button"
            />
          </Link>
          <Link to={"/tareas"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674747833/funciones/Group_34_xfutj7.png"
              className="home-button"
            />
          </Link>
          <Link to={"/pomodoro"}>
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674748871/funciones/Group_40_a77kdt.png"
              className="home-button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
