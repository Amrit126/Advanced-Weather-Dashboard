import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { Header } from '../../components/Header'
import { HourlyCard } from './HourlyCard'
import { DailyForecast } from './DailyForecast'

export function Forecast({ apiKey }) {
    const [forecast, setForecast] = useState(null)
    const [searchParams] = useSearchParams()
    const city = searchParams.get('city') || 'Kathmandu'

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                console.log(response.data)
                setForecast(response.data)
            } catch (e) {
                console.log(e.status)
            }
        }

        fetchData()
    }, [city, apiKey])

    return (
        <>
            <Header />

            <div className="p-12 bg-gray-100 ">
                {/*Below div is for displaying hourly forecase */}

                <h1 className="text-5xl font-extrabold">Hourly Forecast - {forecast ? forecast.city.name : 'Loading..'}</h1>

                <div className="flex flex-wrap justify-center gap-8 my-12">
                    <HourlyCard forecast={forecast} />
                </div>

                <h2 className="text-5xl font-extrabold">Daily Forecast - {forecast ? forecast.city.name : 'Loading...'}</h2>

                <div className="flex flex-wrap justify-center gap-8 my-12">
                    <DailyForecast forecast={forecast} />
                </div>

            </div>
        </>
    )
}