import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";

import "../Banner/banner.css";

const Redes = () => {
  return (
    <div className="banner-container">
      <Fade bottom>
        <h3>Seguinos en las redes</h3>
      </Fade>
      <Zoom cascade>
        <div className="banner-extra">
          <div className="extra">
            <Link className="extra-1" to={"/tiempos"}>
              <SlSocialFacebook style={{ fontSize: "3rem" }} />
            </Link>
          </div>

          <div className="extra">
            <Link className="extra-1" to={"/tiempos"}>
              <SlSocialInstagram style={{ fontSize: "3rem" }} />
            </Link>
          </div>

          <div className="extra">
            <Link className="extra-1" to={"/tiempos"}>
              <SlSocialTwitter style={{ fontSize: "3rem" }} />
            </Link>
          </div>

          <div className="extra">
            <Link className="extra-1" to={"/tiempos"}>
              <SlSocialPintarest style={{ fontSize: "3rem" }} />
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Redes;
