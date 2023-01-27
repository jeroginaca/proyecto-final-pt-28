import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

const YogaDetails = () => {
  const { store, actions } = useContext(Context);

  return store.yoga.map((yoga, id) => {
    return (
      <div className="yoga-ultra">
        <div className="yoga-details">
          <div className={`yoga-details-container yoga-details-container-${id}`}>
            <h2>{yoga.sanskrit_name}</h2>
            <h4>. {yoga.english_name} .</h4>
            <img src={yoga.img_url} />
          </div>
        </div>
      </div>
    );
  });
};

export default YogaDetails;
