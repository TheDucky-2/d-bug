import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/d_bug.png"
import BlackLogo from "../../assets/d_bug_black.png"
import {Moon, Sun, Search, Menu, X} from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import {useAuth} from "../../context/AuthContext.js";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";
import { useSearch } from "@/hooks/useSearch.ts";
import "./Navbar.css";
import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { Input } from "../ui/input";
import { Home, Sparkles, BadgeDollarSign, BookOpen, CirclePlay, Bug, Users, ShieldCheck, Plug } from "lucide-react"
import { menu } from "framer-motion/m";

const Navbar = () => {

  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {isDark, toggleTheme} = useTheme();
  const navigate = useNavigate()
  const {isSearching, searchQuery, openSearch, searchData, setIsSearching} = useSearch()

  useLayoutEffect(() => {
    gsap.context(() => {
      if(isMenuOpen){
        gsap.fromTo(menuRef.current, {
        x: 500,
        opacity: 0,
        duration: 1
      },{
        x: 0,
        opacity: 1,
        duration: 1
      })}
    },
  menuRef.current)


  }, [isMenuOpen])

  return (
    <header>
      <nav id="navbar">
        
        {/** Logo container */}
                
        <Link to="/">
          <img 
          src={isDark ? Logo : BlackLogo}
          alt="logo"
          className="nav-logo"
          />
        </Link>    


        {/** link container */}
        <div id="desktop-navlink-container">

          <Link className="navlink" to="/"> Home</Link>
          <Link className="navlink" to="/features"> Features </Link>
          <Link className="navlink" to="/pricing"> Pricing</Link>
          <Link className="navlink" to="/docs"> Docs </Link>

        </div>


        <div className="desktop-btn-container ">

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
          
          {/** Button Container */}
             {/**Sign up button */}
            <button onClick={()=> navigate("/auth/sign-in")}
            className={`desktop-login-btn`}>
            
            Log in
            </button>

    
        
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

        <button 
        id="mobile-nav-menu-trigger"
        onClick={() => {setIsMenuOpen(prev => !prev)
          console.log("Opening menu")
        } }>
          {isMenuOpen ? <X size={18}/> : <Menu size={18}/>}
        </button>

        <div ref={menuRef} 
        className={`mobile-nav-menu ${isMenuOpen ? "open" : ""}`}>

        {/** Toggle Theme Button */}
        <Tooltip>
          <TooltipTrigger asChild>
          {/** theme changing container */}
          <button onClick={toggleTheme} 
          className={`cursor-pointer transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 self-end`} >
          
          {isDark
        ? <Sun size={20} className="icon-button" />  
          : <Moon size={20} className="icon-button" />}
          </button>
          </TooltipTrigger>
          <TooltipContent className="tooltip-content">
            Toggle Theme
          </TooltipContent>
        </Tooltip>

        {/** Search Bar */}
          
        { isSearching 
          ? <Input 
          placeholder="Search..."
          className="search-bar"
          />
          :<button 
          onClick={() => setIsSearching(prev => !prev)}
          className="search-btn navlink">
            <Search color="crimson" size={20}/>
            Search
          </button> }

            <div id="navlink-container">
              <Link to="/" className="navlink">
              <Home size={20} color="crimson"/>
                Home
              </Link>
              <Link to="/features" className="navlink">
                <Sparkles size={18} color="crimson"/>
                Features
              </Link>
              <Link to="/features" className="navlink">
                <CirclePlay size={18} color="crimson"/>
                How it works
              </Link>
              <Link to="/pricing" className="navlink">
              <BadgeDollarSign size={18} color="crimson"/>    
              Pricing
              </Link>
              <Link to="/docs" className="navlink">
              <BookOpen size={18} color="crimson"/>
              Docs
              </Link>
            </div>

        <Separator className="mobile-nav-menu-separator"/>
            <div id="navlink-container">
               
              <Link to="/" className="navlink">
              <Bug size={20} color="crimson"/>
                Bug Triage
              </Link>

              <Link to="/" className="navlink">
              <Users   size={20} color="crimson"/>
                Team Collaboration
              </Link>


              <Link to="/" className="navlink">
              <Plug   size={20} color="crimson"/>
                Integrations
              </Link>

              <Link to="/" className="navlink">
              <ShieldCheck size={20} color="crimson"/>
                Security
              </Link>

            </div>


            <Separator className="mobile-nav-menu-separator"/>
            <div className="btn-container">

            <Link 
              to="/auth/sign-in"
              className="log-in-btn" >
                Log in
              </Link>

              <Link 
              to="/auth/sign-up"
              className="button-primary flex items-center justify-center  " >
                Get started
              </Link>
            </div>
            
        </div>

      </nav>
      </header>

  )
}

export default Navbar