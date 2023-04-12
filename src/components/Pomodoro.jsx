import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export default function Pomodoro() {
  let [seconds, setSeconds] = useState([1500]);
  
  const startPomo = () => {
    setInterval(setSeconds(seconds), 1000);
  };  

  // useEffect(() => startPomo(), [seconds])
  const runEffect = () => {
    $(
      $( ".pomo-container" ).show( 'blind', {}, 500)
    )
  }
  
  useEffect(() => {
    $(".pomo-container" ).draggable(); 
  }, [])

  return (
    <div className="pomo-container">
        <h3>Pomodoro</h3>
        <p>{ '25:00' /* seconds */ }</p>
        <button onClick={ startPomo }>Iniciar</button>
    </div>
  )
}
