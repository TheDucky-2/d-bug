import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import BasicNavbar from "@/components/BasicNavbar";
import { ArrowLeft, KeyRound, } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";


const ResetPassword = () => {
    const {isDark} = useTheme()
    const {resetPassword} = useAuth()
    const navigate = useNavigate()

    const {token} = useParams() 

    const [formData, setFormData] = useState({
        newPassword : "",
        confirmPassword: ""
    })

    const handleChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

    if (formData.newPassword !== formData.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
        }

    try{ 
        const res = await resetPassword(formData, token)
        console.log(res.data);
        toast.success("Password reset successfully!")
        navigate("/")
        return res
        
    }catch(error){
        toast.error(error?.response?.data?.detail || error?.response?.data?.message || "Something went wrong")
        
    }

    }



  return(
    <>
    <style>
    {`
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

* {
    font-family: "Inter";
}
    `}
    </style>

        {/**Navbar section */}
    <div className="flex min-h-screen flex-col">
        <BasicNavbar/>

        <div className={`w-full px-6 py-10 flex flex-1 items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
            
            <form onSubmit = {handleFormSubmit}
            className={`max-w-md w-full flex flex-col shadow-xl shadow-zinc-700/20 dark:shadow-zinc-200/10 items-center justify-center border ${isDark ?  "border-white/20" : "border-black/20"} p-6 sm:p-8 rounded-xl gap-5`}>
                <h2 className={`text-2xl font-medium sm:text-2xl ${isDark ? "text-white/80" : "text-black/70"}`}>
                Reset Password
                </h2>
            
                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                    </svg>
                    <input name = "newPassword" value = {formData.newPassword} onChange={handleChange} minLength={8} maxLength={256}
                    type="password" placeholder="New Password" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-base w-full h-full`} required />
                </div>

                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                    </svg>
                    <input name = "confirmPassword" value = {formData.confirmPassword} onChange={handleChange} 
                    type="password" placeholder="Confirm Password" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-base w-full h-full`} required />
                </div>
    
                <button type="submit" 
                className={`w-full h-11 rounded-md text-white font-semibold bg-zinc-600 ${isDark ? "hover:bg-gray-300/30" : "hover:bg-gray-600"}
                hover:opacity-90 transition-opacity cursor-pointer items-center flex gap-2 justify-center`}>
                <KeyRound size={18}/>
                <span>Reset Password</span>
                   
                </button>
                <div className="flex items-center gap-2 hover:underline">
                    <ArrowLeft size={18} className={`${isDark ? "text-teal-400" : "text-teal-600"} `}/>
                    <Link className={`text-sm cursor-pointer  ${isDark ? "text-teal-400" : "text-teal-600"}`} relative="path" to="/auth/sign-in">   
                    Back to log in
                    </Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default ResetPassword