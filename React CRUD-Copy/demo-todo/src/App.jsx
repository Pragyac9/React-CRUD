import { useState } from "react";
import "./components/style.css"
import { TodoProvider } from "./context/TodoContext";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="todo-app">
        <div className="todo">
          <h1 className="todo-heading">Todo List</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
