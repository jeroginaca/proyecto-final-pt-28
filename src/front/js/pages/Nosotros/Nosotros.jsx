import React, { useState, useEffect } from "react";

import "../Blog/blog.css";
import "../Landing/landing.css";
import "../Landing/Funciones Display/funcionesDisplay.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

import HeroBlog from "../Blog/HeroBlog/HeroBlog.jsx";
import NavbarBlog from "../../component/Navbar/NavbarBlog.jsx";
import Preview from "../Blog/Previews.jsx";
import Carrousel from "../Landing/Testimonios/Carrousel.jsx";

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

      <HeroBlog />

      <Carrousel />
    </>
  );
};

export default Nosotros;
