import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TiemposDeMeditacion from "../../component/TiemposDeMeditacion.jsx";

const Tiempos = () => {
  return (
    <div className="meditacion-background">
      <TiemposDeMeditacion />
    </div>
  );
};

export default Tiempos;
