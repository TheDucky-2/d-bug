import {columns} from "../../../assets/assets.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.jsx";
import {
  Card,
} from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext.jsx";
import { bugs } from "../../../assets/assets.js";
import {
  TriangleAlert,
  Flame,
  CircleAlert,
  Info
} from "lucide-react";
import { CircleDot, RefreshCw, CircleCheck, Clock, Plus, Funnel, UserPlus, SquarePen, X, SquareArrowOutUpRight, RotateCcw} from "lucide-react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { useState } from "react";
import CreateBugDialog from "../CreateBugDialog.jsx";

const DataTable = () => {

  const [openDrawer, setOpenDrawer] = useState(false)
  const {isDark} = useTheme()




  const handleBugDrawer = () => {
    setOpenDrawer(true)
  }

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
                    
                  <CreateBugDialog openTrigger={
                  <button 
                  className={`px-3 py-2 flex items-center gap-2 text-base font-semibold bg-yellow-500 hover:bg-yellow-400
                   ${isDark ? "text-black" : "text-zinc-800"}`}> <Plus/>New Bug
                   </button>
                  }/>

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
                  {bug.status === "Reopened" && <RotateCcw size={18} className={`${isDark ? "text-purple-500" : "text-purple-600"}`}/>}


                <span className={`font-semibold 
                  ${bug.status === "Open" ? isDark ? "text-white/50" : "text-black/50" :
                    bug.status === "In Progress" ? "text-blue-600" :
                    bug.status === "In Review" ? "text-yellow-500" :
                    bug.status === "Resolved" ? "text-green-600" : 
                    bug.status === "Reopened" ? "text-purple-500" : "text-gray-500"
                  }`}> 
                {bug.status} 
                
                </span>
                </div>
              </TableCell>

              <TableCell>
              {bug.assignee}
              </TableCell>

              <TableCell>{bug.updated}</TableCell>
                
              <TableCell>

                    <div>
                    <Drawer direction = "right">
                      <DrawerTrigger>
                      <SquareArrowOutUpRight size={18}/>
                      </DrawerTrigger>
                      <DrawerContent className="h-full">

                        <DrawerHeader className={`border-b dark:border-zinc-200/10 border-zinc-800/20`}>

                          <div className="flex justify-between">
                            <DrawerTitle className={`text-xl text-zinc-700/70 dark:text-zinc-200/60`}>
                            {bug.id}
                            </DrawerTitle>
                            <DrawerClose render={<button variant="outline" />}> <X/> </DrawerClose>
                          </div>
                        </DrawerHeader>

                        <div className="flex flex-col px-5 py-4 gap-6">
                          <div className="flex flex-col gap-2">
                          
                          <span className={` items-center shrink-0 flex text-lg font-medium gap-2
                            ${bugSeverity === "Critical" ? "text-red-500" :
                              bugSeverity === "High" ? "text-orange-500" :
                              bugSeverity === "Medium" ? "text-yellow-500" :
                              bugSeverity=== "Low" ? "text-green-500" : "bg-amber-100" }`}>
                                
                            { bugSeverity === "Critical" ? <TriangleAlert size={25}/> :
                                bugSeverity === "High" ? <Flame size={20}/> :
                                bugSeverity === "Medium" ? <CircleAlert size={20}/>:
                                bugSeverity === "Low" ? <Info size={20}/> : "?"
                              }
                              {bugSeverity === "Critical" || bugSeverity == "High" 
                              ? `${bugSeverity} - Requires Immediate Attention` : `${bugSeverity}`}
                            </span>

                            <h3 className="text-xl">{bug.title}</h3>
                          
                          </div>
                          
                          <div className="flex flex-col gap-4 text-lg text-zinc-900/40 dark:text-zinc-400/60">
                            <div className="flex items-center justify-between">
                              <h3>SEVERITY</h3>
                              <span className={`font-semibold
                              ${bugSeverity === "Critical" ? "text-red-500" :
                                bugSeverity === "High" ? "text-orange-500" :
                                bugSeverity === "Medium" ? "text-yellow-500" :
                                bugSeverity=== "Low" ? "text-green-500" : "bg-amber-100" 
                              }`}>{bugSeverity}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <h3>STATUS</h3>
                              <div className="flex items-center gap-2 text-zinc-200/90">
                                  {bug.status === "Open" && <CircleDot  size={18} className={`${isDark ? "text-zinc-200/90" : "text-black/50"}`}/>}
                                  {bug.status === "In Progress" && <RefreshCw size={18} className={`${isDark ? "text-blue-600" : "text-blue-700"} animate-spin`} style={{animationDuration: "3s"}}/>}
                                  {bug.status === "Resolved" && <CircleCheck size={18} className={`${isDark ? "text-green-600" : "text-green-700"}`}/>}
                                  {bug.status === "In Review" && <Clock size={18} className={`${isDark ? "text-yellow-500" : "text-yellow-600"}`}/>}


                                <span className={`font-semibold 
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

                            <div className="flex items-center justify-between">
                              <h3>PROJECT</h3>
                              <span className="text-zinc-200">{bug.project}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <h3>ASSIGNEE</h3>
                              <span className="flex items-center gap-3 text-zinc-200">
                              <Avatar>
                                <AvatarImage/>
                                <AvatarFallback>
                                </AvatarFallback>
                              </Avatar>
                              {bug.assignee}
                              </span>
                            </div>

                            <div className="flex items-center justify-between">
                              <h3>CREATED</h3>
                              <span>{bug.created}</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <h3>LAST UPDATED</h3>
                              <span>{bug.updated}</span>
                            </div>

                            <div className="gap-2 flex flex-col">
                              <h3>TAGS</h3>
                              <div className="flex items-center gap-3">
                                {bug.tags.map((tag) => {
                                  return (
                                <span className="bg-zinc-800 border border-zinc-400/10 px-3 py-1 text-white/50">
                                {tag}
                                </span>
                                  )
                                })}
                              </div>

                            </div>

                          </div>

                          <Separator />

                          <div className="gap-2 flex flex-col">
                            <button 
                            className="bg-yellow-500 text-lg p-2 w-full text-black font-medium flex items-center justify-center gap-4
                            dark:hover:bg-yellow-400 hover:bg-yellow-600"> 
                              <UserPlus size={20}/>Assign
                            </button>
                            <button 
                            className="bg-gray-700 dark:hover:bg-gray-600 w-full text-lg font-medium text-white/50 p-2 items-center flex justify-center gap-4 hover:bg-gray-800 "> 
                              <SquarePen size={20}/>Change Status 
                            </button>
                          </div>


                        </div>

                      </DrawerContent>
                    </Drawer>
                    </div>

              </TableCell>

              

              </TableRow>
              </>
              )})}

          </TableBody>
        </Table>
        <Separator/>

        {/* Pagination for bug data */}
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