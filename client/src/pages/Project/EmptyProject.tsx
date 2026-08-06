import { ArrowUpRightIcon, Plus } from "lucide-react"
import { FolderCode } from 'lucide-react';
import { Button } from "@/components/ui/button"
import CreateProjectDrawer from "./CreateProjectDrawer";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const EmptyProject = () => {
  return (
  <>
     <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        
            * {
                font-family: "Inter";
            }
    `}
    </style>
  <div className="flex justify-center h-screen">
    <Empty >
      <EmptyHeader>
        <FolderCode size={45} className=" p-2 rounded-lg h-20 w-20 dark:text-zinc-300/90 text-zinc-600 "/>
        <EmptyMedia >
        </EmptyMedia>
        <EmptyTitle className={`text-2xl -mt-5`}>No projects yet</EmptyTitle>
        <EmptyDescription className={`text-sm`}>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center">

        <CreateProjectDrawer openTrigger={
        <button 
        className="bg-zinc-900 dark:hover:bg-zinc-400 dark:bg-zinc-300 dark:text-black px-4 py-2 text-sm rounded-lg font-semibold cursor-pointer transition-all 
        hover:bg-zinc-700 text-zinc-200 flex items-center ">
        Create Project
        <Plus className="text-white dark:text-black ml-2 h-4 w-4"/>
        </button>}>
        </CreateProjectDrawer>


        <button 
        className="dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 hover:bg-zinc-300 text-zinc-900 rounded-lg border 
        border-black/20 dark:border-zinc-200/20 px-4 py-2 text-sm font-semibold cursor-pointer transition-all" >
        Import Repository
        </button>
      </EmptyContent>
      <Button variant="link" className="text-muted-foreground" size="sm" nativeButton={false} render={<a href="#">Learn More <ArrowUpRightIcon /></a>} />
    </Empty>
    </div>
    </>
  )
}

export default EmptyProject
