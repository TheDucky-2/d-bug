import { BugOff, Plus } from 'lucide-react';
import { ArrowUpRightIcon } from "lucide-react"
import { FolderCode } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import CreateBugDialog from './CreateBugDialog';

const EmptyBugs = () => {
  return (
  <>
  <style>
  {`
  @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

  * {
      font-family: "Manrope", sans-serif;
  }
`}</style>
  <div className='h-screen flex justify-center'>
    <Empty >
      <EmptyHeader>
        <BugOff size={45} className=" p-2 h-20 w-20 dark:text-zinc-300/90 text-zinc-600"/>
        <EmptyMedia >
        </EmptyMedia>
        <EmptyTitle className={`text-2xl -mt-5`}>No bugs yet</EmptyTitle>
        <EmptyDescription className={`text-sm`}>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className='flex items-center gap-2'>
        <CreateBugDialog openTrigger={
          <button 
          className="bg-zinc-900 dark:hover:bg-zinc-400 dark:bg-zinc-300 dark:text-black px-4 py-2 text-sm rounded-lg font-semibold cursor-pointer transition-all 
          hover:bg-zinc-700 text-zinc-200 flex gap-2 items-center" >
          Add New Bug
          <Plus size={18}/>
          </button>
        }>
        </CreateBugDialog>

          <button 
          className="dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 hover:bg-zinc-300 text-zinc-900 rounded-lg border 
          border-black/20 dark:border-zinc-200/20 px-4 py-2 text-sm font-semibold cursor-pointer transition-all" >
          Import from Repository
          </button>
        </div>
      </EmptyContent>
      <Button variant="link" className="text-muted-foreground" size="sm" nativeButton={false} render={<a href="#">Learn More <ArrowUpRightIcon /></a>} />
    </Empty>
  </div>
    </>
  )
}

export default EmptyBugs



