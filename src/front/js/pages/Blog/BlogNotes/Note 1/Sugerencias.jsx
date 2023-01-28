import React from "react";
import "./note1.css";
import "./sugerencias.css";
import { Link } from "react-router-dom";
import BtnsSignupLogin from "../../../Landing/BTN-Sign-Log/BtnsSignupLogin.jsx";

const Sugerencias = () => {
  return (
    <>
      <div className="blog-sugerencias">
        <h2 className="blog-post-titulo-nota">Seguir Leyendo</h2>
        <div className="blog-sugerencia-container">
          <div className="blog-sugerencia-box">
            <div className="blog-sugerencias-img">
              <img src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674834112/Poses_de_Yoga_feafng.png" />
            </div>
            <h3>Otra Nota</h3>
            <div className="blog-sugerencias-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis accusamus ut quas reprehenderit ab quod!
              </p>
            </div>
            <Link to={"/note2"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
          <div className="blog-sugerencia-box">
            <div className="blog-sugerencias-img">
              <img src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674834112/Poses_de_Yoga_feafng.png" />
            </div>
            <h3>Otra Nota</h3>
            <div className="blog-sugerencias-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis accusamus ut quas reprehenderit ab quod!
              </p>
            </div>
            <Link to={"/note2"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
          <div className="blog-sugerencia-box">
            <div className="blog-sugerencias-img">
              <img src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674834112/Poses_de_Yoga_feafng.png" />
            </div>
            <h3>Otra Nota</h3>
            <div className="blog-sugerencias-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis accusamus ut quas reprehenderit ab quod!
              </p>
            </div>
            <Link to={"/note2"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </div>
        <BtnsSignupLogin />
      </div>
    </>
  );
};

export default Sugerencias;
