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
            <p>Objetivos</p>
            <p>Estudio</p>
            <p>Yoga</p>
          </div>

          <div className="footer-column">
            <h3>Síguenos</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>TikTok</p>
            <p>YouTube</p>
            <p>Pinterest</p>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <p>E-mail</p>
            <p>Teléfono</p>
            <p>WhatsApp</p>
            <p>Chat</p>
          </div>
        </div>

        <p>Copyright &copy; {new Date().getFullYear()} Mindful Me</p>
      </div>
    </div>
  );
};

export default Footer;
