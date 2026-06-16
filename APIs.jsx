import React, { useState, useEffect } from 'react';

function UserLists() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                const Data = await userData.json();
                setUsers(Data);
                setLoading(false);
            } catch (error) {
                console.log('something went wrong');
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <ul>
                {loading ? (
                    <h1> Loading... </h1>
                ) : (
                    <>
                        {user.map((user) => (
                            <li key={user.id}>user.name</li>
                        ))}
                    </>
                )}
            </ul>
        </>
    );
}
