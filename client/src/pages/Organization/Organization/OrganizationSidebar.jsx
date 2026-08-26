import {useTheme} from "../../../context/ThemeContext.jsx";
import logo from "../../../assets/d_bug.png"
import logo_black from "../../../assets/d_bug_black.png"
import { Inbox, Bug, FolderGit2, Columns3, ChartNoAxesCombined, Settings, Users, LayoutGrid, CircleCheck, UserRoundKey, Wallet, UsersRound, CircleUser, CreditCard, Folder, Activity, SquareUserRound} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { EllipsisVertical } from 'lucide-react';
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

 const yourOrganizationSidebarMenuItems = [

  {title: "Overview",
   url: "dashboard",
   icon: LayoutGrid
  },
  {title: "Team",
   url: "teams",
   icon: SquareUserRound
  },
  {title: "Members",
   url: "members",
   icon: UsersRound
  },
  {title: "Inbox",
   url: "inbox",
   icon: Inbox
  },
  {title: "Activity",
   url: "activity",
   icon: Activity
  },
  {title: "Reports",
   url: "reports",
   icon: ChartNoAxesCombined
  },
]

 const yourProjectsSidebarMenuItems = [

  {title: "Projects",
   url: "projects",
   icon: Folder
  },
   {title: "Repositories",
   url: "repositories",
   icon: FolderGit2
  },
  {title: "Bugs",
   url: "bugs",
   icon: Bug
  },
  {title: "Bug Board",
   url: "dashboard/bugboard",
   icon: Columns3
  }
]

  const {isDark} = useTheme();

  return (
    <>

    <Sidebar  collapsible="offcanvas">
      <SidebarHeader className={`bg-dashboard-container`}>
      <SidebarMenu className={`py-(--padding-vertical-sm)`}>
        <SidebarMenuItem>
        <Link to="/">
        <img src={isDark ? logo : logo_black} className="h-8 w-24"/>
        </Link>
        </SidebarMenuItem>
      </SidebarMenu>

      </SidebarHeader>


      <SidebarContent className={`py-(--padding-vertical-sm) bg-dashboard-container`}>
         <SidebarGroup>
          <SidebarGroupLabel  className="text-foreground/50 font-semibold">
            ORGANIZATION
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={`gap-md`}>
              {yourOrganizationSidebarMenuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild>
                      <button onClick={() => setActivePage(item.url)} className="cursor-pointer">
                      <div className="flex items-center gap-lg">
                        <item.icon size={18}/>
                        <span className={`text-sm  text-foreground/80 `} >{item.title}</span>
                        </div>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        {/* Your Projects */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground/50 font-semibold">
            PROJECTS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={`gap-md`}>
              {yourProjectsSidebarMenuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild>
                      <button onClick={() => setActivePage(item.url)} className="cursor-pointer">
                      <div className="flex items-center gap-lg">
                        <item.icon size={18}/>
                        <span className={`text-sm text-foreground/80`} >{item.title}</span>
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



      <SidebarFooter className={`gap-sm py-(--padding-vertical-md) bg-dashboard-container`}>
       <div className="justify-between flex items-center" >

        {/* Settings dropdown */}

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
          <button onClick = {()=> setActivePage("settings")} className="cursor-pointer">
          <div className="flex items-center px-(--padding-horizontal-sm) gap-lg w-full">
            <Settings size={18}/>
            <span className={`text-sm text-foreground/80`}>
            Settings
            </span>        
            </div>
          </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`min-w-44 rounded-sm`}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Organization Settings</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center gap-md">

                  <UserRoundKey />
                  <p>Manage Permissions</p>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Wallet/>
                  <p>Billing</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-md">
                  <CircleCheck  />
                  <p>Subscription</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>


          <div>
            <p>
              <EllipsisVertical size={18}/>
            </p>
          </div>
            
      </div>
    
      </SidebarFooter>
    </Sidebar>
    </>

  )
}

export default OrganizationSidebar