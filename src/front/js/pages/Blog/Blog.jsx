import React, { useState, useEffect } from "react";

import "./blog.css";
import "../Landing/landing.css";
import "../Landing/Funciones Display/funcionesDisplay.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Preview from "./Previews.jsx";
import NavbarBlog from "../../component/Navbar/NavbarBlog.jsx";
import HeroBlog from "./HeroBlog/HeroBlog.jsx";

const Blog = () => {
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

      <Preview />
    </>
  );
};

export default Blog;
