import { useEffect } from 'react'
import { convertToDate } from "../../utils/formatTime"

export function CurrentWeather({ currentCity, loading, setLoading }) {

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 900)
    }, [loading, setLoading])

    return (
        <>
            {currentCity
                ?
                <>
                    <div className={`${loading ? 'flex' : 'hidden'} w-full h-full gap-4 justify-center items-center`}>
                        <img src="/spinner.gif" />
                    </div>
                    <div className={`${loading ? 'hidden' : 'flex'} w-full h-full gap-4`}>

                        <div className="image w-[45%] border-amber-700 border-2">
                            <img src="" alt="Image icon" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-col w-full text-3xl font-medium">
                            <div className="flex p-2 justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                                <p className="text-6xl font-bold">{currentCity.main.temp}°C 🌡️</p>
                            </div>
                            <div className="flex p-2  justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                                <p>{currentCity.name}, {currentCity.sys.country} 📍</p>
                            </div>
                            <div className="flex p-2  justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                                <p>{convertToDate(currentCity.dt, true, currentCity.timezone)} 📅</p>
                            </div>
                            <div className="flex p-2 justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                                <p>{currentCity.weather[0].main} ☁️</p>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className={`flex w-full h-full gap-4 justify-center items-center`}>
                    <img src="/spinner.gif" />
                </div>
            }
        </>
    )
}