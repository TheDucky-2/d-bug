import {createContext, useContext, useState} from 'react';
import api from '@/config/axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import type { User } from '@/types/user';
import { useParams } from 'react-router-dom';

interface AuthContextType {
    user : User | null;
    loading: boolean;
    login: (credentials: {
        fullName:string, 
        email: string, 
        password:string
    }) => Promise<any>;
    logout: () => Promise<void>;
    forgotPassword: (email: string) => Promise<any>;
    resetPassword : (formData: {
        newPassword: string,
        confirmPassword: string
    }, token:string) => Promise<any>;
    setUser: React.Dispatch<React.SetStateAction<User|null>>;
    getCurrentUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined)

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const login = async (credentials) => {

        try{
            
            const response = await api.post("auth/sign-in", credentials) 

            setUser(response.data.user);

            return response.data

        }catch(error){
            console.error(error?.response?.data?.message || error?.response?.data?.detail)
            throw error
        }

    }

    const logout = async () => {
        try{
        
        await api.post("auth/sign-out")
        setUser(null)
        toast.success("Logged out Successfully!")
        

        navigate("/")
        }catch(error){

        console.error(error?.response?.data?.message ||error?.response?.data?.detail);
        throw error
    }}

    const forgotPassword = async (email : string) => {

    try{ 
        const res = await api.post("auth/forgot-password", email)
        console.log(res)
        return res.data;

    }catch(error){

        console.error(error?.response?.data?.message || error?.response?.data?.detail)
        throw error
                    
        }

    }

    const resetPassword = async(formData, token) => {


        try{

            const data = new FormData()

            data.append("new_password", formData.newPassword)
            data.append("confirm_password", formData.confirmPassword)

            const res = await api.post(`auth/reset-password/${token}`, data)

            console.log(res.data)
            return res.data;

        }catch(error){
            console.error(error?.response?.data?.message || error?.response?.data?.detail)
            throw error

        }
    }


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
        <AuthContext.Provider value={{user, loading, login, logout, setUser, getCurrentUser, forgotPassword, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}