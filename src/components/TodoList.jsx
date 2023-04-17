import React, { useState, useEffect } from 'react'
import '../styles/todolist.css';
import $ from 'jquery';
import TodoCardAdder from './TodoCardAdder';
import TodoCard from './TodoCard';
const addTaskIcon = require('../images/icons8-add-new-50.png');

export default function TodoList() {
  const [oldTodoList, setOldTodoList] = useState([]);
  const [newTodoList, setNewTodoList] = useState([]);
  const [showCardAdder, setShowCardAdder] = useState(false);

  useEffect(() => {
    $(".todo-card-container" ).draggable();
    $(".todo-card-box" ).sortable();

    const recoveredTodoList = localStorage.getItem('todoList');

    if (recoveredTodoList === null) {
      localStorage.setItem('todoList', JSON.stringify([]));
    } else {
      setOldTodoList(JSON.parse(recoveredTodoList));
      
      localStorage.setItem('todoList', recoveredTodoList);
    }

    console.log(oldTodoList);
  }, [oldTodoList])

  const addTodo = () => {
    setNewTodoList([...newTodoList, '']);
    setShowCardAdder(true);
  }

  const removeTodo = ({ target: { id }}) => {
    let filteredOldTodoList = oldTodoList.filter((t) => t !== id);
    setOldTodoList(filteredOldTodoList);

    localStorage.setItem('todoList', JSON.stringify(filteredOldTodoList));
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
        { oldTodoList !== null && 
            oldTodoList.map((todo, index) => (
              <TodoCard 
                key={ `${todo} + ${index}` }
                index={ index }
                todo={ todo }
                removeTodo={ removeTodo }
              />
            ))}
        { showCardAdder &&
            <TodoCardAdder
              oldTodoList={ oldTodoList }
              setOldTodoList={ setOldTodoList }
              newTodoList={ newTodoList }
              setNewTodoList={ setNewTodoList }
              setShowCardAdder={ setShowCardAdder }
            />
        }
      </div>
    </div>
    )
}
