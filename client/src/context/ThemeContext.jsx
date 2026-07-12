import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(()=> {
       const stored = localStorage.getItem('d-bug-theme');
       if (stored) return stored === 'dark';
       return window.matchMedia('(prefers-color-scheme: light)').matches ? false : true;
    });

    useEffect(()=> {
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('d-bug-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value = {{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme  = () => {
    return useContext(ThemeContext)
}