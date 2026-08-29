import {bugTableColumns} from "../../../assets/assets.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EllipsisVertical, SquareArrowUpRight } from 'lucide-react';
import {
  Card,
} from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext.jsx";
import {bugs} from "../../../assets/assets.js"
import {
  TriangleAlert,
  CircleAlert,
  OctagonAlert,
  FunnelPlus,
  Download
} from "lucide-react";
import { CircleDot, RefreshCw, CircleCheck, Clock, Ellipsis,RotateCcw} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink, 
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator.jsx";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import BugsFilterDropDown from "../BugsFilterDropDown.js";

import BugsTableDropDown from "./BugsTableDropDown.js";


const BugsTable = () => {

  const {isDark} = useTheme()
  

  return (  

      <main>

        <div className="max-h-150 overflow-auto scrollbar-thumb-black rounded-t-md border border-zinc-100/10 dark:scrollbar-thumb-zinc-200/50">

            <div className={` flex items-center justify-between sticky top-0 z-50 w-full py-(--padding-vertical-ms) px-(--padding-vertical-ms)
                ${isDark ? "bg-zinc-900" : "bg-zinc-100"}
              `}>

              <div className="flex items-center text-lg  gap-6">
                <BugsFilterDropDown openTrigger={  
                <div className="items-center flex gap-2 rounded-sm   hover:bg-zinc-800/10  p-2 border border-zinc-900/20 dark:border-white/10"> 
            
                  <Tooltip>

                  <TooltipTrigger asChild>
                  
                      <button className="cursor-pointer">
          
                        <FunnelPlus size={18} className="dark:text-white/50 text-black/70"/>
          
                      </button>
                

                  </TooltipTrigger>
                  <TooltipContent className={`rounded-sm dark:bg-zinc-100 bg-zinc-800 font-medium`}>
                  <p>Add Filter</p>
                  </TooltipContent>
                  </Tooltip>
                  </div>
                      }>
               </BugsFilterDropDown>

              </div>

            <div className="flex items-center gap-3">
              <button 
              className="flex items-center gap-2 rounded-sm border border-black/20 dark:border-white/10 
              py-2 px-4 cursor-pointer dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-colors ">
              <Download size={18}/>
                <p className="text-sm">Export</p>
              </button>
              <button>
                <Ellipsis />
              </button>

            </div>

            

            </div>
        <Table className={`bg-white dark:bg-zinc-900 dark:text-white/50 text-black/40`}>

          <TableHeader className={`text-base sticky top-0 z-10 `}>
            <TableRow >
                {bugTableColumns.map((column, index) => {
                  return (
                    <TableHead key={index}
                    className={`px-(--padding-vertical-md) dark:text-white/70 text-black`}>{column.header}</TableHead>
                  )})}
            </TableRow>
          </TableHeader>

          <TableBody className={`text-sm font-light dark:text-white/40 text-black/50`}>

              {bugs.map((bug) => {

              const bugSeverity = bug.severity.slice(0,1).toUpperCase() + bug.severity.slice(1)

              return (
              <>
              <TableRow key={bug.id}>
    
              <TableCell className={`${isDark ? "text-white" : "text-black"} px-(--padding-vertical-md)`}>
                <div className="flex items-center gap-2">
                {bug.title}
                </div>
              </TableCell>
              <TableCell className={`px-(--padding-vertical-md)`}>{bug.projectId}</TableCell>
                <TableCell className={`px-(--padding-vertical-md)`}>
                    <div className="flex items-center gap-1 text-xs font-semibold">
                
                <span  className={`font-semibold rounded-full py-(--padding-vertical-xs)  px-(--padding-horizontal-sm) ${
                            bug.severity === "critical" ? "bg-destructive text-background": 
                            bug.severity === "high" ? "bg-high-severity text-background": 
                            bug.severity === "medium" ? "bg-medium-severity text-background": 
                            bug.severity === "low" ? "bg-low-severity text-background": 
                            "bg-zinc-500"
                        }`}>
                    {bugSeverity}
                </span>
                </div>
                </TableCell>


              <TableCell className={`px-(--padding-vertical-md)`}>
              {bug.assignee}
              </TableCell>
                
               <TableCell className={`px-(--padding-vertical-md)`}>
           
                   <BugsTableDropDown bug={bug} openTrigger={
                    <button  className="hover:text-blue-600 dark:hover:bg-zinc-300/10 hover:bg-zinc-600/10 rounded-full p-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <EllipsisVertical/>
                        </TooltipTrigger>
                        <TooltipContent className={`rounded-sm dark:bg-zinc-100 bg-zinc-800 font-medium`}>
                          Actions
                        </TooltipContent>
                   </Tooltip>

                    </button>}/>
             
               
              </TableCell>

              

              </TableRow>
              </>
              )})}

          </TableBody>
        </Table>
        <Separator/>

        {/* Pagination for bug data */}
        <div
            className={` bottom-0 sticky z-50 rounded-b-md py-(--padding-vertical-sm)
            ${isDark ? "bg-zinc-900" : "bg-zinc-100"}
            border-t ${isDark ? "border-white/10" : "border-black/10"}`}
>
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
      </main>
  )
}

export default BugsTable