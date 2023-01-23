import React, { useState, useEffect } from "react";
import "../../../styles/index.css";
import "./landing.css";
import Navbar from "../../component/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer.jsx";
import Carrousel from "./Testimonios/Carrousel.jsx";
import Hero from "./Hero/Hero.jsx";
import Funciones from "./Funciones/Funciones.jsx";

import FuncionesDisplay from "./Funciones Display/FuncionesDisplay.jsx";

import Comenza from "./Comenza.jsx";
import TextoTachado from "./Texto Tachado/TextoTachado.jsx";
import Motivate from "./Motivate/Motivate.jsx";
import Beneficios from "./Beneficios/Beneficios.jsx";
import Banner from "./Banner/Banner.jsx";

const Landing = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <Navbar isScrolling={scroll} />

      <Hero />

      <Funciones />

      <TextoTachado />

      <Motivate />

      <Beneficios />

      <Banner />

      <FuncionesDisplay />

      <Carrousel />

      <Comenza />

      <Footer />
    </>
  );
};

export default Landing;
