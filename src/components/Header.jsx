import React from 'react'
import NavBar from './NavBar'

export default function Header({ setShowPomo, setShowTaskList }) {
  return (
    <header>
        <h1>Rastreador de Hábitos</h1>
        <hr />
        <NavBar setShowPomo={ setShowPomo } setShowTaskList={ setShowTaskList }/>
        <hr />
    </header>
  )
}
