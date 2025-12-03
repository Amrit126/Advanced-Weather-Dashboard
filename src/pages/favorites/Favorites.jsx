import { Header } from '../../components/Header'

export function Favorites({ api, favorites, setFavorites }) {
    return (
        <>
            <Header />
            <h2
                className="text-center py-8 text-5xl bg-gray-100 w-full font-extrabold"
            >Favorites</h2>
            <div className="h-full bg-gray-100 flex flex-wrap gap-8 p-12">

                <div className="flex flex-col items-center justify-center bg-linear-to-r from-blue-600 to-blue-400
                gap-2 p-2 text-2xl font-bold rounded-2xl shadow-black shadow-2xl">
                    <div className="flex justify-between w-full">
                        <div></div>
                        <p>Kathmandu</p>
                        <button>X</button>
                    </div>
                    <img src="/weather-icons/default.png" alt="Image Icon" />
                    <p>27 *C</p>
                    <p>Clouds</p>
                    <div className="flex gap-2">
                        <button className="bg-black p-4 text-white rounded-lg">More Details</button>
                        <button className="bg-black p-4 text-white rounded-lg">View Forecast</button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-linear-to-r from-blue-600 to-blue-400
                gap-2 p-2 text-2xl font-bold rounded-2xl shadow-black shadow-2xl">
                    <div className="flex justify-between w-full">
                        <div></div>
                        <p>Kathmandu</p>
                        <button>X</button>
                    </div>
                    <img src="/weather-icons/default.png" alt="Image Icon" />
                    <p>27 *C</p>
                    <p>Clouds</p>
                    <div className="flex gap-2">
                        <button className="bg-black p-4 text-white rounded-lg">More Details</button>
                        <button className="bg-black p-4 text-white rounded-lg">View Forecast</button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-linear-to-r from-blue-600 to-blue-400
                gap-2 p-2 text-2xl font-bold rounded-2xl shadow-black shadow-2xl transition-all duration-300
                hover:scale-102">
                    <div className="flex justify-between w-full">
                        <div></div>
                        <p>Kathmandu</p>
                        <button
                            title="Remove from favorites"
                            className="mr-2 cursor-pointer transition-all duration-300 hover:opacity-80">X</button>
                    </div>
                    <img src="/weather-icons/default.png" alt="Image Icon" />
                    <p>27 *C</p>
                    <p>Clouds</p>
                    <div className="flex gap-2">
                        <button className="bg-black p-4 text-white rounded-lg
                        transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-102">More Details</button>
                        <button className="bg-black p-4 text-white rounded-lg
                        transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-102">View Forecast</button>
                    </div>
                </div>

            </div>
        </>
    )
}