import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../../store/appContext.js";

import "../../Landing/landing.css";
import "./heroblog.css";

const HeroBlog = () => {
  return (
    <div className="heroBlog-container">

      <div className="heroBlog-container-text">
        <h1 className="heroBlog-title">Mindful Me</h1>

        <p className="heroBlog-text">Descubre nuestro blog</p>
      </div>
    </div>
  );
};

export default HeroBlog;
