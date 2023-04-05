import React, { useEffect, useState } from 'react'
import HabitCard from './components/HabitCard'
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [habitList, setHabitList] = useState([]);
  const [habitInput, setHabitInput] = useState('');

  useEffect(() => {
    const recoveredHabitList = localStorage.getItem('habitList');
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

  return (
    <div>
      <Header />
      <form 
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

      {
        habitList.map(({ habit, dayCount }, index) => {
          return (
            <HabitCard 
              habit={ habit }
              key={ index }
              habitList={ habitList }
              setHabitList={ setHabitList }
              dayCount={ dayCount }
            />);
        })
      }
      <Footer />
    </div>
  )
}

