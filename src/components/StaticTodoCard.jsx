import React, { useEffect, useState } from 'react';
// import $ from 'jquery';

export default function StaticTodoCard({ todo }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // $( "input" ).checkboxradio();
  }, []);

  return (
    <div className="todo-card">
      <input type="checkbox" />
      <p>{ todo }</p>
    </div>
  )
}
