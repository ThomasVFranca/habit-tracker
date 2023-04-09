import React, { useEffect, useState } from 'react'
import HabitCard from './components/HabitCard'
import Header from './components/Header';
import Footer from './components/Footer';
import Pomodoro from './components/Pomodoro';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

export default function App() {
  const [habitList, setHabitList] = useState([]);
  const [habitInput, setHabitInput] = useState('');
  const [showPomo, setShowPomo] = useState(false);

  useEffect(() => {
    const recoveredHabitList = localStorage?.getItem('habitList');
    recoveredHabitList !== null && setHabitList(JSON.parse(recoveredHabitList));
  }, [])

  const handleInput = ({ target: { value } }) => {
    setHabitInput(value);
  }

  const addHabit = (event) => {
    event.preventDefault();

    setHabitList([...habitList, {
      habit: habitInput, 
      dayCount: 0,
    }]);

    localStorage.setItem('habitList', JSON.stringify([...habitList, {
      habit: habitInput,
      dayCount: 0,
    }]));

    setHabitInput('');
  }
  
  useEffect(() => {
    $('.habit-card').effect('slide', {}, 800);
    // setTimeout(() => $('.day-box').effect('highlight', {}, 200), 800);
  }, [])

  return (
    <div>
      <Header setShowPomo={ setShowPomo }/>
      <form
        id="habit-forms"
        className="habit-forms"
        onSubmit={ addHabit }
      >
        <input 
          name="habit-input"
          type="text"
          value={ habitInput }
          className="habit-input"
          onChange={ handleInput }
        />
        <button
          onClick={ addHabit }
          className="add-habit-button"
        >
          Adicionar Hábito
        </button>
      </form>
      <div className="habit-card-container">
        { habitList.map(({ habit, dayCount }, index) => {
          return (
            <HabitCard 
              habit={ habit }
              key={ index }
              habitList={ habitList }
              setHabitList={ setHabitList }
              dayCount={ dayCount }
            />);
        })}
      </div>

      { showPomo && <Pomodoro /> }
      <div id="bottom-padding" />
      <Footer />
    </div>
  )
}

