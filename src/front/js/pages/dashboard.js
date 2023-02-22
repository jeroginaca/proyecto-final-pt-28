import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
import { Calendario } from "../component/Calendario.jsx";
import Navbar2 from "../component/2nd Navbar/Navbar2.jsx";
import BottomBar from "../component/Bottom Bar/BottomBar.jsx";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [store.token]);

  return (
    <div className="home-bg-image">
      <Navbar2 />
      <video
        className="dashboard-video"
        src={
          "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674819155/background_1_notebook_1_u8aprv.mp4"
        }
        autoPlay
        loop
        muted
      ></video>
      <video
        className="mobile-hide"
        src={
          "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674814653/background_2_mobile_2_d3xqnv.mp4"
        }
        autoPlay
        loop
        muted
      ></video>
      <video
        className="tablet-hide"
        src={
          "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674815180/background_1_tablet_xkvy8m.mp4"
        }
        autoPlay
        loop
        muted
      ></video>

      {/* {store.user_name ? (
        <>
          <div>
            <h1 className="title">
              Hola, <strong> {actions.capitalizeFirstLetter(store.user_name)}</strong>
            </h1>
          </div>
        </>
      ) : (
        <p className="hero-text">Bienvenidos!</p>
      )} */}
      <h1 className="title"><strong>Bienvenidos!</strong>
      </h1>
      <div className="home-grid">
        <div className="home-buttons-mobile">
          <Link to={"/tiempos"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/meditaciones_ahwvs3.png"
              className="home-button"
            />
          </Link>
          <Link to={"/appjournal"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/entradas_fmwso1.png"
              className="home-button"
            />
          </Link>
          <Link to={"/tareas"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/mis-objetivos_gnrjcl.png"
              className="home-button"
            />
          </Link>
          <Link to={"/pomodoro"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/zona-de-estudio_gxf0ea.png"
              className="home-button"
            />
          </Link>
        </div>
        <div>
          <p className="dashboard-text">¿Cómo te sientes hoy?</p>
          <Calendario />
        </div>
        <div className="home-buttons">
          <Link to={"/tiempos"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/meditaciones_ahwvs3.png"
              className="home-button"
            />
          </Link>
          <Link to={"/appjournal"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/entradas_fmwso1.png"
              className="home-button"
            />
          </Link>
          <Link to={"/tareas"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/mis-objetivos_gnrjcl.png"
              className="home-button"
            />
          </Link>
          <Link to={"/pomodoro"}>
            <img
              src="https://res.cloudinary.com/dng3kcxcr/image/upload/v1674851436/Mindful%20Me/zona-de-estudio_gxf0ea.png"
              className="home-button"
            />
          </Link>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
