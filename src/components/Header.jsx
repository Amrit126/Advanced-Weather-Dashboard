import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export function Header() {
    const navigate = useNavigate()
    const [inputText, setInputText] = useState('')

    function searchPlace() {
        if (!inputText) {
            alert("Search can't be empty")
            return
        }
        navigate(`/?city=${inputText}`)
        setInputText('')
    }

    function changeInputText(e) {
        setInputText(e.target.value)
    }

    function checkKey(e) {
        if (e.key === "Enter") {
            searchPlace()
        }
    }

    return (
        <div className="header flex bg-linear-to-r from-cyan-600 to-cyan-500 p-4 text-2xl justify-between
         items-center px-6 border-b-2 border-black">
            <div className="text-4xl tracking-wider">
                <Link to="/">AeroCast</Link>
            </div>
            <div className='flex w-[60%] justify-center items-center'>
                <input
                    className="focus:border-black w-[70%] bg-white h-[50%] outline-none border-3 
                    rounded border-black p-2"
                    type="search"
                    placeholder="Search for places..."
                    value={inputText}
                    onChange={changeInputText}
                    onKeyDown={checkKey}
                />
                <button
                    className="cursor-pointer h-full hover:scale-110 transition-all duration-200
                    active:scale-98"
                    onClick={searchPlace}
                >
                    <img
                        className="w-[55px]"
                        src="/search-icon.png"
                        alt="Search icon"
                    />
                </button>
            </div>
            <div className="mr-2 transition-all duration-150 hover:scale-110">
                <Link to="/favorites">Favorites</Link>
            </div>
        </div>
    )
}