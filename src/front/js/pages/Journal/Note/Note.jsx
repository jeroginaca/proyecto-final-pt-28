import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import "./Note.css";
import "../../../../styles/journal.css";

let timer = 500,
  timeout;
function Note(props) {
  const { store, actions } = useContext(Context);
    useEffect(() => {
      actions.getNotes(props.id);
    }, []);

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${day} ${month} | ${hrs}:${min} ${amPm}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

 /*  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  }; */
  
  const handleFullScreen = (event) => {
    const note = event.currentTarget.parentNode.parentNode;
    if (document.fullscreenElement === note) {
        document.exitFullscreen();
    } else {
        note.requestFullscreen();
    }
  };

  const updateText = (text, id) => {
    debounce(() => {
      fetch('/update_note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          note_id: id,
          text: text
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  };
  
  const deleteNote = (id) => {
    fetch('/delete_note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        note_id: id
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return store.notes.map((notes) => {
  return (
    <div className="note">
        <div className="note-color" style={{ backgroundColor: props.note.color }}></div>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p className="fecha-nota">{formatDate(props.note.time)}</p>
        <button className="boton borrar-entrada"><i onClick={() => {
          props.deleteNote(props.note.id)
          deleteNote(props.note.id)
          }} class="fa" aria-hidden="true"></i></button>
        <button className="boton pantalla-completa" onClick={handleFullScreen}><i class="fa fa-arrows-alt" aria-hidden="true"></i></button>
        <button className="boton guardar-entrada"><i class="fa" aria-hidden="true"></i></button>
      </div>
    </div>
  );
});
};

export default Note;
