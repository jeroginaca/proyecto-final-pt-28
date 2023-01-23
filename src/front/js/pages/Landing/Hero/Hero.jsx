import React, { useState, useEffect } from "react";
import BtnsSignupLogin from "../BTN-Sign-Log/BtnsSignupLogin.jsx";

import "../landing.css";
import "./hero.css";

const Hero = () => {
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

        <p className="hero-text">Medita con nosotros en un 1, 2, 3</p>

        <BtnsSignupLogin />
      </div>
    </div>
  );
};

export default Hero;
