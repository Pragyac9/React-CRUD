import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import "../components/style.css";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos , search , setSearch] = useContext(TodoContext);
  

  const Add = (e) => {
    e.preventDefault();

    if ("" === input || undefined === input) {
      alert("Please Enter a Task");
      return;
    }

    const newTodos = [
      ...todos,
      { id: uuidv4(), title: input, completed: false },
    ];
    setTodos(newTodos);
    setInput("");
  };
const handleSearchText =(value)=>{
setSearch(value);
}



  useEffect(()=>{
localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  return (
    <>
        <div className="search-container">
          <input className="search-input"
            type="search"
            name=""
            value={search}
            onChange={(e) => handleSearchText(e.target.value)}
            placeholder="          Search-bar "
          />
        </div>
      <div className="from-container">
        <input
          className="form-input"
          type="text"
          name=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="  Enter your todos....."
        />
        <button className="form-button" onClick={Add}>
          Add +
        </button>
      </div>
    </>
  );
};

export default TodoForm;
