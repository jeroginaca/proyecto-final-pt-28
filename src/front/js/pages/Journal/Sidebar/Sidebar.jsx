import React, { useState } from "react";
import plusIcon from "../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  // const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  const colors = ["#CD6C51", "#EA9042", " #E8B8A4", "#E6E8A7", "#85B5B5", "5C7F7E", "9AA162"];

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
