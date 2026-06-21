import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const filteredList = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const navigate = useNavigate();

    useEffect(() => {
        async function FetchData() {
            try {
                const RawData = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await RawData.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false)
            }
        }
        FetchData();
    }, [])

    return (
        <>
            {error == true ?
                <h1> We ran into an error.</h1>
                :
                (
                    loading == true ?
                        <h1> Loading ... </h1>
                        :
                        <>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ul>
                                {filteredList.map((user) =>
                                    <li key={user.id}>
                                        {user.name}
                                        <button onClick={(e) => navigate('/users/' + user.id)}>Vie</button>
                                    </li>
                                )}
                            </ul>
                        </>
                )
            }
        </>
    )
}