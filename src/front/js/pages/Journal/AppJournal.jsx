import React, { useEffect, useState, useContext } from "react";
import NoteContainer from "./NoteContainer/NoteContainer.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./AppJournal.css";
import { Context } from "../../store/appContext.js";

function AppJournal() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app-2")) || []
  );
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getNotes();
  }, []);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: localStorage.getItem("notes-app"),
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  /*   useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]); */

  return (
    <div className="AppJournal px-3 py-5">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default AppJournal;
