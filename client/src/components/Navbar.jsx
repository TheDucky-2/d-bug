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
      <div className={`shadow-md sticky top-0 z-50 justify-between items-center p-6 flex h-16 w-full m-0
         ${isDark ? "bg-zinc-900 text-white/60 border-b border-zinc-100/10" : "bg-zinc-100 text-black border-b border-gray-300"} `}>
        
        {/** Logo container */}
        <div>
          <Link to="/">
        <img src={isDark ? logo : logo_black} className="h-10"/>
          </Link>
        </div> 

        {/** link container */}
        <div className={`flex gap-12 justify-between`}>
          <Link className={`text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400`} to="/"> Home</Link>
          <Link className="text-base  font-semibold hover:text-blue-500 dark:hover:text-blue-400" to="/features"> Features </Link>
          <Link className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400" to="/pricing"> Pricing</Link>
          <Link className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400" to="/pricing"> Docs </Link>

        </div>


        <div className="flex justify-between items-center gap-10">
          
          {/** Button Container */}

          <div className="flex items-center gap-2">

            {/**Sign up button */}
            <button onClick={()=> navigate("/auth/sign-up")}
            className={`cursor-pointer text-sm px-4 py-2 m-0 transition-all font-bold flex items-center gap-2 
             dark:text-white dark:border-white/40 text-black hover:text-blue-500 dark:hover:text-blue-400 border-black/40`}>
            
            Sign up
            </button>

            {/** Login button  */}
            {isLoggedIn
            ?
            (<button onClick={()=> navigate("/dashboard")}
            className={`cursor-pointer rounded text-l px-3.5 py-1.5 m-2 transition font-medium ${isDark ? "bg-green-600 hover:bg-green-700 text-white/90" : "bg-green-400 hover:bg-green-500 text-zinc-800"}`}>
            Go To Dashboard
            </button>  )

            :(
            
            <button onClick={()=> navigate("/auth/sign-in")}
            className={`cursor-pointer rounded-full text-sm px-4 py-2 m-0 transition-all font-bold flex items-center gap-2 border
             dark:hover:bg-zinc-300  dark:border-white/40 
             hover:bg-zinc-700 bg-black dark:bg-white dark:text-black text-white border-black/40`}>
            Log in
            </button>
        )} 
        </div>

        
        {/** Toggle Theme Button */}
        <Tooltip>
          <TooltipTrigger asChild>
          {/** theme changing container */}
          <button onClick={toggleTheme} className={`cursor-pointer transition hover:text-blue-500 dark:hover:text-blue-400`} >
          
          {isDark
          ? <Sun className="h-5 w-5 text-zinc-700 dark:text-zinc-300  hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />  
          : <Moon className="h-5 w-5 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />}
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