import { Moon, Sun, Bell, PanelLeft, Search, LogOut, CircleUser, UserCog  } from "lucide-react";
import { useTheme } from "@/context/ThemeContext.jsx";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext";
import Profile from "../../Profile";
import { useNavigate } from "react-router-dom";

const OrganizationNavbar = ({organizationLogo}) => {

    const {isDark, toggleTheme} = useTheme()
    const [hasMessages, setHasMessages] = useState()
    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleNavigate = () => {
      navigate("/profile")

    }

  return (
    <>
  <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Inter";
            }
    `}
    </style>
    <div className="flex sticky top-0 z-50 justify-between items-center px-2 sm:px-4 lg:px-6 py-2">
      <div className="gap-5 items-center flex ">
        <PanelLeft className="h-5 w-5 text-zinc-700 dark:text-zinc-400  dark:hover:text-blue-400 transition-colors"/>
      </div>

        <div className="flex items-center gap-8">
          <div className="relative gap-2 flex justify-center mr-4 items-center p-1">
            <button type="button" className="absolute left-3 -translate-y-1/2 top-1/2">
              <Search size={18}/>
            </button>
            <input className={`border rounded px-3 pl-10 text-m mr-10 h-8 min-w-96 max-w-auto ${isDark ? "border-2 border-white/30 hover:bg-gray-900" : "border-2 border-gray-700"}`} 
            type="text" placeholder="Search bugs..." >
            </input>
            </div>
           
            {hasMessages ? 
            (
            <div className="relative">
              <Bell className="h-5 w-5 text-zinc-700 dark:text-zinc-400" /> 
              <span className="absolute  -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
            </div>
            )
            :  (<Bell className="h-5 w-5 text-zinc-700 dark:text-zinc-400"/>)}

            <button onClick={toggleTheme} className={`cursor-pointer h-10 w-10`} >
            {isDark ? <Sun className="h-5 w-5 text-zinc-700 dark:text-zinc-400  dark:hover:text-blue-400 transition-colors" /> 
            : <Moon className="h-5 w-5 text-zinc-700 dark:text-zinc-400 hover:text-blue-400 transition-colors" />}
            </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="h-10 w-10">
                <Avatar>
                  <AvatarImage src={organizationLogo}/>
                  <AvatarFallback>ORG</AvatarFallback>
                </Avatar>

                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <button onClick={handleNavigate} className="cursor-pointer flex items-center gap-2">
                        <CircleUser />
                        Profile
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer"> 
                      <UserCog  />
                      User Settings
                      </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <button 
                    className="items-center flex gap-2 cursor-pointer"
                    onClick={logout}
                    >
                      <LogOut/>
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

        </div>

    </div>
    </>

  )
}

export default OrganizationNavbar