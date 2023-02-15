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
            <Link to={"/blog/yoga"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
      </div>

      <div className="blog-grid">
        <Fade right>
          <div className="blog-width-left-hide">
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674891747/Nota1_oeqmjf.png"
              className="blog-img-width"
            />
          </div>
        </Fade>

        <Fade left>
          <div className="blog-width">
            <h2 className="motivate-titulo">Introdúcete en la Meditación</h2>
            <p className="text-display">
              En un mundo cada vez más acelerado y estresante, meditar se ha
              vuelto más importante que nunca. La meditación es una técnica
              antigua que ha sido utilizada durante siglos para ayudar a las
              personas a relajarse, reducir el estrés y mejorar la salud mental
              y física.
            </p>
            <Link to={"/blog/note1"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>

        <Fade right>
          <div className="blog-width-left">
            <img
              src="https://res.cloudinary.com/dgn3hxolh/image/upload/v1674891747/Nota1_oeqmjf.png"
              className="blog-img-width"
            />
          </div>
        </Fade>
      </div>

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
            <h2 className="motivate-titulo">
              Desarrolla la constancia con técnicas orientales
            </h2>
            <p className="text-display">
              ¿Tienes dificultades para mantenerte enfocado y motivado en tareas
              a largo plazo? Descubre cómo la meditación y el yoga, técnicas
              orientales antiguas, pueden ayudarte a desarrollar la constancia y
              mejorar tu vida diaria. Aprende cómo estas prácticas pueden
              ayudarte a concentrarte y reducir el estrés y la ansiedad.
            </p>
            <Link to={"/blog/note2"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
      </div>

      <Footer />
    </div>
  );
};
export default Preview;
