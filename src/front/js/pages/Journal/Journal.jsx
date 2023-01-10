import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mindfulme")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setList(result);
      })
      .catch((error) => console.log(error));
  };

  const addTask = (myTask) => {
    var newList = [...list, { label: myTask, done: false }];
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mindfulme", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
      redirect: "follow",
    })
      .then((response) => {
        response.status === 200 ? setList(newList) : "";
      })
      .then((result) => getList())
      .catch((error) => console.log(error));
  };

  const deleteTask = async () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mindfulme", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          response.json();
          addTask();
          setTodos([]);
        }
        new Error("Ocurrió un error eliminando User");
      })
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid container-lista">
      <div className="p-5">
      <h1>Entradas</h1>
      <div className="todos-counter">
      <Link to="/entrada">
          <button className="volver btn btn-primary mt-3 border-0">
            Nueva entrada
          </button>
        </Link>
        <Link to="/">
          <button className="volver btn btn-primary mt-3 border-0">
            Volver
          </button>
        </Link>
      </div> 
    </div></div>
  );
};

export default TodoList;