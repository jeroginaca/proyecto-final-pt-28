import React, {useContext} from "react";
import Navbar2 from "../../../../component/2nd Navbar/Navbar2.jsx";
import Footer from "../../../../component/Footer/Footer.jsx";
import "./note1.css";
import Note2Entrada from "./Note2Entrada.jsx";
import Sugerencias from "./Sugerencias.jsx";
import { useNavigate } from "react-router-dom";

import { Context } from "../../../../store/appContext.js";

const Note2 = () => {
  
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar2 isScrolling={scroll} />

      <Note2Entrada />

      <Sugerencias />

      <Footer />
    </>
  );
};

export default Note2;
