import bug from "../../assets/bug.svg"
import { ArrowRight } from "lucide-react"

const Welcome = ({nextStep}) => {


  return (
    <div className="flex flex-col w-full h-full gap-10 items-center justify-center">
      
      <div className="flex flex-col px-5 gap-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold ">
          Ready to start?
          </h1>

          <h2 className="text-zinc-500 text-xl sm:text-2xl lg:text-3xl">
            Let's get your workspace ready!
          </h2>
      </div>


      <div className="items-center flex flex-col px-5 py-5" >
        <button type="submit" 
        className="px-4 py-3 bg-zinc-500 hover:bg-zinc-600 dark:hover:bg-zinc-400/80  text-white font-medium dark:text-white cursor-pointer rounded-xl flex gap-2 items-center"
        onClick={nextStep}>
            Let's go!
            <ArrowRight size={22}/>
        </button>
      </div>


    </div>
  )
}

export default Welcome