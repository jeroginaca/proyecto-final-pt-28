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
    <div className="video-container">
      <video
        className="video"
        src={
          "https://res.cloudinary.com/dgn3hxolh/video/upload/v1674419369/Meditacion_Nocturna_2_dlel8j.mp4"
        }
        autoPlay
        loop
        muted
      ></video>
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
