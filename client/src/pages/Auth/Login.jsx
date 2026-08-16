
import { Link, useNavigate } from "react-router-dom";
import api from "@/config/axios";
import { useState } from "react";
import { toast } from "sonner";
import { Github } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import { useTheme } from "@/context/ThemeContext";
import BasicNavbar from "@/components/BasicNavbar";
import { LoaderCircle, LogIn, Eye, EyeOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Login = () => {

    const {isDark} = useTheme()
    const [isLoading, setIsLoading] = useState(false)
    const [organization, setOrganization] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const toggleShowPassword = () => {

        setShowPassword((prev) => !prev)

    }

    const handleChange = (e) => {

        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        )
    )
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
       try{ 
       
        const {data} = await api.post("/auth/sign-in", formData)

        console.log(data)
        toast.success(data?.message)

        if (organization){
            await navigate("/organization")
        }else{
            await navigate("/onboarding")
        }


    }catch(error){
        toast.error(error?.response?.data?.detail || error?.response?.data?.message || "Something went wrong")

    }
    finally{
        setIsLoading(false)
    }
    }


  return (
    <>

        {/**Navbar section */}
    <div className="flex min-h-screen flex-col ">
        <BasicNavbar/>

        <div className={`w-full px-6 flex flex-1 items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
        
            <form onSubmit={handleFormSubmit}
            className={`max-w-md w-full flex flex-col  items-center justify-center p-4 sm:p-4 rounded-xl gap-5`}>
                <h2 className="auth-page-title">Sign in</h2>
                <p className="auth-page-subtitle">Welcome back! Please login to continue</p>
                
                <p className="auth-page-text">Sign in with</p>
                <button type="button" className={`w-full rounded-full text-white text-sm font-semibold dark:bg-white dark:text-black
                    bg-zinc-800 dark:hover:bg-zinc-100 hover:bg-zinc-800 py-3
                hover:opacity-90 transition-opacity cursor-pointer items-center flex gap-2 justify-center`}>
                     <Github size={26} />
                    <Github.Text size={17} />
                </button>
    
                <div className="flex items-center gap-4 w-full">
                    <div className="w-full h-px bg-gray-300/90"></div>
                    <span className={`text-nowrap auth-page-text`}>or </span>
                    <div className="w-full h-px bg-gray-300/90"></div>
                </div>

                <div className="flex items-center justify-center gap-4 w-full">
                    <p className="auth-page-text">Sign in with</p>
                </div>
    
                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                    </svg>
                    <input name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder="Email id" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-sm w-full h-full`} required />                 
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
                    type="password" placeholder="Password" className={`bg-transparent ${isDark ?  "text-white" : "text-black"}
                     placeholder-gray-500/80 outline-none text-sm w-full h-full`} required />}
                    
                    {showPassword ?
                    <Tooltip>
                        <TooltipTrigger asChild>
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
    
                <div className="w-full flex items-center justify-between text-white/50">
                    <div className="flex items-center gap-2">
                        <input className="h-5" type="checkbox" id="checkbox " />
                        <label className="auth-page-text" htmlFor="checkbox">Remember me</label>
                    </div>
                </div>
                
                <button type="submit" disabled={isLoading} className="auth-page-button">
                    {isLoading && (<LoaderCircle className="animate-spin w-5 h-5"/>)}
                    {!isLoading && <LogIn size={24}/>}
                    <span>{isLoading ? "Logging in" : "Log in"}</span>
                </button>
                <p className="auth-page-text">Don’t have an account? 
                <Link className="auth-page-navigation-link px-2" relative="path" to="/auth/sign-up">Sign up</Link></p>

                <Link className="auth-page-navigation-link" relative="path" to="/auth/forgot-password">Forgot password?</Link>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login