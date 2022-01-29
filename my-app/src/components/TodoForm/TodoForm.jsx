import React from "react";

function TodoForm({setInputText}) {
  const inputTextHandler = e => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  return (
    <form className="todo-form">
      <input
      onChange={inputTextHandler}
        type="text"
        placeholder="Add a todo"
        name="text"
        className="todo-input"
        // onChange={handelChange}
      />
      <button className="todo-btn" type="submit">+ Add</button>
    </form>
  );
}

export default TodoForm;
