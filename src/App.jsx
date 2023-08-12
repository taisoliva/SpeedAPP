import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Pages/LoginPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './Pages/SignUpPage'
import { Studant } from './Pages/StudantPage'
import { UserProvider } from './context/UserContext'
import useToken from './hooks/useToken'
import { ToastContainer } from 'react-toastify'

function App() {

  return (

    <>
    <ToastContainer />
     <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={< SignUp />} />
            <Route path="/estudante" element={
              <ProtectedRouteGuard>
                < Studant />
              </ProtectedRouteGuard>
            } />


          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>
    {children}
  </>;
}

export default App
