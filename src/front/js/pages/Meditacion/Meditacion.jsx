import React from "react";
import { Link, useParams } from "react-router-dom";
import Play from "../../component/Play.jsx";

const Meditacion = () => {
  const buttons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
  };

  const button = {
    padding: "0.7rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "#754942",
    border: "none",
    color: "#FBF7F1",
  };

  const text = {
    textAlign: "center",
    color: "#754942",
    textDecoration: "none",
  };

  const params = useParams();

  return (
    <div style={{ backgroundColor: "#EDDCC3" }}>
      <div className="buttons" style={buttons}>
        <img
          src="https://i.ibb.co/5rzgjcc/Group-28.png"
          style={{ marginTop: "3rem" }}
        />
        <Play id={params.id} />
        <div style={{ display: "flex", gap: "2rem", margin: "2rem 0" }}>
          <Link style={text} to={"/audios"}>
            <p>Volver</p>
          </Link>
          <Link style={text} to={"/felicitaciones"}>
            <p>Terminar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meditacion;
