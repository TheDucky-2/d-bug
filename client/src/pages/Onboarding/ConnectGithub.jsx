import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ConnectGithub = () => {

  const navigate = useNavigate()
  const [connecting, setConnecting] = useState(false)

  const handleConnect = () => {
    setConnecting(true)
  }

  const handleSkip = () => {
    navigate("/organization")
  }

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-10">

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
          Connect GitHub
        </h1>
        <p className="mt-3 text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--body)' }}>
          Import repositories and track bugs directly from your codebase.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button onClick={handleConnect} disabled={connecting}
          className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer disabled:opacity-30"
          style={{ background: 'var(--btn-bg)', color: 'var(--text)' }}
          onMouseEnter={e => { if (!connecting) e.currentTarget.style.background = 'var(--btn-hover)' }}
          onMouseLeave={e => { if (!connecting) e.currentTarget.style.background = 'var(--btn-bg)' }}
        >
          {connecting ? "Connecting..." : "Connect GitHub"}
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>

        <button onClick={handleSkip}
          className="text-xs transition-colors cursor-pointer" style={{ color: 'var(--body)' }}
        >
          Skip for now
        </button>
      </div>

      <p className="text-xs text-center" style={{ color: 'var(--body)', opacity: 0.6 }}>
        You can connect GitHub anytime from your workspace settings.
      </p>

    </div>
  )
}

export default ConnectGithub
