import React from 'react';
import removeIcon from '../images/remove-circle-svgrepo-com.svg';

export default function TodoCard({ todo, index, removeTodo }) {
  return (
    <div className="todo-card">
      <input className="todo-checkbox" type="checkbox" />
      <p className="todo-text">{ todo }</p>
      <button
        id={ todo }
        className="todo-delete-btn"
        onClick={ removeTodo }
      >
        <img
          id={ todo }
          src={ removeIcon }
          alt="remove-btn-icon" 
        />
      </button>
    </div>
  )
}
