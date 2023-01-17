import React, { useState } from 'react';
import Modal from 'react-modal';

const MyModal = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);
const [inputText, setInputText] = useState('');

const handleSave = () => {
console.log(inputText);
setModalIsOpen(false);
// Dispatch action to save inputText in the state
};

return (
<div>
<button className="btn-primary" onClick={() => setModalIsOpen(true)}>Nueva entrada</button>
<Modal
isOpen={modalIsOpen}
onRequestClose={() => setModalIsOpen(false)}
style={{
overlay: {
backgroundColor: 'rgba(0, 0, 0, 0.5)',
zIndex: '999'
},
content: {
position: 'absolute',
top: '50%',
left: '50%',
right: 'auto',
bottom: 'auto',
marginRight: '-50%',
transform: 'translate(-50%, -50%)',
width: '100%',
height: '100%'
}
}}
>
<h1>Entrada</h1>
<div className="journal-entry">
          <input></input>
        </div>
        <button className="btn-success" onClick={handleSave}>Guardar</button>
        <button className="btn-danger" onClick={() => setModalIsOpen(false)}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default MyModal;
























/* import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/journal.css";
import Entrada from "./Entrada.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, index, removeTodo, editTodo }) {
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
  <div className="todo-container">
  <div className="fecha-container">
    <div className="tarea-container">
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
    <span className="fecha">{todo.fecha.toLocaleDateString()}</span>
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

function ListaEntradas() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, fecha: new Date() }];
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
<h1>Entradas</h1>
<button className="btn btn-primary">Nueva entrada</button>
<div className="Listaentradas">
<div className="todo-list">
<Entrada addTodo={addTodo} />
{todos.map((todo, index) => (
  <Todo
  key={index}
  index={index}
  todo={todo}
  removeTodo={removeTodo}
  editTodo={editTodo}
/>
))}
</div>
<div className="counter-container pb-5">
  <div className="todos-counter">
    {todos.length === 0 
      ? "Aún no tienes ninguna entrada" 
      : todos.length === 1 
        ? `${todos.length} entrada` 
        : `${todos.length} entradas`
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
export default ListaEntradas; */