import {useTheme} from "../../context/ThemeContext.jsx";
import logo from "../../assets/d_bug.png"
import logo_black from "../../assets/d_bug_black.png"
import {sidebarMenuItems} from "../../assets/assets.js"
import { LayoutGrid, Inbox, Bug, FolderGit2, ChartNoAxesCombined, Settings} from "lucide-react";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";

const AppSidebar = () => {

  const {isDark} = useTheme();

  return (
    
    <Sidebar className={`border border-r-white/20`} collapsible="icon">
      <SidebarHeader>
      <SidebarMenu className={`mb-1 pt-1`}>
        <SidebarMenuItem>
        <Link to="/">
        <img src={isDark ? logo : logo_black} className="h-10 w-32"/>
        </Link>
        </SidebarMenuItem>
      </SidebarMenu>

      </SidebarHeader>
      <Separator/>
        <SidebarMenu className={`m-3`}>
        <SidebarMenuItem>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>

                  <div className="flex items-center gap-2 ">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-lg"> All Projects</span>
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="text-lg">Project 1</NavigationMenuLink>
                  <NavigationMenuLink className="text-lg">Project 2</NavigationMenuLink>
                  <NavigationMenuLink className="text-lg">Project 3</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        
        </SidebarMenuItem>
      </SidebarMenu>

      <Separator/>

      <SidebarContent className={`pt-2`}>
         <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={`gap-2`}>
              {sidebarMenuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                      <div className="flex items-center gap-2">
                        {
                          item.title === "Overview" ? <LayoutGrid size={20}/> :
                          item.title === "Inbox" ? <Inbox size={20}/> : 
                          item.title === "Bugs" ? <Bug size={20}/> :
                          item.title === "Repositories" ? <FolderGit2 size={20}/> :
                          item.title === "Reports" ? <ChartNoAxesCombined size={20}/> : "None"
                        }
                        <span className={`text-lg ${isDark? "text-white/40 hover:text-white": "text-black"}`} >{item.title}</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator/>

      <SidebarFooter className={`gap-4 m-4`}>
       <div>
        <Link to="/settings">
         <div className="flex items-center gap-2">
        <Settings/>
        <span className={`text-lg ${isDark? "text-white/40 hover:text-white": "text-black"}`}>Settings</span>        
        </div>
        
        </Link>
      </div>
    
      </SidebarFooter>
    </Sidebar>

  )
}

export default AppSidebar