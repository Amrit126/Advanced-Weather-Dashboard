import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { Header } from '../../components/Header'
import { HourlyCard } from './HourlyCard'

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

            <div className="p-12 bg-gray-100 h-screen">
                {/*Below div is for displaying hourly forecase */}

                <h1 className="text-5xl font-extrabold">Hourly Forecast - {forecast ? forecast.city.name : ''}</h1>

                <div className="grid grid-cols-4 gap-8 my-8 ">
                    <HourlyCard forecast={forecast} />
                </div>

            </div>
        </>
    )
}