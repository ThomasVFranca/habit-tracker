import React from 'react'
import NavBar from './NavBar'

export default function Header({ setShowPomo, setShowTaskList, setShowLofiBox}) {
  return (
    <header>
        <h1>Rastreador de Hábitos</h1>
        <hr />
        <NavBar 
          setShowPomo={ setShowPomo }
          setShowTaskList={ setShowTaskList}
          setShowLofiBox={ setShowLofiBox }
        />
        <hr />
    </header>
  )
}
