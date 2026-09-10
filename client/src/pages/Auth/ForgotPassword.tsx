import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { ArrowLeft, Home, Mail, Send } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import {Moon, Sun} from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ForgotPassword = () => {


    const {isDark, toggleTheme} = useTheme()
    const {forgotPassword} = useAuth()
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const res = await forgotPassword(email)
            toast.success("Password reset email sent")
            navigate("/")
            return res
        }catch(error){
            toast.error(error?.response?.data?.detail || error?.response?.data?.message || "Something went wrong")
        } 
    }

  return (
        <div className=" grid-container-l ">

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

         <div className={` items-center justify-center flex container   `}>
            
            <form onSubmit={handleSubmit}
            className={`max-w-md w-full flex flex-col items-center  justify-center p-6 sm:p-8 rounded-xl gap-major`}>


                    <div className="flex items-center  flex-col text-center mb-5">
                      <h2 className="font-medium">Forgot Password?</h2>
                      <p className=" text-foreground/60 mt-2">
                      No worries, we'll send a password-reset link to your registered email address.
                      </p>
                    </div>
            
                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                    </svg>
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Email id" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-sm w-full h-full`} required />                 
                </div>
    
                    <button type="submit"  className="button-primary flex items-center gap-2 w-full justify-center">
                        <Send/>
                        Send Link
                    </button>

                <div className="flex items-center gap-2 ">
                    <ArrowLeft size={24} className={`${isDark ? "text-teal-400" : "text-teal-600"} `}/>
                    <Link className="home-navigation-link" relative="path" to="/auth/sign-in">   
                    Log in 
                    </Link>
                </div>
            </form>
        </div>
    </div>
        
  )
}

export default ForgotPassword