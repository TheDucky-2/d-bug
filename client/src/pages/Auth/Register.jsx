import logo from "../../assets/d_bug.png"
import logo_black from "../../assets/d_bug_black.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "@/config/axios";
import { toast } from "sonner";
import { useTheme } from "@/context/ThemeContext";
import { LoaderCircle, UserPlus } from "lucide-react";
import {  Eye, EyeOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Register = () => {

    const {isDark} = useTheme()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    const [formData, setFormData]= useState({
        full_name:"",
        email: "",
        password: ""
    })

    const toggleShowPassword = () => {

        setShowPassword((prev) => !prev)

    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try{
        const {data} = await api.post("/auth/sign-up", formData)

        toast.success(data.message);
        await navigate("/auth/sign-in")
        setIsLoading(false)

        }catch(error){
            toast.error(error.response?.data?.detail ||error.response?.data?.message || "Something went wrong!")

        }finally{
            setIsLoading(false)
        }
}

  return (
    <>
    <div className="flex min-h-screen flex-col">

         <div className={`w-full px-6 flex flex-1 items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
        
                <form onSubmit={handleFormSubmit}
            className={`max-w-md w-full flex flex-col items-center  justify-center  p-6 sm:p-8 rounded-xl gap-5`}>

                    <div className="flex items-center justify-center  text-base flex-col text-center">
                      <h2 className="auth-page-title">Get started with</h2>
                      <img src={isDark ? logo : logo_black} className="h-10 w-30 mb-2"/>
                      <p className="auth-page-subtitle">Start tracking and resolving issues with your team.</p>
                    </div>


                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input name="full_name"
                        type="text" value = {formData.full_name} onChange={handleChange}
                        placeholder="Full Name" className="bg-transparent text-zinc-800 dark:text-white  placeholder-gray-500/80 outline-none text-sm w-full h-full" required />                 
                    </div>

                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                        </svg>
                        <input name="email"
                        type="email"  value = {formData.email} onChange={handleChange}
                        placeholder="Email id" className="bg-transparent text-zinc-800 dark:text-white  placeholder-gray-500/80 outline-none text-sm w-full h-full" required />                 
                    </div>
        
                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2 relative">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                        </svg>
                        {showPassword ? 
                    <input name = "password" value={formData.password} onChange={handleChange} 
                    type="text" placeholder="Password" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-sm w-full h-full`} required />
                :
                <input name = "password" value={formData.password} onChange={handleChange} 
                    type="password" placeholder="Password" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-sm w-full h-full`} required />}
                    
                    {showPassword ?
                    <Tooltip>
                        <TooltipTrigger>
                            <button className="absolute right-2 top-3" onClick={toggleShowPassword}>
                               <EyeOff className=" text-gray-500/80 dark:text-gray-200/60 h-6 w-6"/> 
                    
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className={`rounded-sm dark:bg-zinc-100 bg-zinc-800 font-medium`}>
                            Hide
                        </TooltipContent>
                    </Tooltip>
                    
                    :

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button className="absolute right-2 top-3" onClick={toggleShowPassword}>
                               <Eye className=" text-gray-500/80 dark:text-gray-200/60 h-6 w-6"/> 
                    
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className={`rounded-sm dark:bg-zinc-100 bg-zinc-800 font-medium`}>
                            Show
                        </TooltipContent>
                    </Tooltip>
                    
                    
                    }
                    </div>
        
                    <button type="submit" disabled={isLoading} className="auth-page-button">
                        {!isLoading && <UserPlus size={24}/>}
                       {isLoading  && (<LoaderCircle className="animate-spin"/>)}
                       {isLoading? "Setting up your account...":  "Sign up"}
                    </button>
                    <p className="auth-page-text">Already have an account? 
                    <Link className="auth-page-navigation-link px-2" to="/auth/sign-in">Log in</Link></p>

                </form>
            </div>
        </div>
        </>
  )
}

export default Register