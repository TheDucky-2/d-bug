import { Moon, Sun, Bell, PanelLeft, Search, LogOut, CircleUser, UserCog, PanelLeftClose, PanelRightClose  } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useNavigate } from "react-router-dom";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const OrganizationNavbar = ({organizationLogo}) => {

    const {open, toggleSidebar} = useSidebar()
    const {isDark, toggleTheme} = useTheme()
    const [hasMessages, setHasMessages] = useState()
    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleNavigate = () => {
      navigate("/profile")

    }

  return (
    
    <nav className="flex sticky top-0 z-50 bg-dashboard-container justify-between items-center 
     sm:px-4 lg:px-(--padding-horizontal-md) py-(--padding-vertical-sm) px-(--padding-horizontal-sm)  ">
      
      <div className="gap-5 items-center flex ">

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="dashboard-icon-button" onClick={toggleSidebar}>
        
              {open ? <PanelLeftClose size={16}/> : <PanelRightClose  size={16}/>}
          
          </button>
        </TooltipTrigger>
        <TooltipContent className="tooltip-content">
          {open ? "Collapse Sidebar" : "Expand Sidebar"}
        </TooltipContent>
      </Tooltip>
      </div>

        <div className="flex items-center gap-8">
          <div className="relative gap-2 flex justify-center mr-4 items-center p-1">
            <button type="button" className="absolute left-3 -translate-y-1/2 top-1/2">
              <Search size={18} className="dashboard-icon-button "/>
            </button>
            <input className={` rounded-2xl text-xs
            px-(--padding-horizontal-xs) pl-10  mr-10 h-8 min-w-96 max-w-auto border hover:bg-zinc-200/60 hover:border-zinc-900
            dark:hover:border-zinc-400 dark:border-white/50 dark:hover:bg-gray-900 border-gray-700/40`} 
            type="text" placeholder="Search d_bug...." >
            </input>
            </div>
           
              <Tooltip>
                <TooltipTrigger asChild>
            {hasMessages ? 
            (
            <div className="relative">
                  <Bell size={18} className="dashboard-icon-button" /> 
                  <span className="absolute  -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />

            </div>
            )
            :  (<Bell size={18} className="dashboard-icon-button"/>)}
                </TooltipTrigger>
                <TooltipContent className="tooltip-content">
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>

            <Tooltip >
              <TooltipTrigger asChild>
                <button onClick={toggleTheme} className={`cursor-pointer `} >
                {isDark ? <Sun size={18} className="dashboard-icon-button" /> 
                : <Moon size={18} className="dashboard-icon-button" />}
                </button>
              </TooltipTrigger>
              <TooltipContent className="tooltip-content">
                <p>Switch Theme</p>
              </TooltipContent>
            </Tooltip>


                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="h-10 w-10">

                  <Avatar className={`cursor-pointer`}> 
                    <AvatarImage src={organizationLogo}/>
                    <AvatarFallback>ORG</AvatarFallback>
                  </Avatar>

                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-sm">
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

    </nav>


  )
}

export default OrganizationNavbar