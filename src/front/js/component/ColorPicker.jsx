import React from "react";
import "../../styles/colorpicker.css";

const ColorPicker = (props) => {
  function handleClick(e) {
    props.setSaveColor(e.target.id);
  }

  return (
    <div id="colorpicker-container">
      <div id="red" onClick={handleClick}></div>
      <div id="blue" onClick={handleClick}></div>
      <div id="green" onClick={handleClick}></div>
      <div id="yellow" onClick={handleClick}></div>
      <div id="purple" onClick={handleClick}></div>
    </div>
  );
};

export default ColorPicker;
