import { useState, useEffect } from 'react'

// Custom hook — useFetch
function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [url])

    return { data, loading, error }
}

// Using the custom hook in a component
function Post() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </>
    )
}