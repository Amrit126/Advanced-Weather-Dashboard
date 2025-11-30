//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Forecast } from './pages/forecast/Forecast'
import { Favorites } from './pages/favorites/Favorites'
import { NotFound } from './pages/not found/NotFound'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  )
}

export default App
