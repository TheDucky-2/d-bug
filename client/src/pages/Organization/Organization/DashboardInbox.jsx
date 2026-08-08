import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { MailPlus } from "lucide-react";
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from "@/components/ui/card";
 import { inboxStats } from "@/assets/assets";
import InboxTable from "./InboxTable";
import EmptyInbox from "./EmptyInbox";

const DashboardInbox = () => {

    const [mail, setMail] = useState("mail1")
    const {isDark} = useTheme()

    if(!mail){
        return (
            <EmptyInbox/>
        )
    }

    return (
    <>
<style>{`
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

    * {
        font-family: "Inter";
    }
    `}
    </style>
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold">
          Inbox
          </h1>

        </div>

      </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inboxStats.map((stats) => {
                
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

        <div>
            <InboxTable/>
        </div>

    </div>
    </>
    )
}

export default DashboardInbox