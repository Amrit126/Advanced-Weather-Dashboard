import { Header } from '../../components/Header'

export function Forecast({ loading, setLoading }) {
    return (
        <>
            <Header loading={loading} setLoading={setLoading} />
        </>
    )
}