import React, { useState, useEffect } from "react";

function WhatTheHelly() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const result = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await result.json();
            setUsers(data)
            setLoading(false);
        }
        fetchData()
    }, [])

    return (
        <>
            {
                loading ?
                    <h1> Loading....</h1>
                    :
                    users.map((u) => <li key={u.id}>{u.name}</li>)
            }
        </>
    )


}