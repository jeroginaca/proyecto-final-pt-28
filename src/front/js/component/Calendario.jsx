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
          onClickDay={
            handleDayClick
          } /*Esta línea añade un manejador de eventos onClickDay al elemento de calendario. Este manejador se ejecutará cuando el usuario haga clic en un día del calendario. */
          tileContent={
            (
              {
                date,
                view,
              } /*Esta línea define una propiedad tileContent del elemento de calendario. Esta propiedad es una función que toma un objeto con dos propiedades: date y view. La función devuelve el contenido a mostrar en el día correspondiente. */
            ) =>
              selectedDay &&
              date.getTime() === selectedDay.getTime() &&
              view ===
                "month" /*Esta línea comprueba si selectedDay es null o undefined. Si selectedDay es válido, se comparan las fechas de date y selectedDay para ver si son iguales. Si las fechas son iguales y la vista actual es el mes, se muestra el contenido. */ ? (
                <div style={selectedDayStyle}>{date.getDate()}</div>
              ) : undefined
            /*Se muestra el número del día dentro de un elemento div con el estilo especificado en selectedDayStyle.
            
La propiedad style del elemento div acepta un objeto con las propiedades de estilo a aplicar. En este caso, se está aplicando el estilo especificado en la variable selectedDayStyle. Esta variable puede contener cualquier combinación de propiedades de estilo, como por ejemplo backgroundColor, color, fontSize, etc.

El método getDate del objeto date devuelve el número del día del mes. Por ejemplo, si la fecha es el 15 de enero de 2020, el método getDate devolverá 15. Este valor se muestra dentro del elemento div.

La línea se cierra con ) : undefined, que utiliza el operador ternario : para devolver undefined si la condición anterior es falsa. Esto significa que el contenido no se mostrará para los días que no cumplan las condiciones especificadas. */
          }
        />
      </div>
    </div>
  );
};

export default Calendario;
