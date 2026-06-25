import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';


function ProtectedRoute({ children }) {
    const contextData = useContext(UserContext);
    const isLoggedIn = contextData.isLoggedIn;
    return (
        <>
            {
                isLoggedIn ?
                    children

                    :
                    <Navigate to='/login' />
            }

        </>
    )
}

export default ProtectedRoute;