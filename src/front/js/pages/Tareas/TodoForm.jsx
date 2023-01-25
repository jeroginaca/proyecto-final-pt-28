import React from "react";
import "../../../styles/todolist.css";

function TodoForm({ addTodo }) {
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

export default TodoForm;
