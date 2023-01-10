import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Player = () => {
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

  const [isVisible, setIsVisible] = useState(true);
  return (
    <div style={buttons}>
      <button style={button} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ocultar" : "Mostrar"} Reproductor
      </button>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          style={{ visibility: isVisible ? "visible" : "hidden" }}
          url="https://www.youtube.com/watch?v=hgdZYGpZTtU&ab_channel=XuanLanYoga"
          playing
          controls
        />
      </div>
      <Link style={text} to={"/"}>
        <p>Volver</p>
      </Link>
    </div>
  );
};

export default Player;
