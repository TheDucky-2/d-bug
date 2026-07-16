import {
  Users,
  FolderKanban,
  Activity,
  ArrowUpRight,

  Plus,
  Bug,
} from "lucide-react";
import { CircleDot, RefreshCw, CircleCheck, Clock,} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddMemberDialog from "./AddMemberDialog";
import { useTheme } from "@/context/ThemeContext";
import CreateProjectDrawer from "./CreateProjectDrawer";

const OrganizationMainContent = ({ organization }) => {

  const {isDark} = useTheme()

const stats = [
  {
    title: "Members",
    value: "124",
    icon: Users,
    description: "Active organization members",
  },
  {
    title: "Active Projects",
    value: "18",
    icon: FolderKanban,
    description: "Currently running projects",
  },
  {
    title: "Open Bugs",
    value: "78",
    icon: Bug,
    description: "Issues requiring attention",
  },
  {
    title: "Monthly Activity",
    value: "342",
    icon: Activity,
    description: "Actions this month",
  },
];


  const activities = [
    {
      title: "New member joined",
      user: "Alex Smith",
      time: "5 minutes ago",
    },
    {
      title: "Project created",
      user: "Marketing Team",
      time: "2 hours ago",
    },
    {
      title: "Billing updated",
      user: "Admin",
      time: "Yesterday",
    },
  ];


  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back,
            {" "}
            {organization?.organization_name || "Organization"}.
          </h1>

        </div>

        <div className="gap-4 flex items-center">

          <AddMemberDialog openTrigger={
        <button className={`bg-yellow-500 px-4 py-2 font-medium hover:bg-yellow-600 flex items-center cursor-pointer `}>
          <span className="text-sm text-black">Add Member</span>
           <Plus className="ml-2 h-4 w-4 text-black"/>
        </button>}>
        </AddMemberDialog>

          <CreateProjectDrawer openTrigger={
            <button 
            className={`flex items-center px-2 py-2 text-sm font-medium dark:bg-zinc-200 bg-zinc-900 border border-black/10 `}>
              <span className="text-sm text-white dark:text-black">Create Project</span>
              <ArrowUpRight className="text-white dark:text-black ml-2 h-4 w-4"/>
            </button>
          }>

            </CreateProjectDrawer>
        </div>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((item)=>{

          const Icon = item.icon;

          return (

            <Card key={item.title} className={`rounded-sm`}>

              <CardHeader className="flex flex-row items-center justify-between pb-2">

                <CardTitle className="text-lg font-medium">
                  {item.title}
                </CardTitle>

                <Icon className="h-5 w-5 text-zinc-500"/>

              </CardHeader>


              <CardContent>

                <div className="text-2xl font-bold">
                  {item.value}
                </div>

                <p className="text-xs text-zinc-500 mt-1">
                  {item.description}
                </p>

              </CardContent>

            </Card>

          )

        })}

      </div>

      {/* Main Sections */}
      <div className="space-y-4">

        {/* Recent Activity */}
        <Card className="lg:col-span-1 rounded-sm">

          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5"/>
              Recent Activity
            </CardTitle>
          </CardHeader>


          <CardContent className="space-y-4">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  pb-3
                  last:border-none
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      h-9
                      w-9
                      rounded-full
                      bg-zinc-200
                      dark:bg-zinc-700
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Activity className="h-4 w-4"/>
                  </div>


                  <div>
                    <p className="text-sm font-medium">
                      {activity.title}
                    </p>

                    <p className="text-xs text-zinc-500">
                      {activity.user}
                    </p>
                  </div>

                </div>


                <span className="text-xs text-zinc-500">
                  {activity.time}
                </span>

              </div>

            ))}

          </CardContent>

        </Card>

        {/* Active Projects */}
        <Card className="lg:col-span-1 rounded-sm">

          <CardHeader>

            <CardTitle className="text-lg flex items-center gap-2">
              <FolderKanban className="h-5 w-5"/>
              Active Projects
            </CardTitle>

          </CardHeader>

          <CardContent className="space-y-4">


            {[
              {
                name: "CRM Platform",
                progress: "75%",
                team: "8 members"
              },
              {
                name: "Mobile App",
                progress: "45%",
                team: "5 members"
              },
              {
                name: "Website Redesign",
                progress: "90%",
                team: "12 members"
              }

            ].map((project,index)=>(


              <div
                key={index}
                className="
                border
                rounded-lg
                p-3
                space-y-2
                "
              >

                <div className="flex justify-between">

                  <p className="font-medium text-sm">
                    {project.name}
                  </p>

                  <span className="text-xs text-zinc-500">
                    {project.progress}
                  </span>

                </div>


                <div
                  className="
                  h-2
                  rounded-full
                  bg-zinc-200
                  dark:bg-zinc-700
                  "
                >

                  <div
                    className="
                    h-2
                    rounded-full
                    bg-zinc-700 dark:bg-zinc-300/80
                    "
                    style={{
                      width: project.progress
                    }}
                  />

                </div>


                <p className="text-xs text-zinc-500">
                  {project.team}
                </p>


              </div>

            ))}


          </CardContent>

        </Card>

        {/* Recent Bugs */}
        <Card className="lg:col-span-1 rounded-sm">


          <CardHeader>

            <CardTitle className="text-lg flex items-center gap-2">

              <Bug className="h-5 w-5"/>

              Recent Bugs

            </CardTitle>

          </CardHeader>

          <CardContent className="space-y-4">


            {[
              {
                title:"Login page crash",
                priority:"High",
                status:"Open"
              },
              {
                title:"Dashboard loading slow",
                priority:"Medium",
                status:"In Review"
              },
              {
                title:"Email notification issue",
                priority:"Low",
                status:"Resolved"
              }

            ].map((bug,index)=>(


              <div
                key={index}
                className="
                flex
                justify-between
                items-center
                border-b
                pb-3
                last:border-none
                "
              >


                <div>

                  <p className="text-sm font-medium">
                    {bug.title}
                  </p>

                  <p className="text-xs text-zinc-500">
                    Priority: {bug.priority}
                  </p>

                </div>
                  <div className="flex items-center gap-1">
                     {bug.status === "Open" && <CircleDot  size={14} className={`${isDark ? "text-zinc-200/90" : "text-black/50"}`}/>}
                      {bug.status === "In Progress" && <RefreshCw size={14} className={`${isDark ? "text-blue-600" : "text-blue-700"}`}/>}
                      {bug.status === "Resolved" && <CircleCheck size={14} className={`${isDark ? "text-green-600" : "text-green-700"}`}/>}
                      {bug.status === "In Review" && <Clock size={14} className={`${isDark ? "text-yellow-500" : "text-yellow-600"}`}/>}

                  <span className={`font-semibold text-sm
                    ${bug.status === "Open" ?  "dark:text-white/50 text-black/50" : 
                      bug.status === "In Progress" ? "dark:text-blue-600 text-blue-800" :
                      bug.status === "In Review" ? "dark:text-yellow-500 text-yellow-700" :
                      bug.status=== "Resolved" ? "dark:text-green-600 text-green-700 " : 
                      bug.status === "Reopened" ? "dark:text-purple-500 text-purple-700" : "text-gray-500"
                    }`}> 
                  {bug.status} 
                  
                  </span>
                    </div>

              </div>


            ))}


          </CardContent>
        </Card>
</div>

    </div>
  );
};


export default OrganizationMainContent;
