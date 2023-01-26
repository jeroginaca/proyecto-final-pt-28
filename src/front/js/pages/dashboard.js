import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
import { Calendario } from "../component/Calendario.jsx";


// <img src="https://i.ibb.co/v1f1GGr/Group-2.png" /> <---- IMAGEN DEL CEREBRO

export const Dashboard = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/")
    }
  }, [store.token])

  // useEffect(() => {
  //   if (!store.token) {
  //     navigate("/")
  //   }
  // }, [store.token])

  return (
    <div className="home-bg-image text-center pt-5">

      <h1 className="title">Mindful Me</h1>

      <div className="container my-5">
        <div className="row">
          <div className="col my-2">
            <div className="d-flex justify-content-center">
              <Calendario />
            </div>
          </div>

          <div className="col my-2">
            <div className="buttons-container">

              <button className="home-buttons" onClick={() => {
                navigate("/tiempos")
              }}>
                <img src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674671803/Vector_jkhjri.png" width={"50px"} />
              </button>

              <button className="home-buttons" onClick={() => {
                navigate("/appjournal")
              }}>
                <img src="https://i.ibb.co/bNc8Csv/icon-pencil.png" width={"40px"} />
              </button>


              <button className="home-buttons" onClick={() => {
                navigate("/tareas")
              }}>
                <img src="https://i.ibb.co/HFcg5xV/icon-list.png" width={"40px"} />
              </button>



              <button className="home-buttons" onClick={() => {
                navigate("/pomodoro")
              }}>
                <img src="https://i.ibb.co/rsxMFZy/icon-timer.png" width={"40px"} />
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );

};
