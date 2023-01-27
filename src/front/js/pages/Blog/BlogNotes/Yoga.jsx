import React, { useContext, useEffect } from "react";
import YogaDetails from "./YogaDetails.jsx";
import { Link } from "react-router-dom";
import "./yoga.css";

const Yoga = () => {
  const text = {};
  return (
    <div className="yoga">
      <div className="yoga-container">
        <h1>Poses de Yoga</h1>
        <Link to={"/blog"} style={{ textDecoration: "none" }}>
          <p>Volver</p>
        </Link>
        <YogaDetails />
        <Link to={"/blog"} style={{ textDecoration: "none" }}>
          <p>Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default Yoga;
