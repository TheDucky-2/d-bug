import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const ConnectGithub = () => {

  const navigate = useNavigate()

  const [githubConnected, setGithubConnected] = useState(false)

  const handleGithubConnect =  () => {
    setGithubConnected(true)

  }

  const handleSkip = () => {
    setGithubConnected(false)
    navigate("/organization")

  }

  return (
<div className="flex flex-col gap-8 justify-centermax-w-5xl overflow-y-auto w-full min-w-0 items-center h-full">

<div className="flex flex-col  gap-6 text-left max-w-xl min-w-0 p-10">

  <div className="border dark:border-white/10 border-zinc-700/30 rounded-md p-10 flex flex-col gap-5 justify-between pb-20">
    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
      Connect GitHub
    </h1>

    <p className="mt-3 text-lg leading-7 text-zinc-600 dark:text-zinc-400">
        Connect your GitHub account to import repositories and track bugs directly from your codebase.   
    </p>

  <div className="items-center flex flex-col gap-2 justify-center  p-2">
    <button onClick={handleGithubConnect}
    className="px-4 py-3 bg-zinc-500 hover:bg-zinc-600 dark:hover:bg-zinc-400/80  text-white font-medium dark:text-white cursor-pointer rounded-md flex gap-2 items-center
              ">
      {githubConnected ? "Connecting..." : "Connect GitHub"}
      <ArrowRight size={18}/>
      
    </button>

    <button onClick={handleSkip}
    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
      Skip for now
    </button>
  </div>
  <p className="text-sm text-zinc-500">
    You can connect GitHub anytime from your workspace settings.
  </p>
  </div>
  </div>
</div>
  )
}

export default ConnectGithub
