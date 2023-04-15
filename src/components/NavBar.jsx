import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui'; 

export default function NavBar({ setShowPomo, setShowTaskList, setShowLofiBox}) {
  const [localShowPomo, setLocalShowPomo] = useState(false);
  const [localShowTaskList, setLocalShowTaskList] = useState(false);
  const [localShowLofiBox, setLocalShowLofiBox] = useState(false);

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

  const shouldShowLofiBox = (event) => {
    event.preventDefault();

    if (localShowLofiBox) {
      setShowLofiBox(false);
      setLocalShowLofiBox(false);
      
      let options = { to: '#lofi-activate-btn', className: 'lofi-activate-btn' };
      $('.lofi-box').effect('transfer', options, 680);
    } else {
      setShowLofiBox(true);
      setLocalShowLofiBox(true);
    }
  }
  
  return (
    <nav>
      <button
        to="/"
        id='tasklist-activate-btn'
        className='tasklist-activate-btn'
        onClick={ shouldShowTaskList }
      >
        Tarefas
      </button>
      <button 
        to="/"
        id='lofi-activate-btn'
        className='lofi-activate-btn'
        onClick={ shouldShowLofiBox }
      >
        Lofi  
      </button>
      <button 
        id='pomo-activate-btn'
        to="/"
        className='pomo-activate-btn'
        onClick={ shouldShowPomo }
      >
        Pomodoro
      </button>
    </nav>
  )
}
