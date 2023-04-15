import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Pomodoro from './components/Pomodoro';
import TodoList from './components/TodoList';
import HabitList from './components/HabitList';
import Lofibox from './components/LofiBox';

export default function App() { 
  const [habitList, setHabitList] = useState([]);
  const [habitInput, setHabitInput] = useState('');
  const [showPomo, setShowPomo] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [showLofiBox, setShowLofiBox] = useState(false);

  useEffect(() => {
    const recoveredHabitList = localStorage?.getItem('habitList');
    recoveredHabitList !== null && setHabitList(JSON.parse(recoveredHabitList));
  }, [])

  const handleInput = ({ target: { value } }) => {
    setHabitInput(value);
  }

  const addHabit = (event) => {
    event.preventDefault();

    let newHabit = {
      habit: habitInput,
      dayCount: 0,
    }

    setHabitList([...habitList, newHabit]);

    localStorage.setItem('habitList', JSON.stringify([...habitList, newHabit]));

    setHabitInput('');
  }

  return (
    <div id="aaa">
      <Header 
        setShowPomo={ setShowPomo }
        setShowTaskList={ setShowTaskList }
        setShowLofiBox={ setShowLofiBox }
      />
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


      <HabitList habitList={ habitList } setHabitList={ setHabitList } />

      { showPomo && <Pomodoro /> }
      { showTaskList && <TodoList /> }
      { showLofiBox && <Lofibox /> }

      <div id="bottom-padding" />
      <Footer />
    </div>
  )
}

