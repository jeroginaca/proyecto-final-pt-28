import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/todolist.css";
import TodoForm from "./TodoForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, index, completeTodo, removeTodo, editTodo }) {
const [isEditing, setIsEditing] = React.useState(false);
const [newText, setNewText] = React.useState(todo.text);

const handleEdit = (index) => {
setIsEditing(true);
}

const handleSave = (index) => {
setIsEditing(false);
editTodo(index, newText);
}

return (
  <div className="todo-container" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    <button className="btn boton-completar" onClick={() => completeTodo(index)}>
      <FontAwesomeIcon icon={todo.isCompleted ? faCircleCheck : faCheckCircle} />
    </button>
    <div className="task-container">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={e => setNewText(e.target.value)}
          onKeyPress={e => {
            if (e.key === "Enter") {
              handleSave(index);
            }
          }}
        />
      ) : (
        <span>{todo.text}</span>
      )}
    </div>
    <div className="botones">
      {isEditing ? (
        <button className="boton boton-guardar" onClick={() => handleSave(index)}>
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      ) : (
        <button className="boton boton-editar" onClick={() => handleEdit(index)}>
          <FontAwesomeIcon icon={faPencil} />
        </button>
      )}
      {!isEditing && (
        <button className="boton boton-basura" onClick={() => removeTodo(index)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      )}
    </div>
  </div>
);
}

function ListaTareas() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

const editTodo = (index, text) => {
const newTodos = [...todos];
newTodos[index].text = text;
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
<div className="ListaTareas">
<div className="todo-list">
<TodoForm addTodo={addTodo} />
{todos.map((todo, index) => (
  <Todo
  key={index}
  index={index}
  todo={todo}
  completeTodo={completeTodo}
  removeTodo={removeTodo}
  editTodo={editTodo}
/>
))}
</div>
<div className="counter-container pb-5">
  {todos.length > 0 && 
    <div className="todos-counter">
      {
        todos.filter(todo => !todo.isCompleted).length === 0
        ? "¡No tienes tareas pendientes! 🥳"
        : todos.filter(todo => !todo.isCompleted).length === 1
          ? `Tienes ${todos.filter(todo => !todo.isCompleted).length} tarea pendiente⚡`
          : `Tienes ${todos.filter(todo => !todo.isCompleted).length} tareas pendientes⚡`
      }
    </div>
  }
  {todos.length > 0 && 
    <div className="todos-counter">
      {
        todos.filter(todo => todo.isCompleted).length === 0
        ? "No tienes tareas completadas"
        : todos.filter(todo => todo.isCompleted).length === 1
          ? `Has completado ${todos.filter(todo => todo.isCompleted).length} tarea ✅`
          : `Has completado  ${todos.filter(todo => todo.isCompleted).length} tareas ✅`
      }
    </div>
  }
  <div className="todos-counter">
    {todos.length === 0 
      ? "No tienes ninguna tarea 🏝️" 
      : todos.length === 1 
        ? `${todos.length} tarea en total` 
        : `${todos.length} tareas en total`
    }
  </div>
</div>

</div>
{todos.length > 0 && 
  <button className="boton-limpiar" onClick={() => setTodos( todos.filter((t, currentIndex) => { return (t = 0);}))}>
    Limpiar
  </button>
}
</div>
</div>
);
}
export default ListaTareas;