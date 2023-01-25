import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ListaDeAudios = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAudios(props.id);
  }, []);

  

  return store.audios.map((audios) => {
    return (
      <div>
        <div className="meditacion-botones">
          <Link to={`/meditacion/${audios.id}`}>
            <button className="meditacion-boton">{audios.title}</button>
          </Link>
        </div>
      </div>
    );
  });
};

export default ListaDeAudios;
