import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export default function Pomodoro() {
  let [seconds, setSeconds] = useState([1500]);
  
  const startPomo = () => {
    setInterval(setSeconds(seconds), 1000);
  };  
  
  // useEffect(() => startPomo(), [seconds])
  
  useEffect(() => {
    $(".pomo-container" ).draggable(); 

    // const options = { to: '#habit-forms', className: 'habit-forms' };
    // $('.pomo-container').effect('transfer', options, 800);
  }, [])

  return (
    <div className="pomo-container">
        <h3>Pomodoro 🍎</h3>
        <p>{ seconds }</p>
        <button onClick={ startPomo }>Iniciar</button>
    </div>
  )
}
