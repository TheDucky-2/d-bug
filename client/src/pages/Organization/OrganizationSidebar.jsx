import {useTheme} from "../../context/ThemeContext.jsx";
import logo from "../../assets/d_bug.png"
import logo_black from "../../assets/d_bug_black.png"
import {sidebarMenuItems} from "../../assets/assets.js"
import { Inbox, Bug, FolderGit2, ChartNoAxesCombined, Settings, Users} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const OrganizationSidebar = ({setActivePage}) => {

  const {isDark} = useTheme();

  return (
    
    <Sidebar className={`border border-r-white/20`} collapsible="icon">
      <SidebarHeader>
      <SidebarMenu className={`mb-1`}>
        <SidebarMenuItem>
        <Link to="/">
        <img src={isDark ? logo : logo_black} className="h-10 w-32"/>
        </Link>
        </SidebarMenuItem>
      </SidebarMenu>

      </SidebarHeader>
      <Separator/>

      <SidebarContent className={`pt-2`}>
         <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={`gap-2`}>
              {sidebarMenuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild>
                      <button onClick={() => setActivePage(item.url)}>
                      <div className="flex items-center gap-2">
                        {
                          item.title === "Members" ? <Users size={18}/> :
                          item.title === "Inbox" ? <Inbox size={18}/> : 
                          item.title === "Bugs" ? <Bug size={18}/> :
                          item.title === "Projects" ? <FolderGit2 size={18}/> :
                          item.title === "Reports" ? <ChartNoAxesCombined size={18}/> : "None"
                        }
                        <span className={`text-sm ${isDark? "text-white/40 hover:text-white": "text-black"}`} >{item.title}</span>
                        </div>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator/>

      <SidebarFooter className={`gap-4 m-2`}>
       <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
          <button onClick = {()=> setActivePage("settings")}>
          <div className="flex items-center gap-2">
            <Settings size={18}/>
            <span className={`text-sm ${isDark? "text-white/40 hover:text-white": "text-black"}`}>Settings</span>        
            </div>
          </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`w-48`}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Organization Settings</DropdownMenuLabel>
                <DropdownMenuItem>Manage Permissions</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>


        
      </div>
    
      </SidebarFooter>
    </Sidebar>

  )
}

export default OrganizationSidebar