import { UserRoundX, Plus } from 'lucide-react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const EmptyMembers = () => {
  return (
  <>
  <style>
  {`
  @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

  * {
      font-family: "Manrope", sans-serif;
  }
`}</style>
    <div className="h-screen justify-center flex">
    <Empty >
      <EmptyHeader>
        <UserRoundX size={45} className=" p-2 rounded-lg h-20 w-20 dark:text-zinc-300/90 text-zinc-600"/>
        <EmptyMedia >
        </EmptyMedia>
        <EmptyTitle className={`text-xl -mt-5 dark:text-zinc-200/50 text-black`}>No members</EmptyTitle>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">

        <button 
        className="bg-zinc-900 dark:hover:bg-zinc-400 dark:bg-zinc-300 dark:text-black px-4 py-2 text-sm rounded-lg font-semibold cursor-pointer transition-all 
        hover:bg-zinc-700 text-zinc-200 flex items-center ">
        Add members
        <Plus className="text-white dark:text-black ml-2 h-4 w-4"/>
        </button>
      </EmptyContent>
      
    </Empty>
    </div>
    </>
  )
}

export default EmptyMembers
