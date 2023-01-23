import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./motivate.css";

const Motivate = () => {
  return (
    <div className="display">
      <div className="display-container">
        <div className="display-width">
          <img
            src="https://i.postimg.cc/fbVHLQ3Z/Motivate-2.png"
            className="img-width"
          />
        </div>
        <div className="display-width">
          <h2 className="motivate-titulo">Motivate</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button className="landing-button se-constante">Empeza Ahora!</button>
        </div>
      </div>

      <div className="display-container">
        <div className="display-width-left-hide">
          <img
            src="https://i.postimg.cc/qBw29ZRG/muchachitos.png"
            className="img-width"
          />
        </div>
        <div className="display-width">
          <h2 className="motivate-titulo">Se Constante</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button className="landing-button">Empeza Ahora!</button>
        </div>
        <div className="display-width-left se-constante">
          <img
            src="https://i.postimg.cc/qBw29ZRG/muchachitos.png"
            className="img-width"
          />
        </div>
      </div>
    </div>
  );
};

export default Motivate;
