import React from "react";
import { useNavigate } from "react-router-dom";

export const BotonVolver = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
