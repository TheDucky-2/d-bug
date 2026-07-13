import {createContext, useContext, useState} from 'react';
import api from '@/config/axios';
import { useEffect } from 'react';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (credentials) => {

        try{
            
            const response = await api.post("auth/sign-in", credentials) 
            setUser(response.user);

            console.log(response)
            setUser(response.data.user);

            return response.data

        }catch(error){
            console.error(error?.response?.data?.message || error?.response?.data?.detail)
            throw error
        }

    }

    const logout = async () => {
        try{await api.post("auth/sign-out")
        setUser(null)
        
        }catch(error){

        console.error(error?.response?.data?.message ||error.message);
        throw error
    }}

    const getCurrentUser = async () => {

        try{ 
        setLoading(true)
        const currentUser = await api.get("auth/me")

        console.log(currentUser.data.user)
        setUser(currentUser.data.user)

        }catch(error){
            setUser(null)
            console.error(error?.response?.data?.message || error?.response?.data?.detail)

            
        }finally{
            setLoading(false)
        }
    }
        useEffect(()=> {
            const fetchCurrentuser = async ()=> {
            await getCurrentUser();
        }

            fetchCurrentuser()
        }, [])

    return (
        <AuthContext.Provider value={{user, loading, login, logout, setUser, getCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}