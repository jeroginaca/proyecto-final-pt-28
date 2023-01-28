import React, { useEffect, useState, useContext } from "react";
import NoteContainer from "./NoteContainer/NoteContainer.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./AppJournal.css";
import { Context } from "../../store/appContext.js";
import { BotonVolver } from "../../component/BotonVolver.jsx";

function AppJournal() {
  const [notes, setNotes] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    updateNotes();
  }, []);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: "",
      notes: "",
      date: Date.now(),
      color,
    });
    // tempNotes.reverse(); <----------------- Para que salgan las nuevas por arriba
    setNotes(tempNotes);
  };

  const updateNotes = () => {
    fetch(process.env.BACKEND_URL + `/api/get_note`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setNotes(data);
      });
  };

  const saveNote = (id) => {
    const tempNotes = [...notes];

    const note = tempNotes.find((item) => item.id === id);
    store.saveNotes(note.id, note.text, note.color);
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

  return (
    <div className="appjournal-container">
      <div className="AppJournal px-3 py-5">
        <Sidebar addNote={addNote} />
        <NoteContainer
          notes={notes}
          saveNote={saveNote}
          deleteNote={deleteNote}
          updateText={updateText}
          updateNotes={updateNotes}
        />
      </div>
    </div>
  );
}

export default AppJournal;
