import React, { createContext, useState } from "react";
import Data from "../components/Data";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [listData, setListData] = useState(Data);
  const addTodo = (todo) => {
    setListData([
      ...listData,
      {
        id: listData.length + 1,
        content: todo,
        completed: "active",
      },
    ]);
  };

  const removeTodo = (id) => {
    const newListData = listData.filter((todo) => todo.id !== id);
    setListData(newListData);
  };
  const updateTodo = (id) => {
    const newListData = [...listData];
    const status = newListData[id].completed;
    newListData[id] = {
      ...newListData[id],
      completed: status === "done" ? "active" : "done",
    };
    setListData(newListData);
  };
  return (
    <TodoContext.Provider value={{ listData, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
