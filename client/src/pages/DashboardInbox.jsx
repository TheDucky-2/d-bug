import AppSidebar from "@/pages/Dashboard/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useTheme } from "@/context/ThemeContext";
import { Ellipsis, SlidersHorizontal, Trash2, Inbox } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator";
import { emails } from "@/assets/assets";
import { useState } from "react";
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from "@/components/ui/card";

const DashboardInbox = () => {

    const [hasMail, setHasEmail] = useState(false)
    const [selectedMail, setSelectedMail] = useState(null)

    const {isDark} = useTheme()

    return (
       <div className={`min-h-screen flex justify-between ${isDark? "bg-black text-white/50": "bg-white text-black"} mr-0 flex-1 min-w-full`}>

        <SidebarProvider>
            <AppSidebar/>
            <div className="w-full h-screen bg-zinc-800 rounded-md m-3 border border-white/10">
                {/* LEFT SIDE */}
                <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize={40} minSize={1} >
                {/*LEFT SIDE CONTAINING BOTH TOP AND BOTTOM PANELS*/}
                
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 p-3">
                            <span className="text-white">Inbox</span>
                            <button className="hover:bg-zinc-700  hover:text-white transition-colors rounded-md">
                                <Ellipsis/>
                            </button>
                        </div>
                        <div className="flex items-center px-4 gap-5">
                            <button className="hover:bg-zinc-700 hover:text-white w-7 h-7 transition-colors rounded-md">
                                <Trash2/>
                            </button>
                            <button className="hover:bg-zinc-700  hover:text-white w-7 h-7 transition-colors rounded-md">
                                <SlidersHorizontal/>
                            </button>
                        </div>
                    </div>

                    
                </div>
                <Separator/>

                <div className="h-full">
                    {emails.map((email)=>{
                        return (
                        <div  className={`h-20 w-full`} onClick={()=>setSelectedMail(email)}>
                        <button className="w-full text-left ">
                        <Card className={`hover:bg-zinc-700` }>
                        <CardHeader>
                            <CardTitle className={`text-base`}>{email.subject}</CardTitle>
                            <CardDescription className={`text-sm`}>{email.preview.slice(0, 50)}...</CardDescription>
                            <CardAction>Card Action</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>

                    </Card>
                    </button>
                    </div>

                        )
                    })}
                
                </div>


                </ResizablePanel>

                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={60} minSize={40}>
                {emails.length !== 0 ? (

                <div className="h-full m-4" >
                    
                    <Card className={`bg-zinc-700 rounded h-full`}>
                        <CardHeader>
                            <CardTitle>Email Subject</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                            <CardAction>Card Action</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>

                    </Card>
                    
                </div>
                ) 
                : (
                
                <div className="flex items-center flex-col h-full justify-center">
                    <div className="flex items-center flex-col justify-center">
                        <Inbox size={150} className="text-white"/>
                            <span className="text-white">
                                No Notifications
                            </span>
                    </div>
                </div>
            )}
            
            <button> </button>
                </ResizablePanel>
                </ResizablePanelGroup>
        </div>
        </SidebarProvider>

        </div>
    )
}

export default DashboardInbox