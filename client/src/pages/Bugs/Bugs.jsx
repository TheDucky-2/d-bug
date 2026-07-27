import {Plus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import BugsTable from "./BugsTable";
import CreateBugDialog from "./CreateBugDialog";
import BugsMainContent from "./BugsMainContent";
import EmptyBugs from "./EmptyBugs";
import { useFetchAllBugs } from "@/hooks/useBugs";

const Bugs = () => {

    const {isDark} = useTheme()
    const {data} = useFetchAllBugs()

    if(!data){
      return (
        <EmptyBugs/>
      )
    }

    return (
     <div className="space-y-4">
     
           {/* Header */}
           <div className="flex justify-between items-center">
     
             <div>
               <h1 className="text-2xl font-semibold">
                 Bugs
               
               </h1>
               <p className="dark:text-white/40">Manage bugs and perform triage</p>
     
     
             </div>
                <div>
                    
                  <CreateBugDialog openTrigger={
                  <button 
                  className={`px-3 py-2 flex items-center gap-2 text-base font-semibold bg-yellow-500 hover:bg-yellow-400
                   ${isDark ? "text-black" : "text-zinc-800"}`}>New Bug <Plus/>
                   </button>
                  }/>

                </div>
     
           </div>
     
            <div>
              <BugsMainContent/>
            </div>
           <div>
             <BugsTable/>
           </div>
     
     
     
         </div>
    )
}

export default Bugs