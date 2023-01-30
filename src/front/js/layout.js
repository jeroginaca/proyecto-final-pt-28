import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Dashboard } from "./pages/dashboard";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import { Login } from "./pages/login";
import Navbar from "./component/Navbar/Navbar.jsx";

import { Signup } from "./pages/signup";
import Tiempos from "./pages/Meditacion/Tiempos.jsx";
import Tareas from "./pages/Tareas/Tareas.jsx";
import AppJournal from "./pages/Journal/AppJournal.jsx";
import SeleccionDeAudios from "./pages/Meditacion/SeleccionDeAudio.jsx";
import Meditacion from "./pages/Meditacion/Meditacion.jsx";
import Felicitaciones from "./pages/Meditacion/Felicitaciones.jsx";
import Home from "./pages/Landing/Home.jsx";
import Pomodoro from "./pages/Pomodoro/Pomodoro.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Yoga from "./pages/Blog/BlogNotes/Yoga.jsx";
import Note1 from "./pages/Blog/BlogNotes/Note 1/Note1.jsx";

import Nosotros from "./pages/Nosotros/Nosotros.jsx";
import Note2 from "./pages/Blog/BlogNotes/Note 1/Note2.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<Tiempos />} path="/tiempos" />
            <Route element={<Tareas />} path="/tareas" />
            <Route element={<AppJournal />} path="/appjournal" />
            <Route element={<Meditacion />} path="/meditacion/:id" />
            <Route element={<Felicitaciones />} path="/felicitaciones" />
            <Route element={<SeleccionDeAudios />} path="/audios/:id" />
            <Route element={<Pomodoro />} path="/pomodoro" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Blog />} path="/blog" />
            <Route element={<Yoga />} path="/blog/yoga" />
            <Route element={<Note1 />} path="/blog/note1" />
            <Route element={<Note2 />} path="/blog/note2" />
            <Route element={<Nosotros />} path="/nosotros" />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
