import React, { useContext } from "react";
import cloudinary from "cloudinary-core";
import { CloudinaryContext, Video } from "cloudinary-react";
import { Context } from "../store/appContext";

const Play = ({ id }) => {
  const { store, actions } = useContext(Context);

  const getAudios = (id) => {
    const audio = store.audiosTest.find((element) => element.id == id);
    return audio.src;
  };

  return (
    <CloudinaryContext
      cloudName="dgn3hxolh"
      apiKey="318116478912829"
      apiSecret="Qe6tfvIi84x0H6BIR-2gwiO52x4"
    >
      <Video publicId={getAudios(id)} controls></Video>
    </CloudinaryContext>
  );
};

export default Play;
