import {
  Loader2Icon,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateProjectDrawer from "./CreateProjectDrawer.jsx";
import { projectStats } from "@/assets/assets.js";
import ProjectsTable from "./ProjectsTable.jsx";
import EmptyProject from "./EmptyProject.js";
import { useFetchAllProjects } from "@/hooks/useProjects.js";
import {
  Users,
  FolderKanban,
  Folder,
  FolderGit2,
  FolderPlus
} from "lucide-react";

const Projects = () => {

  const {data, error, isPending} = useFetchAllProjects()

  const projectStats = [
    {
      title: "Projects",
      value: data?.length,
      icon: FolderKanban,
      description: "Total Projects",
    },
    {
      title: "GitHub Repos",
      value: 9,
      icon: FolderGit2,
      description: "Connected repositories",
    },
    {
      title: "Custom Projects",
      value: 9,
      icon: Folder,
      description: "Created manually",
    },
    {
      title: "Contributors",
      value: 42,
      icon: Users,
      description: "Across all projects",
    },
  ];

  if(!data){
    return (
    <EmptyProject/>)
  }

  if(error){
    return (
      <p>Encountered an issue while fetching projects.</p>
    )
  }

  if(isPending){
    return (
      <>
      <Loader2Icon className="animate-spin"/>
      <p>Loading projects...</p>
      </>
    )
  }


  return (
    <>
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold">
            Projects
          
          </h1>
          <p className="dark:text-white/40">Manage your projects and repositories.</p>


        </div>

        <div className="gap-4 flex items-center">

          <CreateProjectDrawer openTrigger={
        <button 
        className={`w-full py-2 rounded-full text-white text-sm font-semibold dark:bg-white dark:text-black px-4
            bg-zinc-800 dark:hover:bg-zinc-100 hover:bg-zinc-800
        hover:opacity-90 transition-opacity cursor-pointer items-center flex gap-2 justify-center`}>
        
        <FolderPlus className="text-white dark:text-black ml-2" size={24}/>
        New Project
        </button>}>

            </CreateProjectDrawer>
        </div>

      </div>


      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projectStats.map((stats) => {
            return (
        <Card key={stats.title} className={`rounded-sm border border-white/10`}>

          <CardHeader className="flex flex-row items-center justify-between pb-2">

            <CardTitle className="text-lg font-medium">
              {stats.title}
            </CardTitle>

            <stats.icon className="h-5 w-5 text-zinc-500"/>

          </CardHeader>
          <CardContent>

            <div className="text-2xl font-bold">
              {stats.value}
            </div>

            <p className="text-xs text-zinc-500 mt-1">
              {stats.description}
            </p>

          </CardContent>

        </Card>
            )
        })}
      </div>
      <div>
        <ProjectsTable/>
      </div>



    </div>
    </>
  )
}

export default Projects