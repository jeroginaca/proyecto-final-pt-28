import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import targetImageUrl from "../../img/target.png";
import editImageUrl from "../../img/edit.png";
import { Calendario } from "../component/Calendario.jsx";
import journalImageUrl from "../../img/journal.png";


// <img src="https://i.ibb.co/v1f1GGr/Group-2.png" /> <---- IMAGEN DEL CEREBRO

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

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
                <img src="https://i.ibb.co/rs9ZX4X/Vector.png" />
              </button>

              <button className="home-buttons" onClick={() => {
                navigate("/tiempos")
              }}>
                <img src={journalImageUrl} />
              </button>


              <button className="home-buttons" onClick={() => {
                navigate("/appjournal")
              }}>
                <img src="https://i.ibb.co/rs9ZX4X/Vector.png" />
              </button>



              <button className="home-buttons" onClick={() => {
                navigate("/tareas")
              }}>
                <img src={targetImageUrl} />
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );

};
