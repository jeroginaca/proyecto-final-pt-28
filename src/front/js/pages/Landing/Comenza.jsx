import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import TiemposDeMeditacion from "../../component/TiemposDeMeditacion.jsx";
import BtnsSignupLogin from "./BTN-Sign-Log/BtnsSignupLogin.jsx";
import "./landing.css";

const Comenza = () => {
  return (
    <div className="display">
      <div className="display-container">
        <Fade left>
          <div className="display-width">
            <video
              className="video-meditando"
              src={
                "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674374675/Meditando_o4t4gl.mp4"
              }
              autoPlay
              loop
              muted
            ></video>
          </div>
        </Fade>
        <Fade right>
          <div className="display-width">
            <h2 className="motivate-titulo">
              Comenza hoy con <br /> Mindful Me
            </h2>
            <p className="text-display">
              Con nuestra app Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Assumenda esse fuga earum illum, illo repellendus totam
              tempore non, molestias est dolore quo id tenetur ad quod iste hic.
              Repellendus, nobis?
            </p>

            <BtnsSignupLogin />
          </div>
        </Fade>
      </div>
      <div className="display-container">
        <TiemposDeMeditacion />
        <Fade right>
          <div
            className="display-width-left-hide"
            style={{ margin: "3rem 0 0 0" }}
          >
            <img
              src="https://i.ibb.co/wK5R5z6/personajes-en-el-bosque-1.png"
              className="img-width-banner"
            />
          </div>
        </Fade>
        <Fade left>
          <div className="display-width" style={{ margin: "5rem 0 3rem 0" }}>
            <h2 className="motivate-titulo">Se parte de nuestra Comunidad</h2>
            <p className="text-display">
              Motivate a ser Mindfulnes y se consiente, la constancia es buena.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              porro aliquam, possimus ea necessitatibus ipsam!
            </p>
            <button className="landing-button margin-top">Unirme</button>
          </div>
        </Fade>
        <Fade right>
          <div
            className="display-width-left"
            style={{ margin: "5rem 0 3rem 0" }}
          >
            <img
              src="https://i.ibb.co/wK5R5z6/personajes-en-el-bosque-1.png"
              className="img-width-banner"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Comenza;
