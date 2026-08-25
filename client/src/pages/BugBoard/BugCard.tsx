import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { BugCardProps } from "@/types/bug.js";
import { bugs } from "@/assets/assets.js";
import { Bug, Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useRef, useState } from "react";



 const BugCard = ({bug, draggedElement, setDraggedElement}: BugCardProps) => {


    const convertToDay = (dateString: string) => {

        const day = new Date(dateString)
        
        const date = day.getDate()
        const month = day.toLocaleDateString("en-US",{
            month: "short"
        })

        return date + " " + month 

    }
        

    return (
        <div draggable 
        onDragStart={(e)=> {
            console.log("Dragging bug", bug.id)
            console.log(e.currentTarget)

            setDraggedElement(e.currentTarget)
        }}
        
        
        >
        <Tooltip>
            <TooltipTrigger asChild>
        <div className="card backdrop-blur-md bg-background p-4 text-xs border border-zinc-100/20 rounded-lg">

            {/** CARD HEADER */}
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                    <h3 className={`card-header font-semibold items-center rounded-sm py-(--padding-vertical-xs) border px-(--padding-horizontal-xs) ${
                            bug.severity === "critical" ? "bg-destructive/10 text-critical-severity border border-destructive/50": 
                            bug.severity === "high" ? "bg-high-severity/10 text-high-severity border-high-severity/50": 
                            bug.severity === "medium" ? "bg-medium-severity/10 text-medium-severity border-medium-severity/50": 
                            bug.severity === "low" ? "bg-low-severity/10 text-low-severity border-low-severity/50": 
                            "bg-zinc-500"
                        }`}>
                        
                            {
                            bug.severity.toUpperCase()
                            }
                    </h3>

                    
                </div>
                <div>
                     <Bug size={16} className={`
                        ${
                            bug.severity === "critical" ? "text-critical-severity" :
                            bug.severity === "high"  ? "text-high-severity" : 
                            bug.severity === "medium" ? "text-medium-severity" : 
                            bug.severity === "low" ? "text-low-severity": "text-zinc-100" }

                        `}/>
                </div>
            </div>

           

            {/* Card Title*/}

            <h2 className="text-foreground overflow-hidden font-semibold lg:text-base  py-(--padding-vertical-sm) line-clamp-2 h-14">
                {bug.title}
            </h2>

            {/* Card Description*/}

            <p className="text-foreground/70 overflow-hidden font-light text-sm py-(--padding-vertical-sm) line-clamp-2 h-12 ">
                {bug.description}
            </p>

            {/* Assignees */}
            <div className="flex justify-between items-center text-foreground text-xs py-(--padding-vertical-md) ">
                <p ><strong>Assignee:</strong> </p>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
            </div>

            <div className="h-px bg-light-border w-full">

                
            </div>

            {/** TAGS */}
            <div className="flex justify-between overflow-hidden pt-(--padding-vertical-md) text-xs">
                <div className="flex gap-2">
                {bug.labels.map((label) => {
                    return <p key={label} 
                    className="bg-transparent border text-foreground/70 border-light-border py-(--padding-vertical-xs) px-(--padding-horizontal-xs) rounded-sm">{label}</p>
                })}
                </div>              
                <div className="flex items-center text-foreground/70 gap-md">
                    <Calendar size={18}/>
                    <p>{convertToDay(bug.createdAt)}</p>
                </div>

            </div>
            
        </div>
        </TooltipTrigger>
        <TooltipContent className={`tooltip-content`}>
            {bug.id}
        </TooltipContent>
        </Tooltip>
        </div>
    )


}

export default BugCard