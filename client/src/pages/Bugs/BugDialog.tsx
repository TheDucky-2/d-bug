import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
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

            <DialogContent className="sm:max-w-2xl min-h-[80vh] flex flex-col 
            overflow-y-auto px-(--padding-horizontal-lg)">
                
                {/* Title */}
                <DialogTitle  className={`flex flex-col gap-lg
                    md:max-w-xl lg:max-w-xl text-wrap`}>
                    
                    <h3 className="text-lg font-medium dark:text-white text-black">
                        {bug.id}

                        <span className="text-lg text-zinc-700/70 dark:text-zinc-200/60 ">  —  {bug.title}</span>
                    </h3>

                    <span className={` items-center shrink-0 flex text-md font-medium gap-lg
                        ${bugSeverity === "Critical" ? "text-red-500" :
                            bugSeverity === "High" ? "text-orange-500" :
                            bugSeverity === "Medium" ? "text-yellow-500" :
                            bugSeverity=== "Low" ? "text-green-500" : "bg-amber-100" }`}>
                            
                        { bugSeverity === "Critical" ? <TriangleAlert size={18}/> :
                            bugSeverity === "High" ? <Flame size={18}/>  : ""
                            }
                            {bugSeverity === "Critical" || bugSeverity == "High" 
                            ? `Requires Immediate Attention` : ""}
                    </span>


                </DialogTitle>

                <Separator/>
                <DialogDescription className={`flex flex-col gap-xl  md:max-w-xl lg:max-w-xl`}>
                    
                    {/* Bug Details */}

                    <div className="flex justify-between w-full">

                        {/* Bug Severity */}
                        <div className="justify-center flex text-center flex-col gap-lg" >
                            <h4 className="text-base font-semibold dark:text-white text-black">Severity</h4>
                            <p className="">
                    <span className={` text-sm
                        ${bugSeverity === "Critical" ? "text-red-500" :
                            bugSeverity === "High" ? "text-orange-500" :
                            bugSeverity === "Medium" ? "text-yellow-500" :
                            bugSeverity=== "Low" ? "text-green-500" : "bg-amber-100" }`}>
                    {bug.severity.toUpperCase()} 
                    
                    </span>
                            </p>
                        </div>

                        {/* Bug Status */}
                        <div className="justify-center flex text-center flex-col gap-lg">
                            <h4 className="text-base font-semibold dark:text-white text-black">Status</h4>
                            <p className="">
                    <span className={` text-sm 
                        ${bug.status === "Open" ?  "dark:text-white/50 text-black/50" : 
                        bug.status === "In Progress" ? "dark:text-blue-600 text-blue-800" :
                        bug.status === "In Review" ? "dark:text-yellow-500 text-yellow-500" :
                        bug.status=== "Resolved" ? "dark:text-green-600 text-green-700 " : 
                        bug.status === "Reopened" ? "dark:text-purple-500 text-purple-700" : "text-gray-500"
                        }`}> 
                    {bug.status.toUpperCase()} 
                    
                    </span>
                            </p>
                        </div>

                          {/* Bug Priority */}
                        <div className="justify-center flex text-center flex-col gap-lg">
                            <h4 className="text-base font-semibold dark:text-white text-black">Priority</h4>
                            <p className=" text-sm " >

                                {bug.priority} 
         
                            </p>
                        </div>

                          {/* Bug Assignee */}
                        <div className="justify-center flex text-center flex-col gap-lg">
                            <h4 className="text-base font-semibold dark:text-white text-black">Assignee</h4>
                            <p className=" text-sm " >

                                <span className="">

                                    {bug.assignee}
                                </span>
         
                            </p>
                        </div>
                    </div>


                <div className="gap-lg flex flex-col md:max-w-2xl lg:max-w-2xl">

                    <h4 className="text-base font-semibold dark:text-white text-black">
                        Description
                    </h4>
                    <p className=" text-sm text-wrap bg-background border border-foreground/20 
                    rounded-md px-(--padding-horizontal-ms) py-(--padding-horizontal-ms)" >

                        <span className="">

                            {bug.description}
                        </span>
         
                    </p>
                    
                </div>

                <div className="gap-lg flex flex-col md:max-w-2xl lg:max-w-2xl">

                    <h4 className="text-base font-semibold dark:text-white text-black">
                        Steps To Reproduce
                    </h4>
                    <p className=" text-sm text-wrap bg-background border border-foreground/20 
                    rounded-md px-(--padding-horizontal-ms) py-(--padding-horizontal-ms)" >

                        <ol className="">

                            {bug.stepsToReproduce.map((step, index) => {
                                return (
                                    <li>
                                        {index+1}. 
                                    
                                    <span className="px-(--padding-horizontal-sm)">
                                        {step}
                                    </span>
                                    </li>
                                )
                            })}
                        </ol>
         
                    </p>
                    
                </div>


                <div className="gap-lg flex flex-col md:max-w-2xl lg:max-w-2xl">
                    <h4 className="text-base font-semibold text-foreground">
                        Tags
                    </h4>
                    <p className="flex gap-md ">
                        {bug.labels.map((label) => {
                            return (
                            <span 
                            className="border border-foreground/20 rounded-sm gap-md
                            py-(--padding-vertical-xs) px-(--padding-horizontal-sm)">
                                {label}
                            </span>
                            )
                        })}
                    </p>
                </div>

                </DialogDescription>


                
            </DialogContent>
        </Dialog>
</div>
  )
}

export default BugDialog