import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Ellipsis, TriangleAlert, Flame, Eye, Settings} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.jsx";
import { useTheme } from "@/context/ThemeContext";
import { Separator } from "@/components/ui/separator";
import { bugs } from "@/assets/assets";

const BugDialog = ({ openTrigger, bug}) => {

    const bugSeverity = bug.severity.slice(0,1).toUpperCase() + bug.severity.slice(1)
    const {isDark} = useTheme()

    

  return (
    <div>
        <Dialog>
        <DialogTrigger asChild>
            {openTrigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl min-h-[90vh] flex flex-col overflow-y-auto p-6">
            <section>
                                
            <div className="flex flex-col gap-2">
            
                <span className={` items-center shrink-0 flex text-base font-medium gap-2 
                ${bugSeverity === "Critical" ? "text-red-500" :
                    bugSeverity === "High" ? "text-orange-500" :
                    bugSeverity === "Medium" ? "text-yellow-500" :
                    bugSeverity=== "Low" ? "text-green-500" : "bg-amber-100" }`}>
                    
                { bugSeverity === "Critical" ? <TriangleAlert size={20}/> :
                    bugSeverity === "High" ? <Flame size={20}/>  : ""
                    }
                    {bugSeverity === "Critical" || bugSeverity == "High" 
                    ? `${bugSeverity} - Requires Immediate Attention` : ""}
                </span>
                </div>
            </section>
            
            
            <DialogTitle  className={`text-base text-zinc-700/70 dark:text-zinc-200/60 py-2`}>
                {bug.project}
            </DialogTitle>
            
            <div className="justify-between flex pb-2">
                <div>   
                     <h3 className="text-2xl font-medium dark:text-white text-black">{bug.title}</h3>
                </div>
                <div className="gap-3 flex">
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <button className="cursor-pointer">
                            <Ellipsis size={18}/>
                        </button>
                        </TooltipTrigger>
                        <TooltipContent className={`rounded-sm text-xs dark:bg-zinc-100 bg-zinc-800 font-medium`}>
                        View Options
                        </TooltipContent>
                    </Tooltip>
                </div>

            </div>
            <Separator/>
            <section>
            
            <div className="flex flex-col gap-4 text-lg text-zinc-900/40 dark:text-zinc-400/60 py-4 max-w-96">

            
            <div className="flex items-center justify-between">
                <h3 className="text-base dark:text-white text-black">Status</h3>
                <div className="flex items-center gap-2 text-sm text-zinc-200/90">
                   
                <span className={`font-semibold text-sm 
                    ${bug.status === "Open" ?  "dark:text-white/50 text-black/50" : 
                    bug.status === "In Progress" ? "dark:text-blue-600 text-blue-800" :
                    bug.status === "In Review" ? "dark:text-yellow-500 text-yellow-500" :
                    bug.status=== "Resolved" ? "dark:text-green-600 text-green-700 " : 
                    bug.status === "Reopened" ? "dark:text-purple-500 text-purple-700" : "text-gray-500"
                    }`}> 
                {bug.status} 
                
                </span>
                </div>
            </div>
            
            <div className="flex items-center justify-between">
                 <h3 className="text-base dark:text-white text-black">Assignee</h3>
                <span className="dark:text-zinc-200/90 text-sm text-black/50 flex items-center gap-2">
                <Avatar>
                <AvatarImage/>
                <AvatarFallback>
                </AvatarFallback>
                </Avatar>
                {bug.assignee}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <h3 className="text-base dark:text-white text-black">Created</h3>
                <span className="dark:text-zinc-200/90 text-sm text-black/50 flex items-center gap-2">{bug.created}</span>
            </div>

            <div className="flex items-center justify-between">
                <h3 className="text-base dark:text-white text-black">Last Updated</h3>
                <span className="dark:text-zinc-200/90 text-sm text-black/50 flex items-center gap-2">{bug.updated}</span>
            </div>

            <div className="gap-2 flex flex-col">
                <h3 className="text-base dark:text-white text-black">Tags</h3>
                <div className="flex items-center gap-3">
                {bug.labels.map((label) => {

                    
                    return (
                <span className="dark:bg-zinc-800 bg-zinc-200  border rounded-sm
                 border-zinc-700/10 dark:border-zinc-100/20 px-3 py-1 text-sm text-black dark:text-white">
                {label}
                </span>
                    )
                })}
                </div>

                </div>
            </div>

          

            <div className="gap-4 flex flex-col">
                <div>
                    <h3 className="text-xl pb-2 font-medium dark:text-white text-black">
                            Description
                    </h3>
                    <p className="text-sm">
                    {bug.description}
                    </p>
                </div>

                <div>
                    <h3 className="text-xl pb-2 font-medium dark:text-white text-black">
                        Stack Trace
                        <span> (if available)</span>
                    </h3>
                </div>

            </div>

            
           
            </section>
            <DialogFooter >
                <div className={`flex justify-between py-4  w-full`}>
                    <button className={` px-4 py-2  text-white  hover:bg-blue-900 dark:hover:bg-blue-600
                                border border-zinc-500/10  dark:bg-zinc-600 text-sm font-semibold
                                dark:text-white flex items-center cursor-pointer rounded-full transition-all gap-2`}>
                        <Eye size={24}/>
                        View Bug Report
                    </button>
                    <button className={` px-4 py-2 font-semibold dark:bg-blue-800 text-white  hover:bg-blue-900 dark:hover:bg-blue-600
                                border border-zinc-500/10  bg-blue-700 text-sm
                                dark:text-white flex items-center cursor-pointer rounded-full transition-all gap-2`}>
                        <Settings size={24}/>
                        Manage
                    </button>
                </div>
            </DialogFooter>
        </DialogContent>
        </Dialog>
</div>
  )
}

export default BugDialog