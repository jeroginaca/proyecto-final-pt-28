import React from "react";
import Navbar2 from "../../../../component/2nd Navbar/Navbar2.jsx";
import Footer from "../../../../component/Footer/Footer.jsx";
import "./note1.css";
import Note2Entrada from "./Note2Entrada.jsx";
import Sugerencias from "./Sugerencias.jsx";

const Note2 = () => {
  return (
    <>
      <Navbar2 />

      <Note2Entrada />

      <Sugerencias />

      <Footer />
    </>
  );
};

export default Note2;
