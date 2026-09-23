import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export function App() {
    const [theme, setTheme] = useState("light")
    function handleTheme() {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme, handleTheme }}>
            <Login />
        </ThemeContext.Provider>
    )
}

export function ChildTheme() {
    const { theme, setTheme, handleTheme } = useContext(ThemeContext)
    return (
        <>
            < h1 > current theme: {theme}</h1 >
            <button onClick={handleTheme}>Change Theme</button>
        </>
    )
}