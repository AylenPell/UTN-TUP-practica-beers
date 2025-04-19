import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { NotFound } from './components/notFound/NotFound'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/auth/login/Login'


function App() {

  return (
    <div className='d-flex flex-column align-items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/brewery' element={<Dashboard />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
