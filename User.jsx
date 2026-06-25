import useFetch from './useFetch';

function Users() {
    const { data, loading, error } = useFetch('https://dummyjson.com/users');
    console.log(data);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <ul>
            {data.users?.map((user) => <li key={user.id}>{user.firstName}</li>)}

        </ul>
    )
}

export default Users;