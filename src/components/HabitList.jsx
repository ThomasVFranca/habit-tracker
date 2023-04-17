import React, { useEffect, useState } from 'react'
import HabitCard from './HabitCard'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

export default function HabitList({ 
  habitList,
  setHabitList,
}) {
  const [date, setDate] = useState('0');
  const [habitInput, setHabitInput] = useState('');

  useEffect(() => {
    const recoveredHabitList = localStorage?.getItem('habitList');
    recoveredHabitList !== null && setHabitList(JSON.parse(recoveredHabitList));
    // $('.habit-card').effect('slide', {}, 1000);
    $(".habit-card-box" ).sortable();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    const currentDate = `${currentDay}/${currentMonth}/${currentYear}`

    setDate(currentDate);

  }, [setHabitList])

  const handleInput = ({ target: { value } }) => {
    setHabitInput(value);
  }

  const addHabit = (event) => {
    event.preventDefault();

    let newHabit = {
      habit: habitInput,
      dayCount: 0,
    }

    const updatedHabitList = [...habitList, newHabit] 

    setHabitList(updatedHabitList);
    localStorage.setItem('habitList', JSON.stringify(updatedHabitList));

    setHabitInput('');
  }

  return (
    <div className="habit-card-container" draggable="false">

      <h3>Lista de Hábitos</h3>
      <hr />

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
          <p className="date-stamp">{ date }</p>
        </form>

      <div className="habit-card-box">
        { habitList.map(({ habit, dayCount }, index) => ((
        <HabitCard
          habit={ habit }
          key={ index }
          habitList={ habitList }
          setHabitList={ setHabitList }
          dayCount={ dayCount }
        />))
        )}
      </div>
    </div>
  )
}
