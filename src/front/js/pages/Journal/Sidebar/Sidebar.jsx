import React, { useState } from "react";
import plusIcon from "../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#CD6C51", "#E6E8A7", " #E8B8A4", "#85B5B5", "#9AA162"];

  const [listOpen, setListOpen] = useState(false);

  const insertNote = (color_param) => {
    fetch(process.env.BACKEND_URL + `/api/insert_note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        notes: "",
        color: color_param,
        date: new Date(),
      }),
    })
      .then((resp) => {
        console.log(resp);
        resp.json();
        props.updateNotes();
      })
      .then((data) => {
        // setStore({ notes: data });
      });
  };

  return (
    <div className="sidebar">
      <img src={plusIcon} onClick={() => setListOpen(!listOpen)} />
      <ul
        className={`sidebar_list ${
          listOpen ? "sidebar_list_active align-items" : ""
        }`}
      >
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => insertNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
