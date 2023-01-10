import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Tiempos from "./pages/Meditacion/Tiempos.jsx";
import Tareas from "./pages/Tareas/Tareas.jsx";
import Journal from "./pages/Journal/Journal.jsx";
import Entrada from "./pages/Journal/Entrada.jsx";
import PruebaTodoJournal from "./pages/Journal/PruebaTodoJournal.jsx";
import SeleccionDeAudios from "./pages/Meditacion/SeleccionDeAudio.jsx";
import Meditacion from "./pages/Meditacion/Meditacion.jsx";
import Felicitaciones from "./pages/Felicitaciones.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Tiempos />} path="/tiempos" />
            <Route element={<Tareas />} path="/tareas" />
            <Route element={<Journal />} path="/journal" />
            <Route element={<Entrada />} path="/entrada" />
            <Route element={<PruebaTodoJournal />} path="/PruebaTodoJournal" />
            <Route element={<Meditacion />} path="/meditacion/:id" />
            <Route element={<Felicitaciones />} path="/felicitaciones" />
            <Route element={<SeleccionDeAudios />} path="/audios" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
