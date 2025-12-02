import { convertToDate } from "../../utils/formatTime"
import { getWeatherImage } from "../../utils/pickCorrectIcon"

export function HourlyCard({ forecast }) {
    return (
        forecast
            ?
            forecast.list.slice(0, 4).map(details => {
                return (
                    <div key={details.dt} className="flex flex-col items-center w-[20%] shadow-black shadow-2xl 
                    gap-2 text-2xl font-bold p-2 rounded-2xl bg-linear-to-r from-blue-600 to-blue-400
                    transition-all duration-300 hover:-translate-y-2.5">
                        <p>{convertToDate(details.dt, false, forecast.city.timezone)}</p>
                        <img
                            className='w-[80%]'
                            src={`/weather-icons/${getWeatherImage(details, forecast.city.sunrise,
                                forecast.city.sunset)}`}
                            alt="Weather Icon" />
                        <p>{details.main.temp} °C 🌡️</p>
                        <p>{details.weather[0].main}</p>
                    </div>
                )
            })
            :
            <div className="w-full h-full flex items-center justify-center">
                <img src="/spinner.gif" alt="Loading Gif" />
            </div>
    )
}