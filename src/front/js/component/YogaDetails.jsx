import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const YogaDetails = () => {
  const global = {
    margin: "2rem 0",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  };

  const { store, actions } = useContext(Context);

  return store.yoga.map((yoga) => {
    return (
      <div style={global}>
        <div style={{ width: "300px", objectFit: "cover" }}>
          <h2 style={{ fontWeight: "600" }}>{yoga.sanskrit_name}</h2>
          <h4>. {yoga.english_name} .</h4>
          <img src={yoga.img_url} width="55%" />
        </div>
      </div>
    );
  });
};

export default YogaDetails;
