import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { NotFound } from './components/notFound/NotFound'
import { beersData } from './data/beersData'
import Dashboard from './components/dashboard/dashboard'


function App() {

  return (
    <div className='d-flex flex-column align-items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/library' element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
