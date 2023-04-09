import React, { Component } from 'react'
import { days } from '../helpers/dayList';
import addLogo from '../images/add-plus-circle-svgrepo-com.svg';
import restartLogo from '../images/power-cycle-svgrepo-com.svg';
import removeLogo from '../images/remove-circle-svgrepo-com.svg';

export default class HabitCard extends Component {
  state = {
    dayCount: this.props.dayCount,
    workHabit: '',
  }

  addDay = () => {
    const { habit } = this.props;
    const { dayCount } = this.state;

    this.setState({
      dayCount: dayCount + 1,
    });

    const recoveredHabitList = JSON.parse(localStorage.getItem('habitList'));
    const updatedHabitList = recoveredHabitList.map((h) => {
      if (h.habit === habit) {
        return { habit, dayCount: dayCount + 1 };
      };
      return { habit: h.habit, dayCount: h.dayCount }
    });

    localStorage.setItem('habitList', JSON.stringify(updatedHabitList));
  }

  restartDays = () => {
    const { habit } = this.props;
    
    this.setState({
      dayCount: 0,
    })

    const recoveredHabitList = JSON.parse(localStorage.getItem('habitList'));
    const updatedHabitList = recoveredHabitList.map((h) => {
      if (h.habit === habit) {
        return { habit, dayCount: 0};
      };
      return { habit: h.habit, dayCount: h.dayCount }
    });

    localStorage.setItem('habitList', JSON.stringify(updatedHabitList));
  }


  removeHabit = ({ target: { name } }) => {
    const { habitList, setHabitList } = this.props;
    const newHabitList = habitList.filter(({ habit }) => habit !== name);

    setHabitList(newHabitList);
    localStorage.setItem('habitList', JSON.stringify(newHabitList));
  }
    
  render() {
    const { addDay, restartDays, removeHabit } = this;
    const { habit, index } = this.props;
    const { dayCount } = this.state;
  return (
    <div>
      <div
        id='habit-card'
        className="habit-card"
        key={ index }
      >
      <h4 className='habit-title'>
        { habit }
      </h4>

    <div className="days-container">
      {
        days.map((day) => (
          <div
            key={ day }
            className={`day-box ${day <= dayCount && 'done-day'}`}
          >
            { day }
          </div>
        ))
      }
    </div>

    <div className="habit-buttons-container">
      <button 
        className='restart-button habit-button'
        onClick={ addDay }
      >
        <img src={ addLogo } alt='add-icon'/>
      </button>
      <button 
        className='success-button habit-button'
        onClick={ restartDays }
      >
        <img src={ restartLogo } alt='restart-icon'/>
      </button>
      <button
        name={ habit }
        className='delete-button habit-button'
        onClick={ removeHabit }
      >
        <img src={ removeLogo } alt='remove-icon'/>
      </button>
    </div>
    {/* <button id="button" onClick={ this.runEffect }>aaa</button> */}
    </div>
  </div>
  )
  }
}
