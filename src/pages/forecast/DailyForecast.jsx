import { convertToDate } from "../../utils/formatTime"
import { getWeatherImage } from "../../utils/pickCorrectIcon"

export function DailyForecast({ forecast }) {
    let dt = 0
    let secondsInDay = 86400
    return (
        forecast
            ?
            forecast.list.map(weather => {
                let differenceInSeconds = weather.dt - dt

                if (differenceInSeconds >= secondsInDay) {
                    dt = weather.dt
                    return (
                        <div key={weather.dt} className="flex flex-col items-center p-4 text-2xl font-bold
                         bg-linear-to-r from-blue-600 to-blue-400 rounded-2xl shadow-black shadow-2xl gap-3
                         transition-all duration-300 hover:-translate-y-2.5 w-[25%]">
                            <p>{convertToDate(dt, true, forecast.city.timezone)}</p>
                            <img src={`/weather-icons/${getWeatherImage(weather, forecast.city.sunrise,
                                forecast.city.sunset)}`} />
                            <p title="Min/Max temperature">{weather.main.temp_min}/{weather.main.temp_max} °C 🌡️</p>
                            <p>{weather.weather[0].main}</p>
                        </div>
                    )
                }
            })
            :
            <div className="w-full h-full flex justify-center items-center">
                <img src="/spinner.gif" alt="Loading gif" />
            </div>
    )
}