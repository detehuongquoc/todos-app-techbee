import "./global.css";
import AddTodo from "./components/AddTodo/AddTodo";
import ListTodo from "./components/ListTodo/ListTodo";
import TodoContextProvider from "./context/TodoContext";

export default function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1>Todo App</h1>
        <AddTodo />
        <ListTodo />
      </div>
    </TodoContextProvider>
  );
}
