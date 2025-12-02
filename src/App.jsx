import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Forecast } from './pages/forecast/Forecast'
import { Favorites } from './pages/favorites/Favorites'
import { NotFound } from './pages/not found/NotFound'
import './App.css'

function App() {
  const [currentCity, setCurrentCity] = useState()
  const [loading, setLoading] = useState(true)
  const apiKey = "ebd5f17ff6f850fedcf9387d831c41b1"

  return (
    <Routes>
      <Route path="/" element={<HomePage
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        loading={loading}
        setLoading={setLoading}
        apiKey={apiKey}
      />} />

      <Route path="/forecast" element={<Forecast
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        apiKey={apiKey}
      />} />

      <Route path="/favorites" element={<Favorites
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        apiKey={apiKey}
      />} />

      <Route path="*" element={<NotFound />} />
    </Routes >
  )
}

export default App
