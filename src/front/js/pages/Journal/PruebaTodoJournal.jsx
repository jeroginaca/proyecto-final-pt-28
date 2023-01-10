import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/pruebatodojournal.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button
          className="volver border-radius-0 btn btn-primary border-0"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="borrar btn btn-danger border-0"
          onClick={() => removeTodo(index)}
        >
          <i class="fa fa-times m-0 p-0"></i>
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="question my-4">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Journal() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo Journal",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container-fluid container-lista">
      <div className="p-5">
        <h1>Objetivos</h1>
        <div className="Journal">
          <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
          <div className="todos-counter">
            {todos.length === 0 ? "Ninguna tarea" : todos.length === 1 ? `${todos.length} tarea` : `${todos.length} tareas`}
          </div>
          <button
            className="clear btn btn-danger mt-3 border-0"
            onClick={() =>
              setTodos(
                todos.filter((t, currentIndex) => {
                  return (t = 0);
                })
              )
            }
          >
            Limpiar
          </button>
          <Link to="/">
            <button className="volver btn btn-primary mt-3 border-0">
              Volver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Journal;
