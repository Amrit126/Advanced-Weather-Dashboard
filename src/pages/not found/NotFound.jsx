import { Header } from '../../components/Header'

export function NotFound() {
    return (
        <>
            <Header />
            <div
                className='flex justify-center items-center h-screen bg-yellow-100 text-8xl'
            >
                <p>Sorry!! Page not found :(</p>
            </div>
        </>
    )
}