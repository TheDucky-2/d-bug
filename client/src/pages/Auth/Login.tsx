
import { Link, useNavigate } from "react-router-dom";
import api from "@/config/axios";
import { useState } from "react";
import { toast } from "sonner";
import { Github, Google } from '@lobehub/icons';
import {Moon, Sun} from "lucide-react"
import { useTheme } from "@/context/ThemeContext";
import { LoaderCircle, LogIn, Eye, EyeOff, Home, ArrowLeft } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cleanedBugArt, readyDbugArt } from "@/assets/ascii_art";
import type Organization from "@/types/organization";
import type LoginData from "@/types/auth";

const Login = () => {

    const {isDark, toggleTheme} = useTheme();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [organization, setOrganization] = useState<Organization | null>(null)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const navigate = useNavigate()

    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: ""
    })

    const toggleShowPassword = (): void => {

        setShowPassword((prev) => !prev)

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        )
    )
    }

    const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
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


    }catch(error:any){
        toast.error(error?.response?.data?.detail || error?.response?.data?.message || "Something went wrong")

    }
    finally{
        setIsLoading(false)
    }
    }


  return (

        <div className=" grid-container-l">


            <div className="  items-center justify-between flex ">
                <div className="flex justify-start  gap-icon-text ">
                    <Home className="dark:text-teal-500 text-teal-600"/>
                    <Link className="home-navigation-link" relative="path" to="/">   
                    Home
                    </Link>
                </div>

                        {/** Toggle Theme Button */}
                <Tooltip>
                    <TooltipTrigger asChild>
                    {/** theme changing container */}
                    <button onClick={toggleTheme} className={`cursor-pointer transition hover:text-blue-500 dark:hover:text-blue-400`} >
                    
                    {isDark
                ? <Sun size={20} className="icon-button" />  
                    : <Moon size={20} className="icon-button" />}
                    </button>
                    </TooltipTrigger>
                    <TooltipContent className="tooltip-content">
                    Toggle Theme
                    </TooltipContent>
                </Tooltip>
                
            </div>

         <div className={`items-center justify-center flex container   `}>
        
                <form onSubmit={handleFormSubmit}
                className={`max-w-md w-full min-w-0 flex flex-col  items-center justify-center p-4 sm:p-4 rounded-xl gap-major`}>
                    <div className="flex items-center justify-center  text-base flex-col text-center mb-5">
                      <h2 className="text-left font-medium">Welcome Back!</h2>
                      <h4 className=" text-foreground/60 mt-2">
                       Please login to continue
                      </h4>
                    </div>

                    <div className="w-full gap-oauth-btn flex flex-col">
        
                        <button type="button" className={`button-primary-round flex items-center min-w-0 gap-2 w-full justify-center`} 
                    >
                            <Github size={22} />Login with Github
                        </button>
                        <button type="button" className={`button-primary-round flex items-center gap-2 min-w-0 w-full justify-center`}>
                            <Google  size={22} />
                            Login with Google 
                        </button>
                    </div>
        
                    <div className="flex items-center gap-4 w-full">
                        <div className="w-full h-px bg-button-primary"></div>
                            <span className={`text-nowrap auth-page-text`}> or </span>
                        <div className="w-full h-px bg-button-primary"></div>
                    </div>

               
                        <p >Sign in with</p>

                    <div className="flex flex-col gap-input-field w-full">

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
                    </div>
        
                    <div className="w-full flex items-center justify-between text-white/50 mb-5">
                        <div className="flex items-center gap-2">
                            <input className="h-5" type="checkbox" id="checkbox " />
                            <label  className=" gap-1 text-foreground/60 flex" htmlFor="checkbox">Remember me</label>
                        </div>
                    </div>
                    
                    <button type="submit" disabled={isLoading} className="button-primary flex items-center min-w-0 gap-2 w-full justify-center">
                        {isLoading && (<LoaderCircle className="animate-spin w-5 h-5"/>)}
                        {!isLoading && <LogIn size={20}/>}
                        <span>{isLoading ? "Logging in" : "Log in"}</span>
                    </button>
                    <h4 className="text-foreground/60">Don't have an account? 
                        <Link className="font-semibold hover:text-blue-600 text-foreground px-2 transition-all duration-300  text-text-small" to="/auth/sign-up">Sign up</Link>
                    </h4>

                        <Link  className="font-semibold hover:text-blue-600 text-foreground px-2 transition-all duration-300  text-text-small" relative="path" to="/auth/forgot-password">Forgot password?</Link>

                </form>
           
            </div>
</div>
  )
}

export default Login