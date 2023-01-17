import React from "react";
import "../../../styles/journal.css";

function Entrada({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input question my-3 p-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Entrada;