import React from "react";
import './todoitem.scss';


const ToDoItem = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
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
      <li className={`todo___item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <div className="todo__wrapper">
      <button onClick={completeHandler} className="complete-btn">
      <i class="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="delete-btn">
      <i class="far fa-trash-alt"></i>
      </button>
      </div>
    </div>
  );
};

export default ToDoItem;
