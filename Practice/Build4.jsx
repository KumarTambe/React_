import React, { useEffect, useState } from "react";

function Build4() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const rawData = await fetch('https://jsonplaceholder.typicode.com/users')
                const Data = await rawData.json()
                setData(Data)
                setLoading(false)
            } catch (error) {
                console.log("We ran into an error")
                setError(true)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {loading ?
                <h1> Loading ...</h1>
                :
                error ?
                    <h1>Something went wrong</h1>
                    :
                    <ul>
                        {data.map((user, id) => <li key={id}>{user.name}</li>)}
                    </ul>
            }
        </>
    )
}

export default Build4;