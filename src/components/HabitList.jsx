import React, { useEffect } from 'react'
import HabitCard from './HabitCard'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

export default function HabitList({ habitList, setHabitList }) {

  useEffect(() => {
    const recoveredHabitList = localStorage?.getItem('habitList');
    recoveredHabitList !== null && setHabitList(JSON.parse(recoveredHabitList));
    $('.habit-card').effect('slide', {}, 1000);
    $(".habit-card-container" ).sortable();
  }, [setHabitList])

  return (
    <div className="habit-card-container" draggable="false">
      { habitList.map(({ habit, dayCount }, index) => {
        return (
          <HabitCard
            habit={ habit }
            key={ index }
            habitList={ habitList }
            setHabitList={ setHabitList }
            dayCount={ dayCount }
          />)}
        )}
    </div>
  )
}
