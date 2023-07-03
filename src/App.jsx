import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUpPage'

function App() {
  
  return (

    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login />} />
      <Route path = "/cadastro" element = {< SignUp />} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
