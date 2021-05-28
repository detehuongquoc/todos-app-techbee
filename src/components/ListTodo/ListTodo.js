import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import Todo from "../Todo/Todo";
import "./ListTodo.css";

const ListTodo = () => {
  const { listData, addTodo } = useContext(TodoContext);
  const [todos, setTodos] = useState([]);
  const [searchTodo, setSearchTodo] = useState("");
  const [checkToggle, setCheckToggle] = useState(true);
  const activeTodo = listData.filter((todo) => todo.completed === "active");
  const handleToggleAll = () => {
    if (checkToggle) {
      setCheckToggle(!checkToggle);
      setTodos(activeTodo);
      return;
    }
    setCheckToggle(!checkToggle);
    setTodos(listData);
  };

  const handleFilterALl = () => {
    setTodos(listData);
  };
  const handleFilterDone = () => {
    const newListData = listData.filter((todo) => todo.completed === "done");
    setTodos(newListData);
  };
  const handleFilterActive = () => {
    const newListData = listData.filter((todo) => todo.completed === "active");
    setTodos(newListData);
  };

  const handleSearchTodo = () => {
    if (searchTodo.trim() === "") {
      setTodos(listData);
      return;
    }
    const newListData = listData.filter((todo) =>
      todo.content.toLowerCase().includes(searchTodo.toLowerCase())
    );
    setTodos(newListData);
  };

  useEffect(() => {
    setTodos(listData);
  }, [listData]);
  return (
    <>
      <div className="search-todo">
        <input
          placeholder="Search todo here"
          onChange={(e) => {
            setSearchTodo(e.target.value);
          }}
        />
        <button onClick={handleSearchTodo}>Search</button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
      <button className="toggle-btn" onClick={handleToggleAll}>
        Toggle All
      </button>
      <div className="filter-status">
        <span>Filter </span>
        <button className="btn-all" onClick={handleFilterALl}>
          All
        </button>
        <button className="no-border btn-done" onClick={handleFilterDone}>
          Done
        </button>
        <button className="no-border btn-active" onClick={handleFilterActive}>
          Active
        </button>
      </div>
    </>
  );
};

export default ListTodo;
