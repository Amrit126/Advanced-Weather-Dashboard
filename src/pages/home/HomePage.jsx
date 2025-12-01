import axios from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { Header } from '../../components/Header'
import './HomePage.css'
import { CurrentWeather } from './CurrentWeather'
import { Highlights } from './Highlights'

export function HomePage({ currentCity, setCurrentCity, loading, setLoading }) {
    const [searchParams] = useSearchParams()
    const city = searchParams.get('city') || "Kathmandu"

    useEffect(() => {
        const API_KEY = "ebd5f17ff6f850fedcf9387d831c41b1"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        const fetchData = async () => {
            if (city) {
                try {
                    const response = await axios.get(url)
                    setLoading(true)
                    console.log(response.data)
                    setCurrentCity(response.data)
                } catch (e) {
                    alert("Sorry!! No Match found")
                    console.log(e.status)
                }
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city])

    return (
        <>
            <Header />
            <div className="p-12 bg-gray-100">
                {/*Below div is for displaying current weather */}

                <h1 className="self-start text-5xl font-extrabold">Current Weather</h1>

                <div className="mb-10 m-4 my-6 flex h-[300px] w-[90%] mx-auto p-4 
                bg-linear-to-r from-blue-300 to-blue-500  rounded-lg shadow-2xl transition-all duration-300
                hover:scale-105 shadow-gray-600">
                    <CurrentWeather currentCity={currentCity} loading={loading} setLoading={setLoading} />
                </div>

                {/*Below div is for displaying extra details */}
                <h2 className="self-start text-5xl font-extrabold">Highlights</h2>

                <div className="mb-10 m-4 my-10 h-[250px] text-xl">
                    <Highlights currentCity={currentCity} loading={loading} setLoading={setLoading} />
                </div>

                <div className="mt-20 flex flex-col gap-3 justify-center items-center h-[100px] text-xl">
                    <button className=" p-2 w-[60%] h-[50%] rounded-xl text-2xl hover:border-none
                    tracking-wider bg-linear-to-r from-red-300 to-red-500 cursor-pointer transition-all
                    duration-300 hover:scale-105 border-none active:scale-95 shadow-red-800 shadow-2xl" >
                        Add to Favorites
                    </button>
                    <p className="hidden">Added</p>
                </div>
            </div>
        </>
    )
}