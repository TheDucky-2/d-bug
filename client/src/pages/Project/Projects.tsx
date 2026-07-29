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
    <div className="space-y-4">

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
            <button className={`bg-yellow-500 px-4 py-2 font-medium hover:bg-yellow-600 flex items-center cursor-pointer `}>
              <span className="text-sm text-black">Create New Project</span>
              <Plus className="text-black ml-2 h-4 w-4"/>
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
  )
}

export default Projects