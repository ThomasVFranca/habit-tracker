import React, { useEffect, useState } from 'react';
// import $ from 'jquery';

export default function TodoCard({ todoList, setTodoList }) {
  const [showInput, setShowInput] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // $( "input" ).checkboxradio();
  }, []);

  const handleInput = ({ target: { value }}) => {
    setInputValue(value);
  }

  const setTodo = (event) => {
    event.preventDefault();
    setShowInput(false);

    const localstorageTodoList = JSON.parse(localStorage.getItem('todoList'));
    
    localStorage.setItem(
      'todoList', JSON.stringify([...localstorageTodoList, inputValue])
    );

    setTodoList([...todoList, inputValue]);
  }

  return (
    <div className="todo-card">
      <input type="checkbox" />
      { showInput
      ?  (<form onSubmit={ setTodo }>
            <input 
              type="text" 
              onChange={ handleInput }
              autoFocus
            />
          </form>)
      :  (<p>{ inputValue }</p>) }
    </div>
  )
}
