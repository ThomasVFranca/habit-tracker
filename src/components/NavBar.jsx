import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui'; 

export default function NavBar({ setShowPomo, setShowTaskList}) {
  const [localShowPomo, setLocalShowPomo] = useState(false);
  const [localShowTaskList, setLocalShowTaskList] = useState(false);

  const shouldShowPomo = (event) => {
    event.preventDefault();

    if (localShowPomo) {
      setShowPomo(false);
      setLocalShowPomo(false);
      
      let options = { to: '#pomo-activate-btn', className: 'pomo-activate-btn' };
      $('.pomo-container').effect('transfer', options, 680);
    } else {
      setShowPomo(true);
      setLocalShowPomo(true); 
    }
  }

  const shouldShowTaskList = (event) => {
    event.preventDefault();

    if (localShowTaskList) {
      setShowTaskList(false);
      setLocalShowTaskList(false);
      
      let options = { to: '#tasklist-activate-btn', className: 'tasklist-activate-btn' };
      $('.todo-card-container').effect('transfer', options, 680);
    } else {
      setShowTaskList(true);
      setLocalShowTaskList(true);
    }
  }
  
  return (
    <nav>
      <Link onClick={ shouldShowPomo }>Hábitos</Link>
      <Link
        id='tasklist-activate-btn'
        className='tasklist-activate-btn'
        onClick={ shouldShowTaskList }
      >Tarefas</Link>
      <Link 
        id='pomo-activate-btn'
        className='pomo-activate-btn'
        onClick={ shouldShowPomo }
      >
        Pomodoro
      </Link>
    </nav>
  )
}
