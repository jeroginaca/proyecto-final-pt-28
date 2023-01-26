import React from "react";
import Note from "../Note/Note.jsx";
import "./NoteContainer.css";

function NoteContainer(props) {
  console.log(props.notes);
  return (
    <div className="note-container">
      <h1 className="mb-4">Entradas</h1>
      <div className="note-container_notes custom-scroll">
        {props.notes.length > 0 ? (
          props.notes.map((item) => (
            <Note
              key={item.id}
              id={item.id}
              color={item.color}
              date={item.date}
              note={item.notes}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
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
