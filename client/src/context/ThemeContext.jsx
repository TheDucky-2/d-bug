import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(()=> {

       return localStorage.getItem("theme") === "dark"
    });

    useEffect(()=> {
        localStorage.setItem("theme", isDark ? "dark" : "light")
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark])

        const handleDarkTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value = {{isDark,handleDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme  = () => {
    return useContext(ThemeContext)
}