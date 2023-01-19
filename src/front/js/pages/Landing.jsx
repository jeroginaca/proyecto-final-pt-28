import React, { useState, useEffect } from "react";
import "../../styles/index.css";
import Navbar from "../component/Navbar/Navbar.jsx";

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

  const funcion = {
    width: "250px",
    color: " white",
    fontSize: "2rem",
    margin: "2rem",
    padding: "2rem",
    /*borderLeft: "1px solid white",
    borderRight: "1px solid white",*/
  };

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
      <Navbar isScrolling={scroll} />
      <div
        style={{
          backgroundImage: `url("https://i.postimg.cc/dqFLh5ZY/Background-1.png")`,
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

          <p style={{ fontSize: "2.2rem" }}>
            Medita con nosotros en un 1, 2, 3
          </p>

          <div style={{ display: "flex" }}>
            <button style={button}>Registrarte Gratis</button>
            <button style={button2}>Iniciar Sesión</button>
          </div>
        </div>
      </div>

      <div
        className="banner-funciones"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="funcion">
          <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
          <p>Meditar</p>
        </div>
        <div className="funcion">
          <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
          <p>Journal</p>
        </div>
        <div className="funcion">
          <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
          <p>Objetivos</p>
        </div>
        <div className="funcion">
          <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
          <p>Esutdio</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        {/* https://i.postimg.cc/X7BcdY2Z/Motivate.png */}
        <div style={{ width: "40%" }}>
          <img
            src="https://i.postimg.cc/fbVHLQ3Z/Motivate-2.png"
            width={"70%"}
          />
        </div>
        <div style={{ width: "40%" }}>
          <h2 className="motivate-titulo">Motivate</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button style={button}>Empeza Ahora!</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <div style={{ width: "40%" }}>
          <h2 className="motivate-titulo">Se Constante</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button style={button}>Empeza Ahora!</button>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src="https://i.postimg.cc/qBw29ZRG/muchachitos.png"
            width={"70%"}
            style={{ marginLeft: "4rem" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <h2 className="meditacion-beneficios">
          Obten Beneicios <br /> Personales
        </h2>
        <p className="texto">
          Con nuestra app Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda esse fuga earum illum, illo repellendus totam tempore
          non, molestias est dolore quo id tenetur ad quod iste hic.
          Repellendus, nobis?
        </p>
        <img src="https://i.postimg.cc/HnwW15Yc/Cerebro.png" width={"45%"} />
        <div style={{ display: "flex", margin: "2rem 0 3rem 0" }}>
          <button style={button}>Registrarte Gratis</button>
          <button style={button2}>Iniciar Sesión</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <div style={{ width: "40%" }}>
          <img src="https://i.postimg.cc/28qtXm5v/Meditar.png" width={"70%"} />
        </div>
        <div style={{ width: "40%" }}>
          <h2 className="motivate-titulo">Medita</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button style={button}>Ver Más</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <div style={{ width: "40%" }}>
          <h2 className="motivate-titulo">Escribí tu Journal</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button style={button}>Ver Más</button>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src="https://i.postimg.cc/Yq3x3s6g/Notas.png"
            width={"70%"}
            style={{ marginLeft: "4rem" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <div style={{ width: "40%" }}>
          <img
            src="https://i.postimg.cc/RZ7PJLdp/Objetivos.png"
            width={"70%"}
          />
        </div>
        <div style={{ width: "40%" }}>
          <h2 className="motivate-titulo">Establece tus Objetivos</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button style={button}>Ver Más</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <div style={{ width: "40%" }}>
          <h2 className="motivate-titulo">Programa tus tiempos de estudio</h2>
          <p style={{ color: "#754942" }}>
            Motivate a ser Mindfulnes y se consiente, la constancia es buena.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            porro aliquam, possimus ea necessitatibus ipsam!
          </p>
          <button style={button}>Ver Más</button>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src="https://i.postimg.cc/rySsRdWZ/Estudia3.png"
            width={"70%"}
            style={{ marginLeft: "4rem" }}
          />
        </div>
      </div>

      <div className="banner-funciones">
        <p
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "2rem",
            paddingTop: "4rem",
          }}
        >
          Lo que dicen nuestros usuarios
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="testimonio">
            <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
            <h3>Juansito</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui vitae pariatur alias perferendis quaerat.
            </p>
          </div>
          <div className="testimonio">
            <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
            <h3>Pedrito</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui vitae pariatur alias perferendis quaerat.
            </p>
          </div>
          <div className="testimonio">
            <img src=" https://i.ibb.co/rs9ZX4X/Vector.png" alt="" />
            <h3>Laurita</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui vitae pariatur alias perferendis quaerat.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FEE6D6",
          padding: "4rem",
        }}
      >
        <h2 className="meditacion-beneficios">
          Comenza hoy con <br /> Mindful Me
        </h2>
        <p className="texto">
          Con nuestra app Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda esse fuga earum illum, illo repellendus totam tempore
          non, molestias est dolore quo id tenetur ad quod iste hic.
          Repellendus, nobis?
        </p>
        <img
          src="https://i.postimg.cc/qqkNv0mv/Chica-meditando.png"
          width={"45%"}
        />
        <div style={{ display: "flex", margin: "2rem 0 3rem 0" }}>
          <button style={button}>Registrarte Gratis</button>
          <button style={button2}>Iniciar Sesión</button>
        </div>
      </div>

      {/*<div className="footer">
        <h3>Seguinos en Las Redes</h3>
        <div className="redes">
          <ul>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>*/}
    </>
  );
};

export default Landing;
