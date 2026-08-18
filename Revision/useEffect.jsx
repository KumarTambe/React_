import { useState, useEffect } from 'react'

function Post() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function FetchData() {
            try {
                const rawData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const data = await rawData.json()
                setData(data);
                setLoading(false);
            } catch (err) {
                console.log(err)
            }
        }
        FetchData()
    }, [])


    return (
        <>
            {loading ?
                <h1> loading....</h1>
                :
                <>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </>
            }
        </>
    )
}