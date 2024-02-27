/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('theme-01')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'theme-01'
        setTheme(savedTheme)
    }, [])

    const toggleTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {{ children }}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)