import React, { useState } from "react";

function LocalChecking() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })
}


function ProtectedRoute({ children }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    } else {
        return children
    }
}

<Route path="/dashboard" element={
    <ProtectedRoute>
        <Dashboard />
    </ProtectedRoute>
} />