import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const [todos ,setTodos ,search ]= useContext(TodoContext)

 const filteredSearch = todos.filter((todo) =>
   todo.title.toLowerCase().includes(search.toLowerCase())
 );

  return filteredSearch.length > 0 ? (
    filteredSearch.map((item) => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      );
    })
  ) : (
    <h4 className="no-data">No Todo Found...Please add some</h4>
  );
}

export default TodoList