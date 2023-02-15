import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";

import "./redes.css";

const Redes = () => {
  return (
    <div className="redes-container">
      <Fade bottom>
        <h3>Síguenos en redes</h3>
      </Fade>
      <Zoom cascade>
        <div className="redes-extra">
          <div className="redes">
            <Link className="redes-1" to={""}>
              <SlSocialFacebook style={{ fontSize: "3rem" }} />
            </Link>
          </div>

          <div className="redes">
            <Link className="redes-1" to={""}>
              <SlSocialInstagram style={{ fontSize: "3rem" }} />
            </Link>
          </div>

          <div className="redes">
            <Link className="redes-1" to={""}>
              <SlSocialTwitter style={{ fontSize: "3rem" }} />
            </Link>
          </div>

          <div className="redes">
            <Link className="redes-1" to={""}>
              <SlSocialPintarest style={{ fontSize: "3rem" }} />
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Redes;
