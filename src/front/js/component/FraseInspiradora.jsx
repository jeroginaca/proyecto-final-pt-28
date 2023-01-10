import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const FraseInspiradora = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getInspiration();
  }, []);

  return (
    <div>
      <p>{store.frases}</p>
    </div>
  );
};

export default FraseInspiradora;
