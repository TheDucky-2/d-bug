import { Moon, Sun } from "lucide-react";
import logo from "../assets/d_bug.png"
import logo_light from "../assets/d_bug_black.png"
import { useTheme } from "@/context/ThemeContext.jsx";
import { Link } from "react-router-dom";


const BasicNavbar = () => {

    const {isDark, handleDarkTheme} = useTheme()

  return (
    <div className="flex justify-between items-center px-2 sm:px-4 lg:px-6 py-2">
            <div>
                <Link to="/">
                    <img src={isDark ? logo : logo_light} className="h-10"/>
                </Link>
            </div>

            <div>


            <button onClick={handleDarkTheme} className={`cursor-pointer h-10 w-10`} >
            {isDark ? <Sun className="h-5 w-5 text-zinc-700 dark:text-zinc-400  dark:hover:text-blue-400 transition-colors" /> 
            : <Moon className="h-5 w-5 text-zinc-700 dark:text-zinc-400 hover:text-blue-400 transition-colors" />}
            </button>

            </div>

    </div>

  )
}

export default BasicNavbar