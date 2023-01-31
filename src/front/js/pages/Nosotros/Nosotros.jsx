import React, { useState, useEffect } from "react";

import "../Blog/blog.css";
import "../Landing/landing.css";
import "../Landing/Funciones Display/funcionesDisplay.css";

import NavbarBlog from "../../component/Navbar/NavbarBlog.jsx";
import Carrousel from "../Landing/Testimonios/Carrousel.jsx";
import HeroComent from "./HeroComent.jsx";
import Beneficios from "../Landing/Beneficios/Beneficios.jsx";
import Banner from "../Landing/Banner/Banner.jsx";
import Footer from "../../component/Footer/Footer.jsx";

const Nosotros = () => {
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
      <NavbarBlog isScrolling={scroll} />

      <HeroComent />

      <Carrousel />

      <Beneficios />

      <Banner />

      <Footer />
    </>
  );
};

export default Nosotros;
