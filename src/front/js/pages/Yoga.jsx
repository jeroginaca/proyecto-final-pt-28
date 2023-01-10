import React, { useContext, useEffect } from "react";
import YogaDetails from "../component/YogaDetails.jsx";
import { Link } from "react-router-dom";

const Yoga = () => {
  const text = {
    textAlign: "center",
    color: "#754942",
    textDecoration: "none",
  };
  return (
    <div
      style={{
        backgroundColor: "#EDDCC3",
        color: "#FBF7F1",
        textAlign: "center",
        color: "#754942",
        textDecoration: "none",
      }}
    >
      <h1 style={{ paddingTop: "3rem" }}>Poses de Yoga</h1>
      <Link style={text} to={"/"}>
        <p>Volver</p>
      </Link>
      <YogaDetails />
      <Link style={text} to={"/"}>
        <p>Volver</p>
      </Link>
    </div>
  );
};

export default Yoga;
