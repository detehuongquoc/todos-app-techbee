import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./AddTodo.css";

const AddTodo = () => {
  const { listData, addTodo } = useContext(TodoContext);
  const handleNewTodo = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo(e.target.value);
    }
  };
  return (
    <>
      <input
        className="inputTodo"
        placeholder="Enter Todo Name Here"
        onKeyDown={handleNewTodo}
      />
    </>
  );
};

export default AddTodo;
