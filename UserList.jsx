import { useNavigate } from "react-router-dom"

function UserList() {
    const users = [
        { id: 1, name: "Kumar" },
        { id: 2, name: "Jayant" },
        { id: 3, name: "Tambe" }
    ]

    const navigate = useNavigate();

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={(e) => navigate('/users/' + user.id)}> View </button>
                    </li>
                )
                )}
            </ul>
        </>
    )
}