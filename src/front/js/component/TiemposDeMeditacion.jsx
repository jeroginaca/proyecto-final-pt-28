import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TiemposDeMeditacion = () => {
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
      <h3 className="meditacion-titulo">¿Cuánto vas a meditar hoy?</h3>
      <div className="meditacion-botones">
        {categories.map((element, index) => {
          return (
            <Link to={`/audios/${element.id}`} key={index}>
              <button className="meditacion-boton extra-estilo-boton">{element.name}</button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default TiemposDeMeditacion;
