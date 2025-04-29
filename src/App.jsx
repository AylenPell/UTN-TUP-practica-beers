import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { NotFound } from './components/notFound/NotFound'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/auth/login/Login'
import Protected from './components/Protected'
import { useState } from 'react'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () =>{
    setLoggedIn(true)
  }

  const handleLogout = () =>{
    setLoggedIn(false)
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />}/>
          <Route path='/brewery' 
            element={
              <Protected isSignedIn={loggedIn}>
                <Dashboard onLogout={handleLogout}/>
              </Protected>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
