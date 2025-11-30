//import { Link } from 'react-router
import { Header } from '../../components/Header'
import './HomePage.css'

export function HomePage() {
    return (
        <>
            <Header />
            <div className="p-12 bg-gray-100">
                {/*Below div is for displaying current weather */}
                <h1 className="self-start text-5xl font-extrabold">Current Weather</h1>
                <div className="mb-10 m-4 my-6 flex h-[300px] w-[90%] mx-auto p-4 gap-4
                bg-linear-to-r from-blue-300 to-blue-500  rounded-lg shadow-2xl transition-all duration-300
                hover:scale-105 shadow-gray-600">
                    <div className="image w-[45%] border-amber-700 border-2">
                        <img src="" alt="Image icon" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 flex-col w-full text-3xl font-medium">
                        <div className="flex p-2 justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                            <p className="text-6xl font-bold">10.04°C 🌡️</p>
                        </div>
                        <div className="flex p-2  justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                            <p>Kathmandu, NP 📍</p>
                        </div>
                        <div className="flex p-2  justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                            <p>Sunday 🕒</p>
                        </div>
                        <div className="flex p-2 justify-center bg-linear-to-r from-blue-200 to-transparent
                         items-center rounded-xl">
                            <p>Clouds ☁️</p>
                        </div>
                    </div>
                </div>
                {/*Below div is for displaying extra details */}
                <h2 className="self-start text-5xl font-extrabold">Highlights</h2>
                <div className="mb-10 m-4 my-10 grid grid-cols-4 gap-6 h-[250px] text-xl">
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                        <h3 className="font-bold mb-4">Sunrise</h3>
                        <p>06:36 AM</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                        <h3 className="font-bold mb-4">Sunset</h3>
                        <p>05:08 PM</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                        <h3 className="font-bold mb-4">Feels like</h3>
                        <p>17.26°C</p>
                        <p>Comfotable</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                        <h3 className="font-bold mb-4">Wind Status</h3>
                        <p>4.1 km/h</p>
                        <p>Calm</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
                        <h3 className="font-bold mb-4">Humidity</h3>
                        <p>52% </p>
                        <p>Normal</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    shadow-black hover:translate-y-[-3px]">
                        <h3 className="font-bold mb-4">Cloudiness</h3>
                        <p>60%</p>
                        <p>Overcast</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-black shadow-2xl 
                    transition-all duration-300 hover:translate-y-[-3px]">
                        <h3 className="font-bold mb-4">Visibility</h3>
                        <p>10km</p>
                        <p>Clear</p>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-xl p-4 h-full
                    bg-black text-white text-3xl cursor-pointer transition-all duration-300 hover:scale-105
                    active:scale-95 shadow-black shadow-2xl">
                        <p className="">View Forecast </p>
                    </div>
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