import React from "react";

const ColorPicker = (props) => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "-1px 1px 20px rgba(0, 0, 0, 0.49)",
    width: "350px",
  };

  const color1 = {
    width: "30px",
    height: "30px",
    backgroundColor: "red",
    borderRadius: "100%",
    margin: "0.5rem",
  };
  const color2 = {
    width: "30px",
    height: "30px",
    backgroundColor: "blue",
    borderRadius: "100%",
    margin: "0.5rem",
  };
  const color3 = {
    width: "30px",
    height: "30px",
    backgroundColor: "green",
    borderRadius: "100%",
    margin: "0.5rem",
  };
  const color4 = {
    width: "30px",
    height: "30px",
    backgroundColor: "yellow",
    borderRadius: "100%",
    margin: "0.5rem",
  };
  const color5 = {
    width: "30px",
    height: "30px",
    backgroundColor: "purple",
    borderRadius: "100%",
    margin: "0.5rem",
  };

  function handleClick(e) {
    props.setSaveColor(e.target.id);
  }

  return (
    <div style={container}>
      <div id="red" onClick={handleClick} style={color1}></div>
      <div id="blue" onClick={handleClick} style={color2}></div>
      <div id="green" onClick={handleClick} style={color3}></div>
      <div id="yellow" onClick={handleClick} style={color4}></div>
      <div id="purple" onClick={handleClick} style={color5}></div>
    </div>
  );
};

export default ColorPicker;
