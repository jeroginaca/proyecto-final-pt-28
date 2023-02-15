import React, { useContext, useEffect, useState } from "react";
import YogaDetails from "./YogaDetails.jsx";
import { Link } from "react-router-dom";
import "./yoga.css";
import NavbarBlog from "../../../component/Navbar/NavbarBlog.jsx";

const Yoga = () => {
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
      <div className="yoga">
        <div className="yoga-container">
          <h1>Poses de Yoga</h1>

          <YogaDetails />
          <Link to={"/blog"} style={{ textDecoration: "none" }}>
            <p>Volver</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Yoga;
