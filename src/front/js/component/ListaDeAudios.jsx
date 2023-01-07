import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ListaDeAudios = () => {
  const { store, actions } = useContext(Context);

  const buttons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
  };

  const button = {
    padding: "0.7rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "#754942",
    border: "none",
    color: "#FBF7F1",
  };

  useEffect(() => {
    actions.getAudios();
  }, []);

  return store.audiosTest.map((audiosTest) => {
    return (
      <div>
        <div className="buttons" style={buttons}>
          <Link to={`/meditacion/${audiosTest.id}`}>
            <button style={button}>{audiosTest.title}</button>
          </Link>
        </div>
      </div>
    );
  });
};

export default ListaDeAudios;
