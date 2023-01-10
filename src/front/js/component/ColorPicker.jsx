import React, { useState } from "react";

const ColorPicker = () => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "2rem auto",
    padding: "1rem",
    borderRadius: "0 20px 20px 20px",
    boxShadow: "-1px 1px 20px rgba(0, 0, 0, 0.49)",
    width: "600px",
  };

  const color1 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#CD6C51",
    borderRadius: "100%",
    margin: "1rem",
  };
  const color2 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#EA9042",
    borderRadius: "100%",
    margin: "1rem",
  };
  const color3 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#E8B8A4",
    borderRadius: "100%",
    margin: "1rem",
  };
  const color4 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#E6E8A7",
    borderRadius: "100%",
    margin: "1rem",
  };
  const color5 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#85B5B5",
    borderRadius: "100%",
    margin: "1rem",
  };
  const color6 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#5C7F7E",
    borderRadius: "100%",
    margin: "1rem",
  };
  const color7 = {
    width: "40px",
    height: "40px",
    backgroundColor: "#9AA162",
    borderRadius: "100%",
    margin: "1rem",
  };

  const [selectedDay, setSelectedDay] = useState(null);

  function handleDayClick(value) {
    setSelectedDay(value);
  }
  const selectedDayStyle = {
    backgroundColor: "red",
  };

  return (
    <div style={container}>
      <div onClick={handleDayClick} style={color1}></div>
      <div style={color2}></div>
      <div style={color3}></div>
      <div style={color4}></div>
      <div style={color5}></div>
      <div style={color6}></div>
      <div style={color7}></div>
    </div>
  );
};

export default ColorPicker;
