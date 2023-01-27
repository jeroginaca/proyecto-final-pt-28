import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

import "./motivate.css";

const Motivate = () => {
  return (
    <div className="display">
      <div className="display-container">
        <Fade left>
          <div className="display-width">
            <img
              src="https://i.postimg.cc/fbVHLQ3Z/Motivate-2.png"
              className="img-width"
            />
          </div>
        </Fade>

        <Fade right>
          <div className="display-width">
            <h2 className="motivate-titulo">Motívate</h2>
            <p className="text-display">
              La vida moderna puede ser estresante y caótica, pero la práctica
              diaria de meditaciones te ayudará a encontrar la calma en medio de
              la tempestad. Comienza tu viaje hacia una vida más equilibrada y
              consciente, te sentirás más relajado, enfocado y en paz contigo
              mismo.
            </p>
          </div>
        </Fade>
      </div>

      <div className="display-container">
        <div className="display-width-left-hide">
          <img
            src="https://i.postimg.cc/qBw29ZRG/muchachitos.png"
            className="img-width"
          />
        </div>
        <Fade left>
          <div className="display-width">
            <h2 className="motivate-titulo">Sé constante</h2>
            <p className="text-display">
              Al meditar regularmente, aprenderás a manejar el estrés
              y aumentarás tu concentración y claridad mental. No te desanimes si
              al principio te cuesta mantener la concentración, con la práctica
              y la constancia lograrás mejorar y verás los beneficios en tu vida
              cotidiana.
            </p>
            <Link to={"/tiempos"}>
              <button className="landing-button margin-top">
                ¡Empieza ahora!
              </button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="display-width-left se-constante">
            <img
              src="https://i.postimg.cc/qBw29ZRG/muchachitos.png"
              className="img-width"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Motivate;
