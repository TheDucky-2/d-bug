import { GlobeX } from 'lucide-react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const EmptyInbox = () => {
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
        <GlobeX size={45} className=" p-2 rounded-lg h-20 w-20 text-zinc-300/90 "/>
        <EmptyMedia >
        </EmptyMedia>
        <EmptyTitle className={`text-xl -mt-5 text-zinc-200/50`}>No organization</EmptyTitle>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">

      </EmptyContent>
      
    </Empty>
    </div>
    </>
  )
}

export default EmptyInbox