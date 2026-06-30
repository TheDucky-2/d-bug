import { Bell, Moon, Sun, Search, User, Settings, LogOut, ChevronRight, PanelLeftClose, PanelRightClose } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import bug from "../../assets/bug.jpg"
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

const Navbar = () => {

    const {isDark, handleDarkTheme} = useTheme();


  return (
    <>
    <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Manrope", sans-serif;
            }
    `}</style>

    <div className={`sticky top-0 z-50 flex gap-2 justify-between ${isDark ? "bg-black text-white/80": "bg-white text-black"} py-2 px-5 border-b border-white/30`}>

       {/* Search bar */}
       <div className="flex items-center w-80 mb-3 gap-2">

        <div className="flex items-center p-2 gap-2">
        <Link to="/projects">
        All Projects
        </Link>
        <ChevronRight size={16}/>
        <Link to="/bugs">
        Bugs
        </Link>
        
          </div>
       </div>

        {/* Theme toggle button */} 
       <div className="relative gap-2 flex justify-center mr-4 items-center p-1">
          <button type="button" className="absolute left-3 -translate-y-1/2 top-1/2">
          <Search size={18}/>
          </button>
          <input className={`border rounded px-3 pl-10 text-m mr-10 h-8 max-w-auto ${isDark ? "border-2 border-white/30 hover:bg-gray-900" : "border-2 border-gray-700"}`} 
          type="text" placeholder="Search bugs..." >
          </input>

          <button className="cursor-pointer hover:text-blue-500" onClick={handleDarkTheme}>
          {isDark ? <Sun size={20}/> : <Moon size={20}/>  }
          </button>

          {/* Notification bell */}

          <button className="cursor-pointer hover:text-blue-500 mx-8">
          <Bell size={18}/>
          </button>

          <div className="w-px h-6 bg-gray-300/30 dark:bg-gray-700"></div>

          <div className="mx-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar size="m" className="my-3">
                    <AvatarImage src={bug}/>
                    <AvatarFallback>B</AvatarFallback>
                </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" side="bottom" avoidCollisions sideOffset={4} collisionPadding={8}>
                <DropdownMenuGroup className={isDark ? "bg-black text-white/80": "bg-white text-black"}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem> <User/>Profile</DropdownMenuItem>
                  <DropdownMenuItem><Settings/>Settings</DropdownMenuItem>
                  <DropdownMenuItem><LogOut/>Logout</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
              </DropdownMenu>
            </div>


       </div>
    </div>
    </>
  )
}

export default Navbar