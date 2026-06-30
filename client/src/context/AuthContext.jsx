import {createContext, useContext, useState} from 'react';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuth = () => {
        setIsLoggedIn(prev => !prev
        )
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, handleAuth}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}
