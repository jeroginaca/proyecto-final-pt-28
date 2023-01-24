import React, { useState } from "react";
import plusIcon from "../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#CD6C51", "#E6E8A7", " #E8B8A4", "#85B5B5", "#9AA162"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active align-items" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
