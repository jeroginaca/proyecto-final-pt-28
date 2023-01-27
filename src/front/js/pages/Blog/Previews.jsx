import React from "react";
import "./blog.css";
import "../Landing/landing.css";
import "../Landing/Funciones Display/funcionesDisplay.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Footer from "../../component/Footer/Footer.jsx";

const Preview = () => {
  return (
    <div className="blog-container">
      <div className="blog-grid">
        <Fade left>
          <div className="blog-width">
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674834112/Poses_de_Yoga_feafng.png"
              className="blog-img-width"
            />
          </div>
        </Fade>
        <Fade right>
          <div className="blog-width">
            <h2 className="motivate-titulo">Todas las poses de yoga</h2>
            <p className="text-display">
              Te mostramos todas las poses de yoga. Ya sea que eres principiante
              o experimentado, encontrarás una gran variedad de posturas para
              mejorar tu flexibilidad, fortalecer tu cuerpo y calmar tu mente.
              ¡No pierdas la oportunidad de aprender más sobre esta maravillosa
              práctica!
            </p>
            <Link to={"/blogyoga"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
      </div>

      <div className="display-container">
        <Fade right>
          <div className="blog-width-left-hide">
            <img
              src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
              className="blog-img-width"
            />
          </div>
        </Fade>
        <Fade left>
          <div className="blog-width">
            <h2 className="motivate-titulo">Escribe tu journal</h2>
            <p className="text-display">
              Con nuestra herramienta de diario, podrás llevar un registro de
              tus pensamientos, lo que te permitirá trabajar en ellos de manera
              más consciente y efectiva. Comienza a experimentar los beneficios
              de la atención plena en tu vida cotidiana.
            </p>
            <Link to={"/note1"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="blog-width-left">
            <img
              src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
              className="blog-img-width"
            />
          </div>
        </Fade>
      </div>

      <Footer />
    </div>
  );
};
export default Preview;
