import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Mindful Me</h3>
            <p>Meditación</p>
            <p>Journal</p>
            <p>Tus Objetivos</p>
            <p>Estudio</p>
            <p>Yoga</p>
          </div>

          <div className="footer-column">
            <h3>Seguínos</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Tik Tok</p>
            <p>Youtube</p>
            <p>Pinteres</p>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <p>email</p>
            <p>telefono</p>
            <p>Whatsapp</p>
            <p>Chat</p>
            
          </div>
        </div>

        <p>Copyright &copy; {new Date().getFullYear()} Mindful Me</p>
      </div>
    </div>
  );
};

export default Footer;
