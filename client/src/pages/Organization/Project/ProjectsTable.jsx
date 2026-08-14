import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink, 
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { projects, projectTableColumns } from "@/assets/assets";
import { EllipsisVertical, Funnel, FunnelPlus } from 'lucide-react';
import ProjectDropDown from "./ProjectDropDown";
import { useFetchAllProjects } from "@/hooks/useProjects";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import ProjectsFilterDropDown from "./ProjectsFilterDropDown";


const ProjectsTable = () => {

  const {data, error, isPending} = useFetchAllProjects()

  const convertToDate = (dateString) => {
    const date = new Date(dateString)

    return date.toISOString().split("T")[0]

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
    <div className="max-h-150 overflow-auto border border-white/20">
         <div className={`bg-white dark:bg-zinc-900 flex p-3 items-center gap-6`}>
            <ProjectsFilterDropDown openTrigger={
            <div className="items-center flex gap-2 rounded-sm   hover:bg-zinc-800/10  p-2 border border-zinc-900/20 dark:border-white/10"> 
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button>
                        <FunnelPlus size={18} className="dark:text-white/50 text-black/70"/>
                        </button>
                    </TooltipTrigger>
                    <TooltipContent className={`rounded-sm dark:bg-zinc-100 bg-zinc-800 font-medium`}>
                        <p>Add Filter</p>
                    </TooltipContent>
                </Tooltip>
            </div>}>
            
            </ProjectsFilterDropDown>
            <div className="flex items-center text-base gap-4">
  
                <button className={`cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Github </button>
                <button className={`cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Manual </button>

                <div className={`w-px h-5 bg-white/20 dark:text-white/50 text-black/40`}></div>
                <button className={`cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Active </button>
                <button className={`cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Inactive </button>
                
                <div className={`w-px h-5 bg-white/20 dark:text-white/50 text-black/40`}></div>
                <button className={`cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Private </button>
                <button className={`cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Public </button>
            </div>
        </div>
        <div>
            <Table className={`bg-white dark:bg-zinc-900 dark:text-white/50 text-black/40`}>
                <TableHeader className={`text-base sticky top-0 z-10`}>
                    <TableRow >
                        {projectTableColumns.map((column) => {
                            return (
                            <TableHead className={`px-5 py-3 dark:text-white/70`} 
                            key={column.accessorKey}>
                                {column.header}
                            </TableHead>
                            )
                        } )}
                    </TableRow>
                
                </TableHeader>
                <TableBody className={`text-sm text-black/60 dark:text-white/50`}>

                    {data.map((project)=> {
                        return (
                        <TableRow key={project.project_id}>
                       
                        <TableCell className={`px-5`}>{project.project_name}</TableCell>
                         <TableCell className={`px-5`}>{project.category}</TableCell>
                        <TableCell className={`px-5`}>{project.source.toUpperCase()}</TableCell>
                        <TableCell className={`px-5`}>

                        <span className={`font-bold ${
                                project.status.toUpperCase() === "ACTIVE" ? " text-green-600 " : "text-red-600"
                            }`}>
                                {project.status.toUpperCase()}
                        </span>
                            
                        </TableCell>
                        <TableCell className={`px-5`}>{convertToDate(project.created_at)}</TableCell>
                        <TableCell className={`px-5`}>
                            <ProjectDropDown projectId={project.project_id} openTrigger = {
                                <button className="hover:text-blue-600 dark:hover:bg-zinc-300/10 hover:bg-zinc-600/10 rounded-full p-1">
                                    <EllipsisVertical/>
                                </button>
                            }>
                            </ProjectDropDown>
                        </TableCell>
                    </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Separator className={`text-white/20`}/>
                {/* Pagination for bug data */}
                <div className="p-2 bg-white dark:bg-zinc-900 bottom-0 sticky py-2 ">
                    <Pagination>
                        <PaginationContent>
                        <PaginationItem>
                            <PaginationLink className={`text-base`}  href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={`text-base`} href="#" isActive>2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={`text-base`} href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={`text-base`} href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className={`text-base`} href="#">5</PaginationLink>
                        </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
    </div>
    </>
  )
}

export default ProjectsTable