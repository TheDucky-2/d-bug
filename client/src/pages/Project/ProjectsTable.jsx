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
import { EllipsisVertical, Funnel } from 'lucide-react';
import ProjectDropDown from "./ProjectDropDown";

const ProjectsTable = () => {
  return (
    <div className="max-h-150 overflow-auto border border-white/20">
         <div className={`bg-white dark:bg-zinc-900 flex p-3 items-center gap-6`}>
            <div className="items-center flex gap-2">
                <Funnel size={18} className="dark:text-white/50 text-black/40"/>
                <p className="text-xl dark:text-white/50 text-black/40">Filter</p>
            </div>
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

                    {projects.map((project)=> {
                        return (
                    <TableRow>
                        <TableCell className={`px-5`}>{project.project_id}</TableCell>
                        <TableCell className={`px-5`}>{project.name}</TableCell>
                        <TableCell className={`px-5`}>{project.owner}</TableCell>
                        <TableCell className={`px-5`}>{project.source}</TableCell>
                        <TableCell className={`px-5`}>{project.visibility}</TableCell>
                        <TableCell className={`px-5`}>{project.members}</TableCell>
                        <TableCell className={`px-5`}>{project.status}</TableCell>
                        <TableCell className={`px-5`}>{project.created_at}</TableCell>
                        <TableCell className={`px-5`}>
                            <ProjectDropDown openTrigger = {
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
  )
}

export default ProjectsTable