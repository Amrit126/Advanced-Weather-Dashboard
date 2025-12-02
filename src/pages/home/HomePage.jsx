import axios from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { Header } from '../../components/Header'
import './HomePage.css'
import { CurrentWeather } from './CurrentWeather'
import { Highlights } from './Highlights'
import { FavoriteButton } from '../../components/FavoriteButton'

export function HomePage({ currentCity, setCurrentCity, loading, setLoading, apiKey, favorites, setFavorites }) {
    const [searchParams] = useSearchParams()
    const city = searchParams.get('city') || "Kathmandu"

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        const fetchData = async () => {
            if (city) {
                try {
                    const response = await axios.get(url)
                    setLoading(true)
                    setCurrentCity(response.data)
                } catch (e) {
                    alert("Sorry!! No Match found")
                    console.log(e.status)
                }
            }
        }

        fetchData()
    }, [city, setLoading, setCurrentCity, apiKey])

    return (
        <>
            <Header />
            <div className="p-12 bg-gray-100">
                {/*Below div is for displaying current weather */}

                <h1 className="text-5xl font-extrabold">Current Weather</h1>

                <div className="mb-10 m-4 my-6 flex h-[300px] w-[90%] mx-auto p-4 
                bg-linear-to-r from-blue-300 to-blue-500  rounded-lg shadow-2xl transition-all duration-300
                hover:scale-105 shadow-gray-600">
                    <CurrentWeather currentCity={currentCity} loading={loading} setLoading={setLoading} />
                </div>

                {/*Below div is for displaying extra details */}
                <h2 className="text-5xl font-extrabold">Highlights</h2>

                <div className="mb-10 m-4 my-10 h-[250px] text-xl">
                    <Highlights currentCity={currentCity} loading={loading} setLoading={setLoading} />
                </div>

                {currentCity
                    ?
                    <FavoriteButton favorites={favorites} setFavorites={setFavorites} cityName={currentCity.name} />
                    :
                    <></>
                }
            </div>
        </>
    )
}