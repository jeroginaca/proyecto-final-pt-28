import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";

import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Fade bottom>
        <h3>Explora nestras funciones</h3>
      </Fade>
      <Zoom cascade>
        <div className="banner-extra">
          <div className="extra">
            <Link className="extra-1" to={"/tiempos"}>
              <img src="https://i.ibb.co/rs9ZX4X/Vector.png" width={"50px"} />
              <p>Meditación</p>
            </Link>
          </div>
          <div className="extra">
            <Link className="extra-1" to={"/journal"}>
              <img
                src="https://i.ibb.co/bNc8Csv/icon-pencil.png"
                width={"40px"}
              />
              <p>Journal</p>
            </Link>
          </div>
          <div className="extra">
            <Link className="extra-1" to={"/objetivos"}>
              <img
                src="https://i.ibb.co/HFcg5xV/icon-list.png"
                width={"40px"}
              />
              <p>Objetivos</p>
            </Link>
          </div>
          <div className="extra">
            <Link className="extra-1" to={"/pomodoro"}>
              <img
                src="https://i.ibb.co/rsxMFZy/icon-timer.png"
                width={"40px"}
              />
              <p>Estudio</p>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Banner;
