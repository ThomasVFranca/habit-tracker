import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Pomodoro from './components/Pomodoro';
import TodoList from './components/TodoList';
import HabitList from './components/HabitList';
import Lofibox from './components/LofiBox';

export default function App() { 
  const [habitList, setHabitList] = useState([]);
  const [showPomo, setShowPomo] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [showLofiBox, setShowLofiBox] = useState(false);

  useEffect(() => {
    const recoveredHabitList = localStorage?.getItem('habitList');
    recoveredHabitList !== null && setHabitList(JSON.parse(recoveredHabitList));
  }, [])

  return (
    <div id="aaa">
      <Header 
        setShowPomo={ setShowPomo }
        setShowTaskList={ setShowTaskList }
        setShowLofiBox={ setShowLofiBox }
      />

    <main>
      <div id="left">
        { showTaskList && <TodoList /> }
        { showPomo && <Pomodoro /> }
      </div>    
      <div id="center">
        <HabitList 
          habitList={ habitList }
          setHabitList={ setHabitList }
          />
      </div>
      <div id="right">
        { showLofiBox && <Lofibox /> }
      </div>
    </main>

      <div id="bottom-padding" />
      <Footer />
    </div>
  )
}

