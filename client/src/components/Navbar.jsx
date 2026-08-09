import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/d_bug.png";
import logo_black from "../assets/d_bug_black.png";
import {Moon, Sun, LogIn} from "lucide-react"
import { useTheme } from "../context/ThemeContext.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {

  const {isDark, toggleTheme} = useTheme();
  const {isLoggedIn, handleAuth} = useAuth();
  const navigate = useNavigate()

  return (
    <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Inter";
            }
    `}</style>
   
      <div className={`shadow-md sticky top-0 z-50 justify-between items-center p-6 flex h-16 w-full m-0 ${isDark ? "bg-zinc-900 text-white/60 border-b border-zinc-100/10" : "bg-zinc-100 text-black border-b border-gray-300"} `}>
        
        {/** Logo container */}
        <div>
          <Link to="/">
        <img src={isDark ? logo : logo_black} className="h-10"/>
          </Link>
        </div> 

        {/** link container */}
        <div className={`flex gap-12 justify-between`}>
          <Link className={`text-sm hover:text-blue-400`} to="/"> Home</Link>
          <Link className="text-sm  hover:text-blue-400" to="/features"> Features </Link>
          <Link className="text-sm  hover:text-blue-400" to="/pricing"> Pricing</Link>
          <Link className="text-sm  hover:text-blue-400" to="/pricing"> Docs </Link>

        </div>

        <div className="flex justify-between items-center gap-10">
          {/** login button container */}
          {isLoggedIn
          ?
          (<button onClick={()=> navigate("/dashboard")}
          className={`cursor-pointer rounded text-l px-3.5 py-1.5 m-2 transition font-medium ${isDark ? "bg-green-600 hover:bg-green-700 text-white/90" : "bg-green-400 hover:bg-green-500 text-zinc-800"}`}>
          Go To Dashboard
          </button>  )

          :(
          
          <button onClick={()=> navigate("/auth/sign-in")}
          className={`cursor-pointer rounded-sm text-sm px-4 py-2 m-0 transition-all font-medium flex items-center gap-2 border
          ${isDark  ? " hover:bg-zinc-300/20 text-white border-white/40" : " hover:bg-zinc-700/20 text-black border-black/40"}`}>
          
          Log in
          </button>
        )} 

        <Tooltip>
          <TooltipTrigger asChild>
          {/** theme changing container */}
          <button onClick={toggleTheme} className={`cursor-pointer transition hover:text-blue-400`} >
          
          {isDark
          ? <Sun className="h-5 w-5 text-zinc-700 dark:text-zinc-400  dark:hover:text-blue-400 transition-colors" />  
          : <Moon className="h-5 w-5 text-zinc-700 dark:text-zinc-400 hover:text-blue-400 transition-colors" />}
          </button>
          </TooltipTrigger>
          <TooltipContent className={`rounded-sm dark:bg-zinc-100 bg-zinc-800 font-medium`}>
            Toggle Theme
          </TooltipContent>
        </Tooltip>

        </div>  
      </div>

  </>
  )
}

export default Navbar