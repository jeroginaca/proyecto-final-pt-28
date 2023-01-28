import React from "react";
import NavbarVolver from "../../../component/2nd Navbar/NavbarVolver.jsx";
import BottomBar from "../../../component/Bottom Bar/BottomBar.jsx";
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
  return (
    <>
      <div className="note-container">
        <h1 className="mb-4">Entradas</h1>
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
