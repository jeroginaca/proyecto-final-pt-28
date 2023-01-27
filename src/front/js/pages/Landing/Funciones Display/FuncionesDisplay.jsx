import React from "react";

import "../landing.css";
import "./funcionesDisplay.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const FuncionesDisplay = () => {
  return (
    <div className="display">
      <div className="display-container">
        <Fade left>
          <div className="display-width">
            <img
              src="https://i.postimg.cc/28qtXm5v/Meditar.png"
              className="img-width "
            />
          </div>
        </Fade>
        <Fade right>
          <div className="display-width">
            <h2 className="motivate-titulo">Meditación</h2>
            <p className="text-display">
              Selecciona el tiempo que más te convenga en tu día a día y
              comienza a practicar la atención plena. Con la práctica regular,
              podrás experimentar una mayor sensación de paz y bienestar,
              mejorar tu concentración y claridad mental, y desarrollar
              habilidades para manejar el estrés de manera efectiva.
            </p>
            <Link to={"/tiempos"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
      </div>

      <div className="display-container">
        <Fade right>
          <div className="display-width-left-hide">
            <img
              src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
              className="img-width "
            />
          </div>
        </Fade>
        <Fade left>
          <div className="display-width">
            <h2 className="motivate-titulo">Escribe tu journal</h2>
            <p className="text-display">
              Con nuestra herramienta de diario, podrás llevar un registro de
              tus pensamientos, lo que te permitirá trabajar en ellos de manera
              más consciente y efectiva. Comienza a experimentar los beneficios
              de la atención plena en tu vida cotidiana.
            </p>
            <Link to={"/journal"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="display-width-left">
            <img
              src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
              className="img-width "
            />
          </div>
        </Fade>
      </div>

      <div className="display-container">
        <Fade left>
          <div className="display-width">
            <img
              src="https://i.postimg.cc/RZ7PJLdp/Objetivos.png"
              className="img-width "
            />
          </div>
        </Fade>
        <Fade right>
          <div className="display-width">
            <h2 className="motivate-titulo">Establece tus objetivos</h2>
            <p className="text-display">
              Establece tus objetivos y trabaja en ellos de manera consciente y
              efectiva. Utiliza nuestras herramientas y ejercicios para alcanzar
              tus metas y avanzar en tu vida. Comienza tu viaje hacia una vida
              más equilibrada y consciente.
            </p>
            <Link to={"/objetvicos"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
      </div>

      <div className="display-container">
        <Fade right>
          <div className="display-width-left-hide">
            <img
              src="https://i.postimg.cc/rySsRdWZ/Estudia3.png"
              className="img-width "
            />
          </div>
        </Fade>
        <Fade left>
          <div className="display-width">
            <h2 className="motivate-titulo">Programa tus tiempos de estudio</h2>
            <p className="text-display">
              Controla tus tiempos de estudio de manera sana y equilibrada con
              nuestra herramienta de reloj pomodoro. Establece tiempos de
              estudio y descanso para mantener el enfoque y evitar el agotamiento
              mental. Equilibra tu tiempo de estudio y libre.
            </p>
            <Link to={"/pomodoro"}>
              <button className="landing-button margin-top">Ver más</button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="display-width-left">
            <img
              src="https://i.postimg.cc/rySsRdWZ/Estudia3.png"
              className="img-width "
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FuncionesDisplay;
