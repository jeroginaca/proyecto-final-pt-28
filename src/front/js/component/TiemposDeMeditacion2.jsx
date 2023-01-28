import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tiemposdemeditacion2.css";

const TiemposDeMeditacion2 = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/recibir_meditacion")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <>
      <div className="meditacion-en-landing">
        <div className="meditacion-en-landing-container">
          <h3 className="meditacion-titulo">¿Cuánto vas a meditar hoy?</h3>
          <div className="meditacion-en-landing-botones">
            <div className="meditacion-landing-botones">
              {categories.map((element, index) => {
                return (
                  <Link to={`/audios/${element.id}`} key={index}>
                    <button className="meditacion-landing-boton extra-landing-estilo-boton">
                      {element.name}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiemposDeMeditacion2;
