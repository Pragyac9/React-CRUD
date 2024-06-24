import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  const completedTodo = (e) => {
    const filterTodo = todos.map((item) => {
      if (item.id === e.target.value) {
        item.completed = false;
        if (e.target.checked) {
          item.completed = true;
        }
      }
      return item;
    });
    setTodos(filterTodo);
  };

const deleteTodo = (e)=>{
  e.preventDefault();


  const filterDelete = todos.filter((item)=>{
    return item.id !== e.target.id;
  })
  setTodos(filterDelete)
}


  return (
    <>
      <p className="todo-container">
        <input className="input-check"
          type="checkbox"
          name=""
          id={props.id}
          onChange={(e) => completedTodo(e)}
        />
        <label htmlFor={props.id}>{props.title}</label>
        <button type="button" className="deletebtn" id={props.id} onClick={e => deleteTodo(e)}>
          Delete
        </button>
      </p>
    </>
  );
};

export default Todo;
