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
import { members, memberTableColumns} from "@/assets/assets.js"
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, Funnel } from 'lucide-react';
import MemberDropDown from "./MemberDropDown";
import { useGetMembers } from "@/hooks/useMembers";


const MembersTable = () => {

    const getMembers = useGetMembers()

  return (
    <div>

        <div className="border border-white/20 ">
        <div className={`bg-white dark:bg-zinc-900 flex p-3 items-center gap-6  `}>
            <div className="items-center flex gap-2">
             <Funnel size={18} className="dark:text-white/50 text-black/70"/>
             <p className="text-xl dark:text-white/50 text-black">Filters</p>
            </div>
              <div className="flex items-center text-base gap-4">
  
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Owner </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Admin </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Developer </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Reviewer </button>

                <div className={`w-px h-5 bg-black/50 dark:text-white/50 text-black/50`}></div>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Active </button>
                <button className={`cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 dark:text-white/50 text-black/50`}> Inactive </button>
              
              </div>
        </div>
        <div className="max-h-150 overflow-auto">
            <Table className={`bg-white dark:bg-zinc-900 dark:text-white/50 text-black/40`}>
                <TableHeader className={`text-base sticky top-0 z-10`}>
                    <TableRow >
                        {memberTableColumns.map((column) => {
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

                    {getMembers.data.map((member)=> {
                        console.log(getMembers.data)
                        return (
                            <TableRow>
                                <TableCell className={`px-5`}>{member.member_id}</TableCell>
                                <TableCell className={`px-5`}>{member.user.full_name}</TableCell>
                                <TableCell className={`px-5`}>{member.user.email}</TableCell>
                                <TableCell className={`px-5`}>{member.role}</TableCell>
                                <TableCell className={`px-5`}>{member.joined_at}</TableCell>
                                <TableCell className={`px-5`}>{member.status}</TableCell>
                                <TableCell className={`px-5`}>
                                    <MemberDropDown openTrigger = {
                                    <button>
                                        <EllipsisVertical/>

                                    </button>
                                    }>

                                    </MemberDropDown>
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

export default MembersTable