import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/d_bug.png";
import logo_black from "../assets/d_bug_black.png";
import {Moon, Sun} from "lucide-react"
import { useTheme } from "../context/ThemeContext.jsx";
import {useAuth} from "../context/AuthContext.jsx";

const Navbar = () => {

  const {isDark, handleDarkTheme} = useTheme();
  const {isLoggedIn, handleAuth} = useAuth();
  const navigate = useNavigate()

  return (
    <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>
    <nav>
      <div className={`shadow-md sticky top-0 z-50 justify-between items-center p-6 flex h-16 w-full m-0 ${isDark ? "bg-black text-white" : "bg-white text-black border-b border-gray-300"} `}>
        
        {/** Logo container */}
        <div>
          <Link to="/">
        <img src={isDark ? logo : logo_black} className="h-10"/>
          </Link>
        </div> 

        {/** link container */}
        <div className={`flex gap-8 justify-between`}>
          <Link className={`text-lg hover:text-blue-400`} to="/"> Home</Link>
          <Link className="text-lg  hover:text-blue-400" to="/features"> Features </Link>
          <Link className="text-lg  hover:text-blue-400" to="/pricing"> Pricing</Link>
          <Link className="text-lg  hover:text-blue-400" to="/pricing"> Docs </Link>

        </div>

        <div className="flex justify-between items-center gap-10">
        {/** theme changing container */}
        <button onClick={handleDarkTheme} className={`cursor-pointer transition hover:text-blue-400`} >
        
        {isDark ? <Sun /> : <Moon />}
        </button>

        {/** login button container */}
        {isLoggedIn
        ?
        (<button onClick={()=> navigate("/dashboard")}
        className={`cursor-pointer rounded text-l px-3.5 py-1.5 m-2 transition font-medium ${isDark ? "bg-green-600 hover:bg-green-700 text-white/90" : "bg-green-400 hover:bg-green-500 text-zinc-800"}`}>
        Go To Dashboard
        </button>  )

        :(<button onClick={handleAuth}
        className={`cursor-pointer rounded text-l px-3.5 py-1.5 m-2 transition font-medium ${isDark  ? "bg-zinc-300 hover:bg-zinc-100 text-black" : "bg-zinc-900 hover:bg-zinc-700 text-white"}`}>
        Log in
        </button>)} 

        </div>  
      </div>
  </nav>
  </>
  )
}

export default Navbar