import {columns} from "../../../assets/assets.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
} from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext.jsx";
import { bugs } from "../../../assets/assets.js";
import { CircleDot, RefreshCw, CircleCheck, Clock, TriangleAlert, Plus, Funnel} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator.jsx";

const DataTable = () => {

  const {isDark} = useTheme()

  return (

      <Card className={` border border-white/20 ${isDark ? "bg-zinc-900 text-white/50" : "bg-zinc-100 text-black"} mb-5`}>
        <div className="max-h-125 overflow-auto">
            <div className="px-2 gap-5 flex items-center justify-between w-full pb-2">
              <div className="flex items-center text-lg gap-6">
                <span className={isDark ? "text-white/30" : "text-black/30"}> <div className="items-center flex gap-1"><Funnel/>FILTER </div> </span>
  
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> All </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> Open </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> In Progress </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> In Review </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> Resolved </button>

                <div className={`w-px h-5 ${isDark ? "bg-white/20" : "text-black/40"}`}></div>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> Low </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> Medium </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}>High </button>
                <button className={`cursor-pointer hover:text-blue-400 ${isDark ? "text-white/50" : "text-black/50"}`}> Critical</button>
              
              </div>
                <div>
                  <button 
                  className={`px-4 py-2 flex items-center gap-2 text-base font-semibold bg-yellow-500 hover:bg-yellow-400
                   ${isDark ? "text-black" : "text-zinc-800"}`}> <Plus/>New Bug</button>
                </div>
            </div>
        <Table >
          <TableHeader>


          </TableHeader>
          <TableHeader>
            <TableRow>
                {columns.map((column) => {
                  return (
                    <TableHead>{column.header}</TableHead>
                  )})}
            </TableRow>
          </TableHeader>

          <TableBody>

              {bugs.map((bug) => {

              const bugSeverity = bug.severity.slice(0,1).toUpperCase() + bug.severity.slice(1)

              return (
              <>
               <TableRow>
              <TableCell key={bug.id} >{bug.id}</TableCell>
              <TableCell className={`${isDark ? "text-white" : "text-black"}`}>
                <div className="flex items-center gap-2">
                {bugSeverity === "Critical" && <TriangleAlert color="red"/>}
                {bug.title}
                </div>
              </TableCell>
              <TableCell>{bug.project}</TableCell>
              <TableCell>
              <div className="flex gap-3 items-center p-2">
                <div className={`h-3 w-3 rounded-full 
                  ${bugSeverity === "Critical" ? "bg-red-500 text-red-500" :
                    bugSeverity === "High" ? "bg-orange-500 text-orange-500" :
                    bugSeverity === "Medium" ? "bg-yellow-500 text-yellow-500" :
                    bugSeverity=== "Low" ? "bg-green-500 text-green-500" : "bg-amber-100" 
                  }`}></div>

                <span className={`font-semibold
                  ${bugSeverity === "Critical" ? "text-red-500" :
                    bugSeverity === "High" ? "text-orange-500" :
                    bugSeverity === "Medium" ? "text-yellow-500" :
                    bugSeverity=== "Low" ? "text-green-500" : "bg-amber-100" 
                  }`}>{bugSeverity}</span>
              </div>
              </TableCell>
              <TableCell>
                <div className={`gap-2 flex items-center`}> 
                  {bug.status === "Open" && <CircleDot  size={18} className={`${isDark ? "text-white/30" : "text-black/50"}`}/>}
                  {bug.status === "In Progress" && <RefreshCw size={18} className={`${isDark ? "text-blue-600" : "text-blue-700"} animate-spin`} style={{animationDuration: "3s"}}/>}
                  {bug.status === "Resolved" && <CircleCheck size={18} className={`${isDark ? "text-green-600" : "text-green-700"}`}/>}
                  {bug.status === "In Review" && <Clock size={18} className={`${isDark ? "text-yellow-500" : "text-yellow-600"}`}/>}


                <span className={`font-semibold 
                  ${bug.status === "Open" ? isDark ? "text-white/50" : "text-black/50" :
                    bug.status === "In Progress" ? "text-blue-600" :
                    bug.status === "In Review" ? "text-yellow-500" :
                    bug.status=== "Resolved" ? "text-green-600" : "text-white/50" 
                  }`}> 
                {bug.status} 
                
                </span>
                </div>
              </TableCell>

              <TableCell>
              {bug.assignee}
              </TableCell>

              <TableCell>{bug.updated}</TableCell>
              </TableRow>
              </>
              )})}

          </TableBody>
        </Table>
        <Separator/>
        <div className="p-2 mt-2">
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
      </Card>
  )
}

export default DataTable