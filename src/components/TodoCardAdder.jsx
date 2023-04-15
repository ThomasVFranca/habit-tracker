import React, { useState } from 'react';
// import $ from 'jquery';
import removeIcon from '../images/remove-circle-svgrepo-com.svg';

export default function TodoCardAdder({ 
    key, 
    todo, 
    oldTodoList, 
    setOldTodoList, 
    newTodoList, 
    setNewTodoList,
    setShowCardAdder,
  }) {

  const [showInput, setShowInput] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInput = ({ target: { value }}) => {
    setInputValue(value);
  }

  const setTodo = (event) => {
    event.preventDefault();
    setShowInput(false);

    const filteredNewList = newTodoList.filter((t) => t !== '');
    const totalTodoList = [...oldTodoList, ...filteredNewList, inputValue]
    
    localStorage.setItem(
      'todoList', JSON.stringify(totalTodoList)
    );
    
    setOldTodoList([...oldTodoList, inputValue]);
    setShowCardAdder(false);
    // setNewTodoList([...filteredNewList, inputValue]);
  }

  return (
    <div className="todo-card">
      <form className="todo-card-form" onSubmit={ setTodo }>
        
        <input className="todo-checkbox" type="checkbox" />
        { showInput
        ? <input
            className="todo-input"
            type="text" 
            onChange={ handleInput }
            autoFocus
          />
        : <p className="todo-text">{ inputValue }</p> }
      </form>
      <button
        className="todo-delete-btn"
        name={ key }
      >
        <img 
          src={ removeIcon }
          alt="remove-btn-icon"
        />
      </button>
    </div>
  )
}
