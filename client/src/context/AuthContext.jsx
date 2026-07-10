import {createContext, useContext, useState} from 'react';
import api from '@/config/axios';
import { useEffect } from 'react';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = ({data}) => {
        setUser(data.user);
    }

    const logout = async () => {
        const response = await api.get("/api/v1/auth/sign-out")
        setUser(null)
    }

    useEffect( ()=> {

        const getCurrentUser = async () => {

        try{ 
        const currentUser = await api.get("/api/v1/auth/me")

        console.log(currentUser)
    
        }catch(error){
            setUser(null)
            console.error(error.message)

            
        }finally{
            setLoading(false)
        }
    }
    getCurrentUser()

}, [])

    return (
        <AuthContext.Provider value={{user, loading, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}
