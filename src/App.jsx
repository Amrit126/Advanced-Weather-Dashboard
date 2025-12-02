import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Forecast } from './pages/forecast/Forecast'
import { Favorites } from './pages/favorites/Favorites'
import { NotFound } from './pages/not found/NotFound'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState(['Kathmandu', 'Dubai'])
  const apiKey = "ebd5f17ff6f850fedcf9387d831c41b1"

  return (
    <Routes>
      <Route path="/" element={<HomePage
        loading={loading}
        setLoading={setLoading}
        favorites={favorites}
        setFavorites={setFavorites}
        apiKey={apiKey}
      />} />

      <Route path="/forecast" element={<Forecast
        apiKey={apiKey}
        favorites={favorites}
        setFavorites={setFavorites}
      />} />

      <Route path="/favorites" element={<Favorites
        apiKey={apiKey}
        favorites={favorites}
        setFavorites={setFavorites}
      />} />

      <Route path="*" element={<NotFound />} />
    </Routes >
  )
}

export default App
