import React, { useState } from "react";
import "./App.css";
import Header from "../src/components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import SelectFilter from "./components/SelectFilter";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  // const [filterTodo, setFilterTodo] = useState([]);

  // const filterHandler = () => {
  //   switch (status) {
  //     case "completed":
  //       setFilterTodo(todos.filter((todo) => todo.completed === true));
  //       break;
  //     case "uncompleted":
  //       setFilterTodo(todos.filter((todo) => todo.completed === false));
  //       break;
  //       setFilterTodo(todos);
  //   }
  // };
  return (
    <div className="App">
      <Header>
        {/* <SelectFilter setStatus={setStatus} /> */}
        <TodoForm
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
      </Header>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
