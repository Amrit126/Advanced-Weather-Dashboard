import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { FavoritesCard } from './FavoritesCard'

export function Favorites({ apiKey, favorites, setFavorites, updateLocalStorage }) {
    const [cities, setCities] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (favorites) {
                const promises = favorites.map(async (favorite) => {
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${favorite}&appid=${apiKey}&units=metric`
                    const response = await axios.get(url)
                    const data = response.data
                    return {
                        name: data.name,
                        icon: data,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        temp: data.main.temp,
                        main: data.weather[0].main
                    }
                })

                try {
                    const results = await Promise.all(promises)

                    setCities(results)
                    console.log(results)
                } catch (e) {
                    console.log(e.msg)
                }
            }
        }

        fetchData()

    }, [favorites, setCities, apiKey])

    return (
        <>
            <Header />
            <h2
                className="text-center py-8 text-5xl bg-gray-100 w-full font-extrabold"
            >Favorites</h2>
            <div className="h-full bg-gray-100 flex flex-wrap justify-center gap-8 p-4">
                {favorites.length > 0 ?
                    <FavoritesCard favorites={favorites} setFavorites={setFavorites} cities={cities}
                        updateLocalStorage={updateLocalStorage} />
                    :
                    <div className='h-screen w-full text-xl md:text-4xl flex mt-4 justify-center font-semibold'>
                        <p>No Favorite Location :(</p>
                    </div>
                }
            </div>
        </>
    )
}