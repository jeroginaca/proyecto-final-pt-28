import React from "react";
import { useNavigate } from "react-router-dom";

export const BotonVolver = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={props.clase} onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};
