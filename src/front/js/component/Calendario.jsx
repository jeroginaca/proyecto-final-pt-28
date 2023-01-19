import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "../../styles/calendario.css";
import "../../styles/calendario-original.css";
import ColorPicker from "./ColorPicker.jsx";
import { Context } from "../store/appContext";

export const Calendario = () => {
  const { store, actions } = useContext(Context);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [value, onChange] = useState(new Date());
  const [saveColor, setSaveColor] = useState();

  const [paintTile, setPaintTile] = useState([]);

  useEffect(() => {
    updateDates();
  }, []);

  const updateDates = () => {
    fetch(process.env.BACKEND_URL + "/api/feeling", {
      method: "GET",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setPaintTile(resp);
      });
  };
  function tileClassName(data) {
    // Add class to tiles in month view only

    if (data.view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      const date = paintTile.find(
        (element) =>
          new Date(element.date).toLocaleDateString() ==
          data.date.toLocaleDateString()
      );
      return date ? date.feeling : null;
    }
  }

  useEffect(() => {
    if (saveColor != undefined) {
      console.log(value.getTime(), "\n", saveColor);
      fetch(process.env.BACKEND_URL + "/api/feeling", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.token}`,
        },
        body: JSON.stringify({
          date: new Date(value.getTime() + value.getTimezoneOffset() * -60000),
          feeling: saveColor,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          updateDates();
          console.log(response);
        });
      setOpenColorPicker(false);
      setSaveColor(undefined);
    }
  }, [saveColor]);

  return (
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
        onClickDay={() => {
          setOpenColorPicker(true);
        }}
      />
      {openColorPicker && <ColorPicker setSaveColor={setSaveColor} />}
    </div>
  );
};

// function tileClassName({ date, view }) {
//   // Add class to tiles in month view only
//   if (view === "month") {
//     // Check if a date React-Calendar wants to check is on the list of dates to add class to
//     for (let i = 0; i < datesToAddClassTo.length; i++) {
//       if (isSameDay(datesToAddClassTo[i].fecha, date)) {
//         return datesToAddClassTo[i].color;
//       }
//     }
//   }
// }
