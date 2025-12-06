import { useNavigate } from 'react-router'
import { getWeatherImage } from "../../utils/pickCorrectIcon"

export function FavoritesCard({ favorites, setFavorites, cities, updateLocalStorage }) {
    const navigate = useNavigate()

    function redirectToHomePage(city) {
        navigate(`/?city=${city}`)
    }

    function redirectToForecastPage(city) {
        navigate(`/forecast/?city=${city}`)
    }

    function removeCityFromFavorites(city) {
        let temp = favorites.filter(fav => fav !== city)
        setFavorites(temp)
        updateLocalStorage(temp)
    }

    return (
        cities.length > 0
            ?
            cities.map(city => {
                return (
                    <div key={city.sunrise} className="flex flex-col items-center justify-center bg-linear-to-r
                     from-blue-600 to-blue-400 gap-2 p-4 text-sm md:text-2xl font-bold rounded-2xl shadow-black shadow-2xl 
                     transition-all duration-300 hover:scale-102 md:w-[40%] lg:w-[25%]">
                        <div className="flex justify-between w-full">
                            <div></div>
                            <p>{city.name}</p>
                            <button
                                title="Remove from favorites"
                                className="mr-2 cursor-pointer transition-all duration-300 hover:opacity-80"
                                onClick={() => removeCityFromFavorites(city.name)}
                            >X</button>
                        </div>
                        <img src={`/weather-icons/${getWeatherImage(city.icon, city.sunrise, city.sunset)}`}
                            alt="Image Icon" />
                        <p>{city.temp} °C 🌡️</p>
                        <p>{city.main}</p>
                        <div className="flex justify-center gap-2 w-full">
                            <button
                                className="bg-black p-2 lg:p-4 text-white rounded-lg
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
            <div className="w-full h-1/2 flex justify-center">
                <img src="/spinner.gif" alt="Loading Gif" />
            </div>
    )
}