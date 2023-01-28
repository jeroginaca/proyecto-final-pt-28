import React from "react";
import NavbarVolver from "../../../component/2nd Navbar/NavbarVolver.jsx";
import BottomBar from "../../../component/Bottom Bar/BottomBar.jsx";
import Note from "../Note/Note.jsx";
import "./NoteContainer.css";
import { BotonVolver } from "../../../component/BotonVolver.jsx";

function NoteContainer(props) {
  return (
    <>
      <div className="note-container">
        <div className="header-container">
          <h1 className="mb-4">Entradas</h1>

          <BotonVolver clase="btn boton-volver-journal" />
        </div>
        <div className="note-container_notes custom-scroll">
          {props.notes.length > 0 ? (
            props.notes.map((item, index) => (
              <Note
                key={index}
                id={item.id}
                color={item.color}
                date={item.date}
                note={item.notes}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
                updateNotes={props.updateNotes}
                setNotes={props.setNotes}
              />
            ))
          ) : (
            <p>No tienes ninguna entrada.</p>
          )}
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default NoteContainer;
