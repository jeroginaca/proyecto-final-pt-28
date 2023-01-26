import React from "react";
import Note from "../Note/Note.jsx";
import "./NoteContainer.css";

function NoteContainer(props) {
  /* const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  // const notes = reverArray(props.notes); */
  console.log("hola");
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
          <h3>No tienes ninguna entrada</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
