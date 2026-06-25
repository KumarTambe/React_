import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const rawData = await fetch(url);
                const data = await rawData.json();
                setData(data);
                setLoading(false);

            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return { data, loading, error }
}

export default useFetch;