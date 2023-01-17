import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ListaDeAudios from "../../component/ListaDeAudios.jsx";

const SeleccionDeAudios = () => {
  const params = useParams();

  return (
    <div className="meditacion-background">
      <h3 className="meditacion-titulo">Selecciona tu Audio</h3>
      <div className="meditacion-botones">
        <ListaDeAudios id={params.id} />
      </div>
    </div>
  );
};

export default SeleccionDeAudios;
