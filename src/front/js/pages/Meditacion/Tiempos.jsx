import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tiempos = () => {
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
    <div className="meditacion-background">
      <h3 className="meditacion-titulo">¿Cuánto vas a meditar hoy?</h3>
      <div className="meditacion-botones">
        {categories.map((element, index) => {
          return (
            <Link to={`/audios/${element.id}`} key={index}>
              <button className="meditacion-boton">{element.name}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tiempos;