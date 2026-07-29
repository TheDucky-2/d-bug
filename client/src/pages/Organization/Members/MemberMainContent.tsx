import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {memberStats } from "@/assets/assets.js"
import MembersTable from "./MembersTable";
import { MemberStatsProps } from "../../../types/types";


const MemberMainContent = () => {
  return (
    <div className="overflow-hidden gap-6 flex flex-col">
        
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {memberStats.map((stats: MemberStatsProps) => {
            console.log(memberStats)
              return (
          <Card key={stats.title} className={`rounded-sm border border-white/10`}>

            <CardHeader className="flex flex-row items-center justify-between pb-2">

              <CardTitle className="text-lg font-medium">
                {stats.title}
              </CardTitle>

              <stats.icon className="h-5 w-5 text-zinc-500"/>

            </CardHeader>
            <CardContent>

              <div className="text-2xl font-bold">
                {stats.value}
              </div>

              <p className="text-xs text-zinc-500 mt-1">
                {stats.description}
              </p>

            </CardContent>

          </Card>
              )
          })}
      </div>
    
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800
      dark:scrollbar-thumb-zinc-200 dark:scrollbar-track-zinc-900 ">
        <MembersTable/>
      </div>
    </div>
  )
}

export default MemberMainContent