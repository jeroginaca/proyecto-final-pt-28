import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";
import "./Note.css";
import "../../../../styles/journal.css";

let timer = 500,
  timeout;
function Note(props) {
  const { store, actions } = useContext(Context);

  const [content, setContent] = useState(props.note);

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

  const saveNotes = (content, id, color_param) => {
    console.log(content, id);

    if ("" === id) {
      fetch(process.env.BACKEND_URL + `/api/insert_note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          notes: content,
          color: color_param,
        }),
      })
        .then((resp) => {
          console.log(resp);
          resp.json();
        })
        .then((data) => {
          // setStore({ notes: data });
        });
    } else {
      fetch(process.env.BACKEND_URL + `/api/update_note`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          notes: content,
          note_id: id,
          color: color_param,
        }),
      })
        .then((resp) => {
          console.log(resp);
          resp.json();
        })
        .then((data) => {
          // setStore({ notes: data });
        });
    }
  };

  const deleteNote = (id) => {
    fetch(process.env.BACKEND_URL + "/api/delete_note", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        note_id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="note">
      <div
        className="note-color"
        style={{ backgroundColor: props.color }}
      ></div>
      <textarea
        className="note_text"
        onChange={(event) => setContent(event.target.value)}
        defaultValue={props.note}
      ></textarea>
      <div className="note_footer">
        <p className="fecha-nota">{formatDate(props.date)}</p>
        <button className="boton borrar-entrada">
          <i
            onClick={() => {
              deleteNote(props.id);
            }}
            className="fa"
            aria-hidden="true"
          >
            
          </i>
        </button>
        <button
          className="boton guardar-entrada"
          onClick={() => {
            saveNotes(content, props.id, props.color);
          }}
        >
          <i className="fa" aria-hidden="true">
            G
          </i>
        </button>
        <button className="boton pantalla-completa" onClick={handleFullScreen}>
          <i className="fa fa-expand" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Note;
