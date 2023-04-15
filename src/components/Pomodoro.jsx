import React, { useEffect, useRef, useState } from 'react'
import $ from "jquery";
import playPomoIcon from '../images/icons8-start-50.png';
import stopPomoIcon from '../images/icons8-stop-64.png';
import resetPomoIcon from '../images/icons8-restart.svg';

export default function Pomodoro() {
  let [seconds, setSeconds] = useState(1500);
  let [minutes, setMinutes] = useState(25);
  
  let timerId = useRef();
  let secondCount = useRef();

  useEffect(() => {
    $(".pomo-container" ).draggable();      
  }, [])

  const startPomo = () => {
    timerId.current = setInterval(() => {
      setSeconds(prev => prev - 1);
      secondCount.current -= 1;

      if (secondCount % 60 === 0) {
        setMinutes(prev => prev - 1);
      }
    }, 1000)
  }

  const stopPomo = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  }

  const resetPomo = () => {
    stopPomo();
    setSeconds(1500);
  }
 
  return (
    <div className="pomo-container">
      <h3>Pomodoro</h3>
      <hr />
      <p>{/* { minutes }: */}{ seconds }</p>
      <div className="pomo-btn-container">
        <button onClick={ startPomo }>
          <img src={ playPomoIcon } alt="play-pomo-icon"></img>
        </button>
        <button onClick={ stopPomo }>
          <img src={ stopPomoIcon } alt="stop-pomo-icon"></img> 
        </button>
        <button onClick={ resetPomo }>
          <img src={ resetPomoIcon } alt="reset-pomo-icon"></img>
        </button>
      </div>
    </div>
  )
}
