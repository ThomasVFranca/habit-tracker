import React, { useState } from 'react'
import '../styles/todolist.css';
import $ from 'jquery';
import { useEffect } from 'react';
import TodoCard from './TodoCard';
import StaticTodoCard from './StaticTodoCard';
const addTaskIcon = require('../images/icons8-add-new-50.png');

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [localstorageTodoList, setLocalStorageTodoList] = useState([]);

  useEffect(() => {
    $(".todo-card-container" ).draggable();
    $(".todo-card-box" ).sortable();

    const recoveredTodoList = localStorage.getItem('todoList');

    if (recoveredTodoList === null) {
      localStorage.setItem('todoList', JSON.stringify([]));
    } else {
      setTodoList(JSON.parse(recoveredTodoList))
      localStorage.setItem('todoList', recoveredTodoList)
      setLocalStorageTodoList(JSON.parse(recoveredTodoList));
    }

  }, [])

  useEffect(() => console.log(localstorageTodoList), [localstorageTodoList])

  const addTodo = () => {
    setTodoList([...todoList, 'a']);
  }

  return (
    <div className="todo-card-container">
      <div className="todolist-header">
        <h3>Lista de tarefas</h3>
        <button 
          className="add-todo-button"
          onClick={ addTodo }
        >
          <img src={ addTaskIcon } alt="add-todo-btn" />
        </button>
      </div>
      
      <hr />

      <div className="todo-card-box">
        { localstorageTodoList.map((todo) => (
          <StaticTodoCard todo={ todo } />
          )) }

        { todoList !== null
        && todoList.map((todo) => (
          <TodoCard 
            todoList={ todoList }
            setTodoList={ setTodoList }
          />
          )) }
      </div>
    </div>
    )
}
