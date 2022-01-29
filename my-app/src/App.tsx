import React, { useState } from 'react';
import './App.css';
import Header from '../src/components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
        <Header/>
        <TodoForm setInputText={setInputText}/>
        <TodoList/>
    </div>
  );
}

export default App;
