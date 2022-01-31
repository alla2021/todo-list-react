import React from "react";
import "./todoitem.scss";
import PropTypes from "prop-types";

const ToDoItem = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log('delete todo',todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo__item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="todo__wrapper">
        <input
          type="checkbox"
          onClick={completeHandler}
          className="complete-checkbox"
          ></input>
        <button onClick={deleteHandler} className="delete-btn">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

ToDoItem.propTypes = {
  optionalUnion: PropTypes.shape({
    text: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    todo: PropTypes.object.isRequired,
    setTodos: PropTypes.array.isRequired,
  }),
};

export default ToDoItem;
