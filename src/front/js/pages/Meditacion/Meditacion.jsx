import React from "react";
import { Link, useParams } from "react-router-dom";
import Play from "../../component/Play.jsx";

const Meditacion = () => {
  const buttons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const params = useParams();

  return (
    <div className="meditacion-background-noche">
      <div style={buttons}>
        <img
          src="https://i.ibb.co/8K4RWxc/Personaje-noche.png"
          className="meditacion-personaje-noche"
        />
        <Play id={params.id} />
        <div style={{ display: "flex", gap: "2rem", margin: "2rem 0" }}>
          <Link className="meditacion-terminar" to={"/felicitaciones"}>
            <p>Terminar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meditacion;
