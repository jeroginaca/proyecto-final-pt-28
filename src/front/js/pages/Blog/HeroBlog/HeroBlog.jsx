import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../../store/appContext.js";

import "../../Landing/landing.css";
import "./heroblog.css";

const HeroBlog = () => {
  return (
    <div className="heroBlog-container">
      {/*<video
        className="video"
        src={
          "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674372679/background_1-1_skikz6.mp4"
        }
        autoPlay
        loop
        muted
      ></video>*/}
      <div className="heroBlog-container-text">
        <h1 className="heroBlog-title">Mindful Me</h1>

        <p className="heroBlog-text">Bienvenido a nuestro Blog</p>
      </div>
    </div>
  );
};

export default HeroBlog;
