import React, { useState, useContext } from "react";
import "./Todo.css";
import { TodoContext } from "../../context/TodoContext";
import { IoCloseOutline } from "react-icons/io5";

const Todo = (props) => {
  const [status, setStatus] = useState(props.completed === "done");
  const { listData, removeTodo, updateTodo } = useContext(TodoContext);

  const handleRemoveTodo = () => {
    removeTodo(props.id);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="todo-item">
        <p
          style={status ? { opacity: "0.5" } : { opacity: "1" }}
          onClick={() => {
            setStatus(!status);
            updateTodo(props.id - 1);
          }}
        >
          <input
            type="checkbox"
            checked={status}
            onChange={() => setStatus(!status)}
          />
          {props.content}
        </p>
      </div>
      <IoCloseOutline className="todo-item-icon" onClick={handleRemoveTodo} />
    </div>
  );
};

export default Todo;
