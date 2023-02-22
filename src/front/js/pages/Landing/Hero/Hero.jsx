import React, { useState, useEffect, useContext } from "react";
import BtnsSignupLogin from "../BTN-Sign-Log/BtnsSignupLogin.jsx";
import { Context } from "../../../store/appContext.js";

import "../landing.css";
import "./hero.css";

const Hero = () => {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   if (store.token) {
  //     actions.getUser();
  //   }
  // }, []);

  return (
    <div className="hero-container">
      <video
        className="video"
        src={
          "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674372679/background_1-1_skikz6.mp4"
        }
        autoPlay
        loop
        muted
      ></video>
      <div className="hero-container-text">
        <h1 className="hero-title">Mindful Me</h1>
        {/* {store.token && store.user_name ? (
          <p className="hero-text">
            Hola{" "}
            <strong> {actions.capitalizeFirstLetter(store.user_name)}</strong>,{" "}
            <br className="br-hide" />
            ¿empezamos a meditar?
          </p>
        ) : (
          <p className="hero-text">Medita con nosotros en 3, 2, 1</p>
        )} */}

        <p className="hero-text">Medita con nosotros en 3, 2, 1</p>
        <BtnsSignupLogin />
      </div>
    </div>
  );
};

export default Hero;
