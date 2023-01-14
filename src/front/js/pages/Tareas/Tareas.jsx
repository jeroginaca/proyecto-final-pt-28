import React from "react";
import { Link } from "react-router-dom";
import TodoForm from "./TodoForm.jsx";
import "../../../styles/todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

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
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {isEditing ? (
        <input type="text" value={newText} onChange={(
		e) => setNewText(e.target.value)} />
) : (
<span>{todo.text}</span>
)}
<div>
{isEditing ? (
<button className="save btn btn-success" onClick={() => handleSave(index)}><FontAwesomeIcon icon={faFloppyDisk} /></button>
) : (
<button className="edit btn btn-warning" onClick={() => handleEdit(index)}><FontAwesomeIcon icon={faPencil} className="fa-edit"/></button>
)}
<button
className="complete btn btn-primary"
onClick={() => completeTodo(index)}
>
<FontAwesomeIcon icon={faCircleCheck} />
</button>
<button className="remove btn btn-danger" onClick={() => removeTodo(index)}>
<i class="fa fa-times m-0 p-0"></i>
</button>
</div>
</div>
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
             editTodo={editTodo}
           />
))}
</div>
<div className="todos-counter">
{todos.length === 0 
  ? "Ninguna tarea" 
  : todos.length === 1 
    ? `${todos.length} tarea` 
    : `${todos.length} tareas`
}
</div>
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
  <button className="volver btn btn-primary mt-3 border-0">Volver</button>
</Link>
</div>
</div>
);
}
export default Journal;