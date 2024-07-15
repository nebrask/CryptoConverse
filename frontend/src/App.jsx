import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import NavBar from './pages/NavBar/NavBar'
import Home from './pages/HomeScreen/Home'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
