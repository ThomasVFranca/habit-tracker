import React from 'react'
import NavBar from './NavBar'

export default function Header({ setShowPomo }) {
  return (
    <header>
        <h1>Rastreador de Hábitos</h1>
        <hr />
        <NavBar setShowPomo={ setShowPomo }/>
        <hr />
    </header>
  )
}
