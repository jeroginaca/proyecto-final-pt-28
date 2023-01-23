import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BtnsSignupLogin from "../BTN-Sign-Log/BtnsSignupLogin.jsx";
import "../landing.css";
import "./beneficios.css";

const Beneficios = () => {
  return (
    <div className="display">
      <div className="beneficios-container">
        <h2 className="meditacion-beneficios">
          Obten Beneficios <br /> Personales
        </h2>
        <p className="texto">
          Con nuestra app Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda esse fuga earum illum, illo repellendus totam tempore
          non, molestias est dolore quo id tenetur ad quod iste hic.
          Repellendus, nobis?
        </p>
        <img src="https://i.postimg.cc/HnwW15Yc/Cerebro.png" />

        <BtnsSignupLogin />
      </div>
    </div>
  );
};
export default Beneficios;
