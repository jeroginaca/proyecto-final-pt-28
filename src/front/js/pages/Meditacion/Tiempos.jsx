import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarVolver from "../../component/2nd Navbar/NavbarVolver.jsx";
import BottomBar from "../../component/Bottom Bar/BottomBar.jsx";
import TiemposDeMeditacion from "../../component/TiemposDeMeditacion.jsx";

const Tiempos = () => {
  return (
    <div className="meditacion-background">
      <>
        <NavbarVolver />
        <TiemposDeMeditacion />
        <BottomBar />
      </>
    </div>
  );
};

export default Tiempos;
