import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/d_bug.png"
import logo_black from "../assets/d_bug_black.png"
import {Moon, Sun, Search} from "lucide-react"
import { useTheme } from "../context/ThemeContext.jsx";
import {useAuth} from "../context/AuthContext.js";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { useSearch } from "@/hooks/useSearch.ts";

const Navbar = () => {

  const {isDark, toggleTheme} = useTheme();
  const navigate = useNavigate()
  const {isSearching, searchQuery, openSearch, searchData} = useSearch()

  return (
    <> 
      <div className="navbar ">
        
        {/** Logo container */}
        <div >
          <Link to="/">
            <img src={isDark ? logo : logo_black} className="lg:max-h-10 sm:max-h-6 md:max-h-10"/>
          </Link>
        </div> 

        {/** link container */}
        <div className={`flex md:gap-12 lg:gap-12 sm:gap-6  flex-wrap sm:flex-row `}>
          <Link className="navbar-navigation-link" to="/"> Home</Link>
          <Link className="navbar-navigation-link" to="/features"> Features </Link>
          <Link className="navbar-navigation-link" to="/pricing"> Pricing</Link>
          <Link className="navbar-navigation-link" to="/docs"> Docs </Link>

        </div>


        <div className="flex justify-between items-center gap-10">

          {isSearching ?
          <div className="relative flex items-center">
            <Search className="absolute left-2 dark:text-zinc-100/50 text-zinc-900/50" size={18} />
            <input 
            className="search-bar" 
            placeholder="Search..."
            value={searchQuery}
            onChange={searchData}
            />
          </div>
          :
          (<Tooltip>
            <TooltipTrigger asChild>
              <button onClick={openSearch}>
                <Search className="icon-button"/>
              </button>
            </TooltipTrigger>
            <TooltipContent className="tooltip-content">
              Search
            </TooltipContent>
          </Tooltip>)
          }

          <Separator orientation="vertical" className="vertical-separator"/>
          
          {/** Button Container */}

          <div className="flex items-center gap-6 ">

            {/**Sign up button */}
            <button onClick={()=> navigate("/auth/sign-up")}
            className={`cursor-pointer text-sm  m-0 transition-all font-bold flex items-center gap-2 py-2
             dark:text-white dark:border-white/40 text-black hover:text-blue-500 dark:hover:text-blue-400 border-black/40`}>
            
            Sign up
            </button>

             {/**Sign up button */}
            <button onClick={()=> navigate("/auth/sign-in")}
            className={`dashboard-rectangle-button`}>
            
            Log in
            </button>

        </div>
        
        <Separator orientation="vertical" className="vertical-separator"/>
        
        {/** Toggle Theme Button */}
        <Tooltip>
          <TooltipTrigger asChild>
          {/** theme changing container */}
          <button onClick={toggleTheme} className={`cursor-pointer transition hover:text-blue-500 dark:hover:text-blue-400`} >
          
          {isDark
          ? <Sun className="icon-button" />  
          : <Moon className="icon-button" />}
          </button>
          </TooltipTrigger>
          <TooltipContent className="tooltip-content">
            Toggle Theme
          </TooltipContent>
        </Tooltip>

        </div>  

      </div>

  </>
  )
}

export default Navbar