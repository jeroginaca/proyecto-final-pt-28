import React, { useState } from "react";
import { Calendar } from "react-calendar";
import ColorPicker from "./ColorPicker.jsx";
import "react-calendar/dist/Calendar.css";
/*
import "./calendario.css";
*/
const Calendario = () => {
  const button = {
    backgroundColor: "#85B5B5",
    padding: "2rem",
    borderRadius: "15px",
    margin: "0.5rem",
    border: "none",
    color: "#ffffff",
    fontWeight: "600",
  };

  const container = {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [openColorPicker, setOpenColorPicker] = useState(false);

  function handleDateChange(date) {
    console.log(date);
  }

  const curentDate = new Date();

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const currentDateString = formatDate(curentDate);

  const [tgl, setTgl] = useState(new Date());
  const events = ["13-01-2023", "12-01-2023"];

  const [selectedDay, setSelectedDay] = useState(null);

  function handleDayClick(value) {
    setSelectedDay(value);
  }

  const selectedDayStyle = {
    backgroundColor: "red",
    position: "absonlute",
    zIndex: "1",
  };

  return (
    <div style={container}>
      <button
        style={button}
        onClick={() => setOpenColorPicker(!openColorPicker)}
      >
        {/*currentDateString*/} ¿Cómo te sients hoy?
      </button>

      {openColorPicker && <ColorPicker />}

      <div className="w-full h-full p-10">
        <Calendar
          onClickDay={handleDayClick}
          tileContent={({ date, view }) =>
            selectedDay &&
            date.getTime() === selectedDay.getTime() &&
            view === "month" ? (
              <div style={selectedDayStyle}>{date.getDate()}</div>
            ) : undefined
          }
        />
      </div>
    </div>
  );
};

export default Calendario;
