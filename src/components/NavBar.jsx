import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui'; 

export default function NavBar({ setShowPomo }) {
  const [localShowPomo, setLocalShowPomo] = useState(false);
  
  const shouldShowPomo = (event) => {
    event.preventDefault();
    let options = {};

    if (localShowPomo) {
      setShowPomo(false);
      setLocalShowPomo(false);
      
      options = { to: '#pomo-activate-btn', className: 'pomo-activate-btn' };
      
      $('.pomo-container').effect('transfer', options, 680);
    } else {
      setShowPomo(true);
      setLocalShowPomo(true);
      
      // options = { to: '#habit-forms', className: 'habit-forms' };

      // $('.pomo-container').effect('transfer', options, 800);
    }

  }
  
  return (
    <nav>
      <Link to='/habits'>Hábitos</Link>
      <Link to='/tasks'>Tarefas</Link>
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
