import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

const FeatureItem = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs" style={{ color: 'var(--feature-icon)' }}>{icon}</span>
    <span className="text-xs" style={{ color: 'var(--feature-text)' }}>{label}</span>
  </div>
)

const CounterDigit = ({ value }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.animation = 'none';
      ref.current.offsetHeight;
      ref.current.style.animation = 'countUp 0.3s ease-out';
    }
  }, [value]);

  return (
    <span ref={ref} style={{ display: 'inline-block', minWidth: '1ch' }}>
      {value}
    </span>
  );
};

const Welcome = ({ resolvedCount, totalBugs, allResolved, nextStep }) => {
  return (
    <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-14 max-w-lg mx-auto">

      {/* Bug Hunt Counter / Workspace Clean */}
      <div className="flex items-center gap-2 font-mono text-xs tracking-wider transition-all duration-500"
        style={{ color: allResolved ? 'rgba(239,68,68,0.75)' : 'var(--body)' }}>
        {!allResolved ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="7" fill="var(--bug-fill, #EF4444)" />
              <circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.3)" />
              <line x1="6" y1="10" x2="3" y2="7" stroke="var(--bug-fill, #EF4444)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="18" y1="10" x2="21" y2="7" stroke="var(--bug-fill, #EF4444)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="6" y1="14" x2="3" y2="17" stroke="var(--bug-fill, #EF4444)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="18" y1="14" x2="21" y2="17" stroke="var(--bug-fill, #EF4444)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Bug Hunt &nbsp;·&nbsp;
            <CounterDigit value={resolvedCount} />&nbsp;/&nbsp;{totalBugs} Bugs Resolved
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="6" />
              <polyline points="4,7 6,9 10,5" />
            </svg>
            &nbsp;Workspace Clean ✓
          </>
        )}
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.04] tracking-tight transition-all duration-700"
          style={{ color: 'var(--headline)' }}>
          Welcome<br />
          to d_<span style={{ color: '#EF4444' }}>bug</span>.
        </h1>

        {!allResolved ? (
          <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto transition-all duration-500"
            style={{ color: 'var(--body)' }}>
            AI-powered bug triage built for engineering teams.
          </p>
        ) : (
          <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto transition-all duration-700"
            style={{ color: 'rgba(239,68,68,0.65)' }}>
            Workspace cleaned successfully.
          </p>
        )}
      </div>

      {/* Features */}
      {!allResolved && (
        <div className="flex items-center gap-5 sm:gap-6 transition-all duration-500">
          <FeatureItem icon={<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1.5" y="1.5" width="7" height="7" /></svg>} label="Smart Detection" />
          <div className="w-px h-3" style={{ background: 'var(--separator)' }} />
          <FeatureItem icon={<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="5" cy="5" r="3.5" /></svg>} label="Team Insights" />
          <div className="w-px h-3" style={{ background: 'var(--separator)' }} />
          <FeatureItem icon={<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><polygon points="5,1.5 8.5,3.5 8.5,6.5 5,8.5 1.5,6.5 1.5,3.5" /></svg>} label="Better Workflows" />
        </div>
      )}

      {/* CTA */}
      {!allResolved ? (
        <button
          disabled
          className="flex items-center gap-2 px-7 py-2.5 text-sm font-medium rounded-lg opacity-20 cursor-not-allowed border"
          style={{
            background: 'var(--btn-bg)',
            color: 'var(--btn-text)',
            borderColor: 'var(--btn-border)',
          }}
        >
          Continue
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      ) : (
        <motion.button
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          onClick={nextStep}
          className="flex items-center gap-2 px-7 py-2.5 text-sm font-medium rounded-lg border transition-all cursor-pointer"
          style={{
            background: 'var(--btn-bg)',
            color: 'var(--btn-text)',
            borderColor: 'var(--btn-border)',
            boxShadow: '0 0 20px var(--success-glow), 0 0 40px rgba(239,68,68,0.08)',
          }}
          whileHover={{
            y: -2,
            background: 'var(--btn-hover)',
            boxShadow: '0 0 24px rgba(239,68,68,0.15), 0 0 48px rgba(239,68,68,0.1)',
            transition: { duration: 0.2 },
          }}
        >
          Continue
          <ArrowRight size={16} strokeWidth={1.5} />
        </motion.button>
      )}

      <style>{`
        @keyframes countUp {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Welcome
