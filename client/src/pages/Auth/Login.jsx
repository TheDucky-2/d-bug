import { Separator } from "@/components/ui/separator"
import github_logo from "/images/github_logo.png";
import { Link, useNavigate } from "react-router-dom";
import api from "@/config/axios";
import { useState } from "react";
import { toast } from "sonner";

import { useTheme } from "@/context/ThemeContext";
import BasicNavbar from "@/components/BasicNavbar";
import { LoaderCircle } from "lucide-react";

const Login = () => {

    const {isDark} = useTheme()
    const [isLoading, setIsLoading] = useState(false)
    const [organization, setOrganization] = useState(null)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

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
        await new Promise(resolve => setTimeout(resolve, 2000));
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
     <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>

        {/**Navbar section */}
    <div className="flex min-h-screen flex-col">
        <BasicNavbar/>

        <div className={`w-full px-6 py-10 flex flex-1 items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
        
            <form onSubmit={handleFormSubmit}
            className={`max-w-md w-full flex flex-col shadow-xl shadow-zinc-700/20 dark:shadow-zinc-200/10 items-center justify-center border ${isDark ?  "border-white/20" : "border-black/20"} p-6 sm:p-8 rounded-xl gap-5`}>
                <h2 className={`text-4xl font-medium sm:text-3xl ${isDark ? "text-white/80" : "text-black/70"}`}>Sign in</h2>
                <p className={`text-base text-center ${isDark ? "text-white/50" : "text-black/50"}`}>Welcome back! Please login to continue</p>
                
                <Separator/>
                <p className={`text-base text-center ${isDark ? "text-white/50" : "text-black/50"}`}>Sign in with Github</p>
                <button type="button" className={`w-full bg-zinc-600 flex items-center justify-center h-12 rounded-md ${isDark ? "hover:bg-gray-300/30" : "hover:bg-gray-600"} transition-opacity hover:opacity-90`}>
                    <img src={github_logo} alt="githubLogo" className="h-12" />
                </button>
    
                <div className="flex items-center gap-4 w-full">
                    <div className="w-full h-px bg-gray-300/90"></div>
                    <span className={`text-nowrap text-base ${isDark ? "text-white/50" : "text-black/50"} `}>or </span>
                    <div className="w-full h-px bg-gray-300/90"></div>
                </div>

                <div className="flex items-center justify-center gap-4 w-full">
                    <p className={` text-base ${isDark ? "text-white/50" : "text-black/50"} `}>Sign in with Email</p>
                </div>
    
                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                    </svg>
                    <input name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder="Email id" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-base w-full h-full`} required />                 
                </div>
    
                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                    </svg>
                    <input name = "password" value={formData.password} onChange={handleChange}
                    type="password" placeholder="Password" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-base w-full h-full`} required />
                </div>
    
                <div className="w-full flex items-center justify-between text-white/50">
                    <div className="flex items-center gap-2">
                        <input className="h-5" type="checkbox" id="checkbox " />
                        <label className={`text-base ${isDark ? "text-white/50" : "text-black/50"}`} htmlFor="checkbox">Remember me</label>
                    </div>
                </div>
    
                <button type="submit" disabled={isLoading}
                className={`w-full h-11 rounded-md text-white font-semibold bg-zinc-600 ${isDark ? "hover:bg-gray-300/30" : "hover:bg-gray-600"}
                hover:opacity-90 transition-opacity cursor-pointer items-center flex gap-3 justify-center`}>
                    {isLoading && (<LoaderCircle className="animate-spin w-5 h-5"/>)}
                    <span>{isLoading ? "Logging in" : "Log in"}</span>
                </button>
                <p className={`${isDark ? "text-white/50" : "text-black/50"} text-base `}>Don’t have an account? 
                <Link className={`${isDark ? "text-teal-400": "text-teal-600"} hover:underline px-2`} relative="path" to="/auth/sign-up">Sign up</Link></p>

                <Link className={`text-base hover:underline  ${isDark ? "text-teal-400" : "text-teal-600"}`} href="#">Forgot password?</Link>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login