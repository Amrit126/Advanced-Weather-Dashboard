import { useNavigate } from 'react-router'
import { getWeatherImage } from "../../utils/pickCorrectIcon"

export function FavoritesCard({ favorites, setFavorites, cities }) {
    const navigate = useNavigate()

    function redirectToHomePage(city) {
        navigate(`/?city=${city}`)
    }

    function redirectToForecastPage(city) {
        navigate(`/forecast/?city=${city}`)
    }

    return (
        cities
            ?
            cities.map(city => {
                return (
                    <div key={city.sunrise} className="flex flex-col items-center justify-center bg-linear-to-r
                     from-blue-600 to-blue-400 gap-2 p-2 text-2xl font-bold rounded-2xl shadow-black shadow-2xl 
                     transition-all duration-300 hover:scale-102">
                        <div className="flex justify-between w-full">
                            <div></div>
                            <p>{city.name}</p>
                            <button
                                title="Remove from favorites"
                                className="mr-2 cursor-pointer transition-all duration-300 hover:opacity-80">X</button>
                        </div>
                        <img src={`/weather-icons/${getWeatherImage(city.icon, city.sunrise, city.sunset)}`}
                            alt="Image Icon" />
                        <p>{city.temp} °C 🌡️</p>
                        <p>{city.main}</p>
                        <div className="flex gap-2">
                            <button
                                className="bg-black p-4 text-white rounded-lg
                        transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-102"
                                onClick={() => redirectToHomePage(city.name)}
                            >More Details</button>
                            <button className="bg-black p-4 text-white rounded-lg
                        transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-102"
                                onClick={() => redirectToForecastPage(city.name)}
                            >View Forecast</button>
                        </div>
                    </div>
                )
            })
            :
            <div>
                <p>Loading...</p>
            </div>
    )
}