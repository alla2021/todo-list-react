import React from "react";
import ToDoItem from "../ToDoItem";
import PropTypes from "prop-types";

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

TodoList.propTypes = {
  optionalUnion: PropTypes.shape({
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.array.isRequired,
  }),
};

export default TodoList;
