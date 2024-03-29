import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const FraseInspiradora = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getInspiration();
  }, []);

  return (
    <div>
      <p className="quote">"{store.frases.content}"</p>
      <p className="author">{store.frases.author}</p>
    </div>
  );
};

export default FraseInspiradora;
