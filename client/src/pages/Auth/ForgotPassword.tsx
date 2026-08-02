import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import BasicNavbar from "@/components/BasicNavbar";
import { ArrowLeft, KeyRound, } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { toast } from "sonner";

const ForgotPassword = () => {

    const {isDark} = useTheme()
    const {resetPassword} = useAuth()
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const res = await resetPassword(email)
            toast.success("Password reset email sent")
            navigate("/")
            return res
        }catch(error){
            toast.error(error?.response?.data?.detail || error?.response?.data?.message || "Something went wrong")
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
            
            <form onSubmit={handleSubmit}
            className={`max-w-md w-full flex flex-col shadow-xl shadow-zinc-700/20 dark:shadow-zinc-200/10 items-center justify-center border ${isDark ?  "border-white/20" : "border-black/20"} p-6 sm:p-8 rounded-xl gap-5`}>
                <h2 className={`text-4xl font-medium sm:text-3xl ${isDark ? "text-white/80" : "text-black/70"}`}>
                Forgot Password?
                </h2>
                <p className={`text-base text-center ${isDark ? "text-white/50" : "text-black/50"}`}>
                No worries, we'll send you a reset link.
                </p>
            
                <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-xl overflow-hidden pl-6 gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                    </svg>
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Email id" className={`bg-transparent ${isDark ?  "text-white" : "text-black"} placeholder-gray-500/80 outline-none text-base w-full h-full`} required />                 
                </div>
    
                <button type="submit" 
                className={`w-full h-11 rounded-md text-white font-semibold bg-zinc-600 ${isDark ? "hover:bg-gray-300/30" : "hover:bg-gray-600"}
                hover:opacity-90 transition-opacity cursor-pointer items-center flex gap-2 justify-center`}>
                <KeyRound size={18}/>
                <span>Reset Password</span>
                   
                </button>
                <div className="flex items-center gap-2 hover:underline">
                    <ArrowLeft size={18} className={`${isDark ? "text-teal-400" : "text-teal-600"} `}/>
                    <Link className={`text-base cursor-pointer  ${isDark ? "text-teal-400" : "text-teal-600"}`} relative="path" to="/auth/sign-in">   
                    Back to log in
                    </Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword