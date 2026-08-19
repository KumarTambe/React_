// Prop drilling — passing data through multiple components that don't need it just to reach one deep child.


// createContext() — creates the central store
// Provider — wraps your app and supplies the data
// useContext() — any component uses this to grab the data directly

import { createContext, useContext, useState } from 'react'

const themeContext = createContext();

function DisplayTheme({ children }) {
    const [theme, setTheme] = useState('light')
    function toggleTheme() {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

function ThemeDisplay() {
    // grab theme and toggleTheme from context
    const { theme, toggleTheme } = useContext(themeContext)
    // show current theme
    return (
        <>
            <h1>current theme :{theme}</h1>
            < button onClick={toggleTheme} > toggle theme </button >
        </>
    )

}


function App() {
    return (
        <DisplayTheme>
            <ThemeDisplay />
        </DisplayTheme>
    )
}

export default App;