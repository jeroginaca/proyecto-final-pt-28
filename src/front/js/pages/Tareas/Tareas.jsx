import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "./tareas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import NavbarVolver from "../../component/2nd Navbar/NavbarVolver.jsx";
import BottomBar from "../../component/Bottom Bar/BottomBar.jsx";

const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.task);

  const handleEdit = (index) => {
    setIsEditing(true);
  };

  const handleSave = (index) => {
    setIsEditing(false);
    editTodo(index, newText, todo);
  };

  return (
    <div
      className="todo-container py-2"
      style={{ textDecoration: todo.done ? "line-through" : "" }}
    >
      <button
        className="btn boton-completar"
        onClick={() => completeTodo(todo)}
      >
        <FontAwesomeIcon icon={todo.done ? faCircleCheck : faCheckCircle} />
      </button>
      <div className="task-container">
        {isEditing ? (
          <input
            className="input-task"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSave(index);
              }
            }}
          />
        ) : (
          <span>{todo.task}</span>
        )}
      </div>
      <div className="botones-todo">
        {isEditing ? (
          <button
            className="boton boton-guardar"
            onClick={() => handleSave(index)}
          >
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
        ) : (
          <button
            className="boton boton-editar"
            onClick={() => handleEdit(index)}
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        )}
        {!isEditing && (
          <button
            className="boton boton-basura"
            onClick={() => removeTodo(todo)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        )}
      </div>
    </div>
  );
};

export const ListaTareas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [store.token]);

  useEffect(() => {
    getTasks();
  }, []);

  const editTask = (todo, state) => {
    fetch(process.env.BACKEND_URL + `/api/edit_task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(todo),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.ok) {
          getTasks();
        }
      })
      .then((data) => {
        // setStore({ notes: data });
      });
  };

  const addTask = (todo) => {
    fetch(process.env.BACKEND_URL + `/api/new_task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(todo),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.ok) {
          getTasks();
        }
      })
      .then((data) => {
        // setStore({ notes: data });
      });
  };

  const removeTask = (todo) => {
    console.log(todo);
    fetch(process.env.BACKEND_URL + `/api/remove_task`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(todo),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.ok) {
          getTasks();
        }
      })
      .then((data) => {
        // setStore({ notes: data });
      });
  };

  const getTasks = () => {
    fetch(process.env.BACKEND_URL + `/api/get_tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setTodos(data);
        console.log(data);
      });
  };

  const addTodo = (text) => {
    addTask({ date: new Date(), done: false, task: text });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const completeTodo = (todo) => {
    const updatedTodo = { ...todo, done: !todo.done };
    editTask(updatedTodo);
  };

  const editTodo = (index, text, todo) => {
    todo.task = text;
    editTask(todo);
  };
  const removeTodo = (todo) => {
    removeTask(todo);
  };

  return (
    <>
      <NavbarVolver />
      <div
        className="container-lista p-5"
        style={{ backgroundColor: "#FAD7C6" }}
      >
        <h1>Objetivos</h1>
        <div className="ListaTareas">
          <div className="todo-list">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input-todo question my-3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={todo.id}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
            ))}
          </div>
          <div className="counter-container pb-5">
            {todos.length > 0 && (
              <div className="todos-counter">
                {todos.filter((todo) => !todo.done).length === 0 ? (
                  "¡No tienes tareas pendientes! 🥳"
                ) : todos.filter((todo) => !todo.done).length === 1 ? (
                  <>
                    <span>Tienes </span>
                    <strong>{todos.filter((todo) => !todo.done).length}</strong>
                    <span> tarea pendiente⚡</span>
                  </>
                ) : (
                  <>
                    <span>Tienes </span>
                    <strong>{todos.filter((todo) => !todo.done).length}</strong>
                    <span> tareas pendientes⚡</span>
                  </>
                )}
              </div>
            )}
            {todos.length > 0 && (
              <div className="todos-counter">
                {todos.filter((todo) => todo.done).length === 0 ? (
                  "No tienes tareas completadas"
                ) : todos.filter((todo) => todo.done).length === 1 ? (
                  <span>
                    Has completado{" "}
                    <strong>{todos.filter((todo) => todo.done).length}</strong>{" "}
                    tarea ✅
                  </span>
                ) : (
                  <span>
                    Has completado{" "}
                    <strong>{todos.filter((todo) => todo.done).length}</strong>{" "}
                    tareas ✅
                  </span>
                )}
              </div>
            )}
            <div className="todos-counter">
              {todos.length === 0 ? (
                "No tienes ninguna tarea 🏝️"
              ) : todos.length === 1 ? (
                <>
                  <strong>1</strong> tarea en total
                </>
              ) : (
                <>
                  <strong>{todos.length}</strong> tareas en total
                </>
              )}
            </div>
          </div>
        </div>
        {todos.length > 0 && (
          <button
            className="boton-limpiar"
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
        )}
      </div>

      <BottomBar />
    </>
  );
};
