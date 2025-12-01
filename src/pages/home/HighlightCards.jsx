export function Card({ children }) {
    return (
        <div className="flex flex-col justify-center  items-center p-4 h-full
                    rounded-xl bg-linear-to-r from-blue-600 to-blue-400 shadow-2xl transition-all duration-300
                    hover:translate-y-[-3px] shadow-black">
            {children}
        </div>
    )
}