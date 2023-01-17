import React from "react";

const Landing = () => {
  const button = {
    padding: "0.7rem 1.2rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "#85B5B5",
    border: "none",
    color: "#FBF7F1",
    fontSize: "1.5rem",
  };
  const button2 = {
    padding: "0.7rem 1.2rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "transparent",
    border: "2px solid #85B5B5",
    color: "#85B5B5",
    fontSize: "1.5rem",
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/JzFt2Bb/Background-1.png")`,
        backgroundPosition: "center",
        backgroundSize: " cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "85vh",
          color: "#754942",
        }}
      >
        <h1 style={{ fontSize: "8rem", fontWeight: "700" }}>Mindful Me</h1>

        <p style={{ fontSize: "2.2rem" }}>Medita con nosotros en un 1, 2, 3</p>

        <div style={{ display: "flex" }}>
          <button style={button}>Registrarte Gratis</button>
          <button style={button2}>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
