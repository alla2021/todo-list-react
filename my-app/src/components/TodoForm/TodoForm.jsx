import React from "react";
import './form.scss';
// import SelectFilter from '../SelectFilter';

function TodoForm({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.trunc(Math.random() * 1000) + 1,
      },
    ]);
    setInputText("");
  };
  return (
    <>
      <form className="todo-form">
        <input
          onChange={inputTextHandler}
          type="text"
          placeholder="Add a todo"
          name="text"
         todo-input className="todo-input"
          value={inputText}
        />
        <button className="todo-btn" type="submit" onClick={submitTodoHandler}>
          <i class="fas fa-plus"></i>
        </button>
      </form>
    </>
  );
}

export default TodoForm;
