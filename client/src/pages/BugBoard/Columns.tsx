
import BugCard from './BugCard'
import { bugs } from '@/assets/assets'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { BadgeCheck, CircleDot, EyeDashed, LucideIcon, RefreshCw } from 'lucide-react'
import type { BugStatus } from '@/types/bug'
import { useState } from 'react'

const Columns = () => {

    const columnConfig: {
        status: string;
        title: string;
        icon: LucideIcon;
        iconColor: string;
    }[] = [
        {
            status: "open",
            title: "Open",
            icon: CircleDot,
            iconColor: "white"
        },
        {
            status: "in progress",
            title: "In Progress",
            icon: RefreshCw,
            iconColor: "blue"
        }
        ,
                {
            status: "in review",
            title: "In Review",
            icon: EyeDashed,
            iconColor: "yellow"
        },
        {
            status: "resolved",
            title: "Resolved",
            icon: BadgeCheck,
            iconColor: "green"
        }

    ]


  return (
    <main  className='flex justify-around gap-lg w-full  rounded-xl '>

        {columnConfig.map((column) => {
            const columnBugs = bugs.filter(bug => bug.status === column.status)

            return (
                <div key={column.status} className='bg-column w-1/4 px-(--padding-horizontal-sm) py-(--padding-vertical-md) rounded-xl'>
                <div>
                    <h2 className='text-lg flex items-center gap-lg'>
                    <column.icon className={`dark:text-${column.iconColor}-500 text-${column.iconColor}-600`} size={18}
                    
                    /> {column.title}

                    <span className='text-base flex items-center text-secondary  justify-center  bg-board-count rounded-full h-5 w-5'>
                        {columnBugs.length}
                        </span>
                    </h2>
                </div>
                    <div className='flex flex-col pt-(--padding-vertical-lg) gap-lg'>
                        {columnBugs.map((bug) => {
                            return <BugCard bug={bug}/>
                        })}
                    </div>

                </div>

            )
        })}

    </main>
  )
}

export default Columns