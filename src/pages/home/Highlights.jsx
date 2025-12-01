import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { convertToDate } from "../../utils/formatTime"
import { cloudiness } from './thresholds/Cloudiness'
import { feelsLike } from './thresholds/FeelsLike'
import { humidity } from './thresholds/Humidity'
import { visibility } from './thresholds/Visibility'
import { windStatus } from './thresholds/WindStatus'

export function Highlights({ currentCity, loading, setLoading }) {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 900)
    }, [loading])

    function viewForecastPage(city) {
        navigate(`forecast/?city=${city}`)
    }

    return (
        <>
            {currentCity
                ?
                <>
                    <div className={`w-full h-full ${loading ? 'flex' : 'hidden'} justify-center items-center`}>
                        <img src="/spinner.gif" alt="Loading Gif" />
                    </div>
                    <div className={`${loading ? 'hidden' : 'grid'} grid-cols-4 gap-6 w-full h-full`}>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                            <h3 className="font-bold mb-4">Sunrise</h3>
                            <p>{convertToDate(currentCity.sys.sunrise, false)}</p>
                        </div>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                            <h3 className="font-bold mb-4">Sunset</h3>
                            <p>{convertToDate(currentCity.sys.sunset, false)}</p>
                        </div>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                            <h3 className="font-bold mb-4">Feels like</h3>
                            <p>{currentCity.main.feels_like}°C</p>
                            <p>{feelsLike(currentCity.main.feels_like)}</p>
                        </div>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                            <h3 className="font-bold mb-4">Wind Status</h3>
                            <p>{(currentCity.wind.speed * 3.6).toFixed(2)} km/h</p>
                            <p>{windStatus(currentCity.wind.speed)}</p>
                        </div>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                            <h3 className="font-bold mb-4">Humidity</h3>
                            <p>{currentCity.main.humidity}%</p>
                            <p>{humidity(currentCity.main.humidity)}</p>
                        </div>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    shadow-black hover:translate-y-[-3px]">
                            <h3 className="font-bold mb-4">Cloudiness</h3>
                            <p>{currentCity.clouds.all}%</p>
                            <p>{cloudiness(currentCity.clouds.all)}</p>
                        </div>
                        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-black shadow-2xl 
                    transition-all duration-300 hover:translate-y-[-3px]">
                            <h3 className="font-bold mb-4">Visibility</h3>
                            <p>{currentCity.visibility / 1000} km</p>
                            <p>{visibility(currentCity.visibility / 1000)}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center rounded-xl h-full
                    bg-black text-white text-3xl cursor-pointer transition-all duration-300 hover:scale-105
                    active:scale-95 shadow-black shadow-2xl">
                            <button
                                className="w-full h-full"
                                onClick={() => viewForecastPage(currentCity.name)}
                            >View Forecast </button>
                        </div>
                    </div>
                </>
                :
                <div className="w-full h-full flex justify-center items-center">
                    <img src="/spinner.gif" alt="Loading Gif" />
                </div>
            }
        </>
    )
}