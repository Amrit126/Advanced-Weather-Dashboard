//import {useEffect} from 'react'

export function FavoriteButton({ favorites, setFavorites, cityName, updateLocalStorage }) {
    const isAdded = favorites.includes(cityName)

    function addToFavorites(city) {
        const temp = [...favorites, city]
        setFavorites(temp)
        updateLocalStorage(temp)
    }

    return (
        <div className="mt-20 flex flex-col gap-3 justify-center items-center h-[100px] text-xl">
            <button
                className={`${isAdded ? 'hidden' : 'block'} p-2 w-[60%] h-[50%] rounded-xl text-2xl hover:border-none
                    tracking-wider bg-linear-to-r from-red-300 to-red-500 cursor-pointer transition-all
                    duration-300 hover:scale-105 border-none active:scale-95 shadow-red-800 shadow-2xl`}
                onClick={() => addToFavorites(cityName)}
            >
                Add to Favorites
            </button>
            <p
                className={`w-[50%] rounded-xl text-2xl h-[50%] bg-linear-to-r from-red-300 to-red-500
                    ${isAdded ? 'flex' : 'hidden'} justify-center items-center text-white`}
            >✅ Added</p>
        </div>
    )
}