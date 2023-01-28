import React from "react";
import Note from "../Note/Note.jsx";
import "./NoteContainer.css";

function NoteContainer(props) {
  return (
    <div className="note-container">
      <div className="header-container">
        <h1 className="mb-4">Entradas</h1>
        <button className="btn boton-volver-journal" onClick={() => navigate(-1)}>Volver</button>
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
  );
}

export default NoteContainer;
