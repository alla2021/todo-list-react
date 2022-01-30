import React from "react";
import ToDoItem from "../ToDoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
  );
};

export default TodoList;
