import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Funnel, TriangleAlert, CircleAlert, OctagonAlert, CircleCheck } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink, 
} from "@/components/ui/pagination";
import { emails, inboxTableColumns } from "@/assets/assets";
import { useTheme } from "next-themes";

const InboxTable = () => {

    const {isDark} = useTheme()

  return (
    <div>

        <div className="border border-white/20 ">
        <div className={`bg-white dark:bg-zinc-900 flex p-3 items-center gap-6  `}>
            <div className="items-center flex gap-2">
             <Funnel size={18} className="dark:text-white/50 text-black/70"/>
             <p className="text-xl dark:text-white/50 text-black">Filters</p>
            </div>
              <div className="flex items-center text-base gap-4">
  
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Critical</button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> High </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Medium </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Low </button>

                <div className={`w-px h-5 bg-black/50 dark:bg-white/30 text-black/50`}></div>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Active </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Inactive </button>
              
              </div>
        </div>
        <div className="max-h-150 overflow-auto">
            <Table className={`bg-white dark:bg-zinc-900 dark:text-white/50 text-black/40`}>
                <TableHeader className={`text-base sticky top-0 z-10`}>
                    <TableRow >
                        {inboxTableColumns.map((column) => {
                            return (
                            <TableHead className={`px-5 py-3 dark:text-white/70 text-black font-semibold`} 
                            key={column.accessorKey}>
                                {column.header}
                            </TableHead>
                            )
                        } )}
                    </TableRow>
                
                </TableHeader>
                <TableBody className={`text-sm font-medium dark:text-white/40 text-black/50`}>

                    {emails.map((email)=> {
                        return (
                            
                            <TableRow>
                                <TableCell className={`px-5`}>{email.email}</TableCell>
                                <TableCell className={`px-5`}>{email.subject}</TableCell>
                                <TableCell className={`px-5`}>{email.project}</TableCell>
                                <TableCell className={`px-5`}>
                                    <div className="flex items-center gap-1">
                                
                                <span className={`px-3 font-semibold py-2 rounded-full items-center flex gap-2 ${
                                    email.severity === "Critical" ? "text-red-500 " :
                                    email.severity === "High" ? "text-orange-500" :
                                    email.severity === "Medium" ? "text-yellow-500" : 
                                    email.severity === "Low" ? "text-white/70" : "text-black" 
                                }`}>
                                    {email.severity === "Critical" && <OctagonAlert size={20}/>}
                                    {email.severity === "High" && <TriangleAlert size={20}/>}
                                    {email.severity === "Medium" && <CircleAlert size={20}/>}
                                    {email.severity === "Low" && <CircleCheck size={20}/>}
                                    {email.severity}
                                </span>
                                </div>
                                </TableCell>
                                
                                <TableCell className={`px-5`}>
                                <div className="flex items-center gap-1">
    
                                <span className={`font-semibold text-sm rounded-full flex items-center gap-2 px-4 py-1 
                                ${email.status === "Open" ?  "dark:text-white/80 dark:bg-white/20 text-black/70 bg-zinc-400/30" : 
                                    email.status === "In Progress" ? "dark:text-blue-500 dark:bg-blue-600/20 text-blue-600 bg-blue-500/20" :
                                    email.status === "In Review" ? "dark:text-yellow-500 dark:bg-yellow-500/20 text-yellow-700 bg-yellow-500/20" :
                                    email.status=== "Resolved" ? "dark:text-green-600 dark:bg-green-500/20 text-green-700 bg-green-500/20 " : 
                                    email.status === "Reopened" ? "dark:text-purple-500 dark:bg-purple-500/20 text-purple-700 bg-purple-500/20" : "text-gray-500"
                                }`}> 
                          
                                {email.status} 
                                
                                </span>
                                </div>
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
    </div>
  )
}

export default InboxTable