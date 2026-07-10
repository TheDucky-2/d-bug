import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "@/config/axios";
import { toast } from "sonner";
import BasicNavbar from "@/components/BasicNavbar.jsx";
import { useTheme } from "@/context/ThemeContext";

const Register = () => {

    const {isDark} = useTheme()
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const [formData, setFormData]= useState({
        full_name:"",
        email: "",
        password: ""
    })

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
    <div className="flex min-h-screen flex-col">
        <BasicNavbar/>

        <div className={`w-full px-6 py-10 flex flex-1 items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
        
                <form onSubmit={handleFormSubmit}
            className={`max-w-md w-full flex flex-col items-center shadow-xl shadow-zinc-700/20 dark:shadow-zinc-200/10 justify-center border ${isDark ?  "border-white/20" : "border-black/20"} p-6 sm:p-8 rounded-xl gap-5`}>

                    <div className="flex items-center justify-center  text-base flex-col text-center">
                      <h2 className={`text-4xl font-medium sm:text-3xl pb-4 ${isDark ? "text-white/80" : "text-black/70"}`}>Get started free</h2>
                      <p className={`text-base text-center ${isDark ? "text-white/50" : "text-black/50"}`}>Start tracking and resolving issues with your team.</p>
                    </div>
                    <Separator/>

                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input name="full_name"
                        type="text" value = {formData.full_name} onChange={handleChange}
                        placeholder="Full Name" className="bg-transparent text-zinc-800 dark:text-white  placeholder-gray-500/80 outline-none text-base w-full h-full" required />                 
                    </div>

                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                        </svg>
                        <input name="email"
                        type="email"  value = {formData.email} onChange={handleChange}
                        placeholder="Email id" className="bg-transparent text-zinc-800 dark:text-white  placeholder-gray-500/80 outline-none text-base w-full h-full" required />                 
                    </div>
        
                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                        </svg>
                        <input name="password"
                        type="password" value={formData.password} onChange={handleChange}
                        placeholder="Password" className="bg-transparent text-zinc-800 dark:text-white placeholder-gray-500/80 outline-none text-base w-full h-full" required />
                    </div>
        
                    <button type="submit" disabled={isLoading}
                    className={`w-full h-11 rounded-xl text-white font-semibold bg-zinc-600 ${isDark ? "hover:bg-gray-300/30" : "hover:bg-gray-600"} hover:opacity-90 transition-opacity cursor-pointer`}>
                       {isLoading? "Setting up your account...":  "Sign up"}
                    </button>
                    <p className={`${isDark ? "text-white/50" : "text-black/50"} text-base `}>Already have an account? 
                    <Link className={`${isDark ? "text-teal-400": "text-teal-600"} hover:underline px-2`} to="/auth/sign-in">Log in</Link></p>

                </form>
            </div>
        </div>
        </>
  )
}

export default Register