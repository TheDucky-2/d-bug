import { useState, useEffect, useRef, useCallback } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../../context/ThemeContext.jsx";
import Welcome from "./Welcome.jsx";
import CreateOrganization from "./CreateOrganization.jsx";
import ConnectGithub from "./ConnectGithub.jsx";

const BUG_COUNT = 6;
const LENS_RADIUS = 220;
const CLICK_RADIUS = 32;

const BUG_VARIANTS = [
  `<svg viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="9" fill="var(--bug-fill)"/><circle cx="12" cy="12" r="2.5" fill="rgba(255,255,255,0.25)"/><line x1="7" y1="12" x2="3" y2="8" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="23" y1="12" x2="27" y2="8" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="18" x2="3" y2="22" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="23" y1="18" x2="27" y2="22" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 32 28" fill="none"><ellipse cx="16" cy="14" rx="11" ry="7.5" fill="var(--bug-fill)"/><circle cx="13" cy="12" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="19" cy="12" r="2" fill="rgba(255,255,255,0.2)"/><line x1="7" y1="10" x2="3" y2="5" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="25" y1="10" x2="29" y2="5" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="18" x2="3" y2="23" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="25" y1="18" x2="29" y2="23" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 30 30" fill="none"><polygon points="15,5 25,12 25,22 15,27 5,22 5,12" fill="var(--bug-fill)"/><circle cx="11" cy="14" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="19" cy="14" r="2" fill="rgba(255,255,255,0.2)"/><line x1="8" y1="10" x2="4" y2="6" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="10" x2="26" y2="6" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 34 24" fill="none"><rect x="5" y="5" width="24" height="14" rx="6" fill="var(--bug-fill)"/><circle cx="10" cy="12" r="2.5" fill="rgba(255,255,255,0.25)"/><circle cx="16" cy="12" r="2.5" fill="rgba(255,255,255,0.25)"/><circle cx="22" cy="12" r="2.5" fill="rgba(255,255,255,0.25)"/><line x1="4" y1="7" x2="1" y2="3" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="7" x2="33" y2="3" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="8" fill="var(--bug-fill)"/><circle cx="11" cy="11" r="2.5" fill="rgba(255,255,255,0.2)"/><line x1="5" y1="10" x2="1" y2="6" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="23" y1="10" x2="27" y2="6" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="5" y1="18" x2="1" y2="22" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="23" y1="18" x2="27" y2="22" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><path d="M10 17 Q14 20 18 17" stroke="var(--bug-fill)" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 32 26" fill="none"><ellipse cx="16" cy="13" rx="10" ry="7" fill="var(--bug-fill)"/><circle cx="13" cy="11" r="2" fill="rgba(255,255,255,0.25)"/><circle cx="19" cy="11" r="2" fill="rgba(255,255,255,0.25)"/><line x1="8" y1="11" x2="4" y2="6" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="11" x2="28" y2="6" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="17" x2="4" y2="20" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="17" x2="28" y2="20" stroke="var(--bug-fill)" stroke-width="2" stroke-linecap="round"/></svg>`,
];

const generateBugs = (count) => {
  const bugs = [];
  const safeZone = { x1: 28, x2: 72, y1: 30, y2: 60 };
  for (let i = 0; i < count; i++) {
    let x, y, attempts = 0;
    do {
      x = 3 + Math.random() * 94;
      y = 3 + Math.random() * 94;
      attempts++;
    } while (
      (attempts < 120 &&
        x > safeZone.x1 && x < safeZone.x2 && y > safeZone.y1 && y < safeZone.y2) ||
      (attempts < 80 &&
        bugs.some((b) => Math.hypot(b.x - x, b.y - y) < 16))
    );
    bugs.push({
      id: i,
      x, y,
      rotation: Math.random() * 360,
      variant: i % BUG_VARIANTS.length,
      animDelay: Math.random() * 2.5,
      alive: true,
    });
  }
  return bugs;
};

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [bugs, setBugs] = useState(() => generateBugs(BUG_COUNT));
  const [resolvedCount, setResolvedCount] = useState(0);
  const [allResolved, setAllResolved] = useState(false);
  const [muted, setMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('d-bug-muted') === 'true';
    }
    return false;
  });
  const [particles, setParticles] = useState([]);
  const [cursorFading, setCursorFading] = useState(false);
  const [cursorRemoved, setCursorRemoved] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem('d-bug-muted', JSON.stringify(muted));
  }, [muted]);

  const bugsRef = useRef(bugs);
  const mouseRaw = useRef({ x: -999, y: -999 });
  const lensEl = useRef(null);
  const lensGlowEl = useRef(null);
  const cursorEl = useRef(null);
  const flashlightEl = useRef(null);
  const rafRef = useRef(null);
  const resolvedRef = useRef(0);
  const mutedRef = useRef(false);
  const allResolvedRef = useRef(false);
  const bugEls = useRef({});
  // Cursor fade-out sequence when all bugs resolved
  useEffect(() => {
    if (!allResolved) return;
    const t1 = setTimeout(() => {
      setCursorFading(true);
      if (cursorEl.current) {
        cursorEl.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        cursorEl.current.style.opacity = '0';
        cursorEl.current.style.transform = 'scale(0.6)';
      }
    }, 200);
    const t2 = setTimeout(() => setCursorRemoved(true), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [allResolved]);

  const audioCtxRef = useRef(null);
  const gameOverRef = useRef(false);

  gameOverRef.current = cursorFading;

  bugsRef.current = bugs;
  mutedRef.current = muted;
  allResolvedRef.current = allResolved;

  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const cursorX = useSpring(mouseX, { stiffness: 350, damping: 35, mass: 0.25 });
  const cursorY = useSpring(mouseY, { stiffness: 350, damping: 35, mass: 0.25 });
  const cursorScale = useMotionValue(1);

  // Audio
  const getAudio = useCallback(() => {
    if (!audioCtxRef.current)
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtxRef.current;
  }, []);

  const playHover = useCallback(() => {
    if (mutedRef.current) return;
    try {
      const ctx = getAudio();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = 1400;
      g.gain.setValueAtTime(0.01, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  }, [getAudio]);

  const playSquash = useCallback(() => {
    if (mutedRef.current) return;
    try {
      const ctx = getAudio();
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
      const n = ctx.createBufferSource();
      n.buffer = buf;
      const g = ctx.createGain();
      n.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.06, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      n.start(ctx.currentTime); n.stop(ctx.currentTime + 0.15);
      const o = ctx.createOscillator();
      const g2 = ctx.createGain();
      o.connect(g2); g2.connect(ctx.destination);
      o.type = 'sine'; o.frequency.setValueAtTime(200, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.12);
      g2.gain.setValueAtTime(0.035, ctx.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.12);
    } catch (e) {}
  }, [getAudio]);

  const playSuccess = useCallback(() => {
    if (mutedRef.current) return;
    try {
      const ctx = getAudio();
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine'; o.frequency.value = f;
        const t = ctx.currentTime + i * 0.1;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.025, t + 0.015);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        o.start(t); o.stop(t + 0.35);
      });
    } catch (e) {}
  }, [getAudio]);

  // Animation loop
  useEffect(() => {
    if (cursorFading) return;
    let lastHovered = null;
    const discovered = {};

    const animate = (time) => {
      if (gameOverRef.current) return;
      const raw = mouseRaw.current;
      const sx = cursorX.get();
      const sy = cursorY.get();

      // Lens clip position
      if (lensEl.current) {
        lensEl.current.style.setProperty('--lx', `${sx}px`);
        lensEl.current.style.setProperty('--ly', `${sy}px`);
      }

      // Flashlight dark overlay
      if (flashlightEl.current) {
        flashlightEl.current.style.background = `
          radial-gradient(circle ${LENS_RADIUS + 60}px at ${sx}px ${sy}px,
            transparent 0%, transparent 35%,
            ${isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'} 55%,
            ${isDark ? 'rgba(0,0,0,0.42)' : 'rgba(0,0,0,0.12)'} 75%,
            ${isDark ? 'rgba(0,0,0,0.52)' : 'rgba(0,0,0,0.16)'} 100%)
        `;
      }

      // Cursor transform (no rotation)
      if (cursorEl.current) {
        const sc = cursorScale.get();
        cursorEl.current.style.transform = `translate(${sx - 80}px, ${sy - 80}px) scale(${sc})`;
      }

      // Bug visibility + glow warmth + scan pulse
      const cBugs = bugsRef.current;
      let closest = null;
      let closestDist = Infinity;
      let maxWarmth = 0;

      for (const bug of cBugs) {
        if (!bug.alive) continue;
        const el = bugEls.current[bug.id];
        if (!el) continue;
        const bx = (bug.x / 100) * window.innerWidth;
        const by = (bug.y / 100) * window.innerHeight;
        const dist = Math.hypot(sx - bx, sy - by);

        let opacity;
        if (dist < LENS_RADIUS * 0.5) {
          opacity = 1;
        } else if (dist < LENS_RADIUS) {
          opacity = 1 - (dist - LENS_RADIUS * 0.5) / (LENS_RADIUS * 0.5);
        } else {
          opacity = 0;
        }

        // Scan pulse on first discovery
        let scanScale = 1;
        let scanGlow = 0;
        if (opacity > 0.5 && !discovered[bug.id]) {
          discovered[bug.id] = time;
        }
        if (discovered[bug.id] && opacity > 0) {
          const elapsed = time - discovered[bug.id];
          if (elapsed < 400) {
            const t = elapsed / 400;
            scanScale = 1 + 0.2 * (1 - t);
            scanGlow = 12 * (1 - t);
          }
        }

        el.style.opacity = opacity;
        el.style.transform = `translate(-50%, -50%) rotate(${bug.rotation}deg) scale(${(0.4 + opacity * 0.7) * scanScale})`;

        el.style.filter = opacity > 0
          ? `drop-shadow(0 0 ${8 + opacity * 10 + scanGlow}px rgba(239,68,68,${opacity * 0.35}))`
          : 'none';

        const d = Math.hypot(raw.x - bx, raw.y - by);
        if (d < closestDist) {
          closestDist = d;
          closest = bug;
        }

        if (dist < LENS_RADIUS) {
          maxWarmth = Math.max(maxWarmth, 1 - dist / LENS_RADIUS);
        }
      }

      // Warmer glow near bugs
      if (lensGlowEl.current) {
        const warmth = Math.min(1, maxWarmth * 1.5);
        const glowColor = isDark
          ? `rgba(239,68,68,${0.02 + warmth * 0.04})`
          : `rgba(239,68,68,${0.03 + warmth * 0.07})`;
        lensGlowEl.current.style.background = `
          radial-gradient(circle ${LENS_RADIUS + 40}px at ${sx}px ${sy}px,
            ${glowColor} 0%,
            transparent 60%)
        `;
      }

      // Hover sound
      const hoveredId = closest && closestDist < LENS_RADIUS * 0.5 ? closest.id : null;
      if (hoveredId !== lastHovered) {
        lastHovered = hoveredId;
        if (hoveredId !== null) playHover();
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cursorX, cursorY, cursorScale, playHover, isDark, cursorFading]);

  // Mouse events
  useEffect(() => {
    if (cursorFading) return;
    const onMove = (e) => {
      mouseRaw.current.x = e.clientX;
      mouseRaw.current.y = e.clientY;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onLeave = () => { mouseRaw.current.x = -999; mouseRaw.current.y = -999; };
    const onDown = () => cursorScale.set(0.95);
    const onUp = () => {
      cursorScale.set(1.05);
      setTimeout(() => cursorScale.set(1), 80);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [cursorScale, mouseX, mouseY, cursorFading]);

  const squashBug = useCallback((bug) => {
    if (!bug.alive) return;
    const id = bug.id;
    const bx = (bug.x / 100) * window.innerWidth;
    const by = (bug.y / 100) * window.innerHeight;

    setBugs(prev => prev.map(b => b.id === id ? { ...b, alive: false } : b));
    const el = bugEls.current[id];
    if (el) {
      el.style.animation = 'bugSquash 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }

    const nextCount = resolvedRef.current + 1;
    resolvedRef.current = nextCount;
    setResolvedCount(nextCount);

    if (nextCount >= BUG_COUNT) {
      allResolvedRef.current = true;
      setAllResolved(true);
      playSuccess();
    }

    playSquash();

    const pts = [
      { id: Date.now(), x: bx, y: by, dx: 0, dy: 0, size: 10, splat: true },
      ...Array.from({ length: 10 }, (_, i) => ({
        id: Date.now() + 1 + i,
        x: bx, y: by,
        dx: (Math.random() - 0.5) * 60,
        dy: (Math.random() - 0.5) * 60,
        size: 2 + Math.random() * 4,
      })),
    ];
    setParticles(prev => [...prev, ...pts]);
    setTimeout(() => setParticles(prev => prev.filter(p => !pts.find(n => n.id === p.id))), 400);
  }, [playSquash, playSuccess]);

  useEffect(() => {
    if (cursorFading) return;
    const onClick = (e) => {
      if (allResolvedRef.current) return;
      const mx = e.clientX, my = e.clientY;
      let closest = null, closestDist = CLICK_RADIUS;
      for (const bug of bugsRef.current) {
        if (!bug.alive) continue;
        const bx = (bug.x / 100) * window.innerWidth;
        const by = (bug.y / 100) * window.innerHeight;
        const dist = Math.hypot(mx - bx, my - by);
        if (dist < closestDist) {
          closestDist = dist;
          closest = { ...bug, bx, by };
        }
      }
      if (closest) squashBug(closest);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [squashBug, cursorFading]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300..900&family=JetBrains+Mono:wght@400;600&display=swap');
        * { font-family: 'Inter', sans-serif; }

        :root {
          --bg: #090909;
          --bg-gradient-start: transparent;
          --bg-gradient-end: transparent;
          --grid-line: rgba(255,255,255,0.04);
          --grid-major: rgba(255,255,255,0.07);
          --vignette-color: rgba(0,0,0,0.55);
          --wordmark: rgba(220,220,230,0.9);
          --headline: #FAFAFA;
          --body: #A1A1AA;
          --guide: rgba(255,255,255,0.06);
          --crop: rgba(255,255,255,0.08);
          --btn-bg: #27272A;
          --btn-text: #FAFAFA;
          --btn-border: rgba(255,255,255,0.08);
          --btn-hover: #3F3F46;
          --icon-btn-hover: rgba(39,39,42,0.5);
          --feature-icon: rgba(255,255,255,0.2);
          --feature-text: rgba(255,255,255,0.3);
          --separator: rgba(255,255,255,0.06);
          --cursor-stroke: rgba(255,255,255,0.5);
          --cursor-glass: rgba(255,255,255,0.08);
          --cursor-shadow: rgba(0,0,0,0.35);
          --bug-fill: #EF4444;
          --success-glow: rgba(239,68,68,0.06);
          --nav-pill-bg: rgba(255,255,255,0.08);
          --nav-pill-border: rgba(255,255,255,0.06);
          --nav-pill-shadow: 0 10px 30px rgba(0,0,0,0.2);
          --pill-btn-color: rgba(255,255,255,0.5);
          --pill-btn-hover: rgba(255,255,255,0.08);
          --pill-btn-hover-color: rgba(255,255,255,0.8);
          --pill-active-bg: rgba(255,255,255,0.15);
          --pill-active-color: #FFFFFF;
          --pill-active-shadow: 0 6px 20px rgba(0,0,0,0.25);
          --muted-bg: rgba(239,68,68,0.15);
          --muted-color: #EF4444;
          --nav-divider: rgba(255,255,255,0.03);
        }

        [data-theme="light"] {
          --bg: #F8FAFC;
          --bg-gradient-start: rgba(255,255,255,1);
          --bg-gradient-end: #F8FAFC;
          --grid-line: rgba(0,0,0,0.04);
          --grid-major: rgba(0,0,0,0.07);
          --vignette-color: rgba(0,0,0,0.05);
          --wordmark: #111827;
          --headline: #111827;
          --body: #6B7280;
          --guide: rgba(0,0,0,0.06);
          --crop: rgba(0,0,0,0.08);
          --btn-bg: #27272A;
          --btn-text: #FFFFFF;
          --btn-border: rgba(0,0,0,0.08);
          --btn-hover: #3F3F46;
          --icon-btn-hover: #F4F4F5;
          --feature-icon: rgba(0,0,0,0.15);
          --feature-text: rgba(0,0,0,0.25);
          --separator: rgba(0,0,0,0.06);
          --cursor-stroke: rgba(34,34,34,0.5);
          --cursor-glass: rgba(34,34,34,0.06);
          --cursor-shadow: rgba(0,0,0,0.12);
          --bug-fill: #DC2626;
          --success-glow: rgba(239,68,68,0.12);
          --nav-pill-bg: rgba(255,255,255,0.82);
          --nav-pill-border: rgba(0,0,0,0.06);
          --nav-pill-shadow: 0 10px 30px rgba(0,0,0,0.08);
          --pill-btn-color: #6B7280;
          --pill-btn-hover: rgba(0,0,0,0.05);
          --pill-btn-hover-color: #111827;
          --pill-active-bg: #111827;
          --pill-active-color: #FFFFFF;
          --pill-active-shadow: 0 6px 20px rgba(17,24,39,0.25);
          --muted-bg: #FEE2E2;
          --muted-color: #DC2626;
          --nav-divider: rgba(0,0,0,0.05);
        }

        html, html * {
          transition: background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease;
        }

        .hero-grid {
          background-image:
            linear-gradient(90deg, var(--grid-major) 1px, transparent 1px),
            linear-gradient(var(--grid-major) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
            linear-gradient(var(--grid-line) 1px, transparent 1px);
          background-size: 200px 200px, 200px 200px, 40px 40px, 40px 40px;
          mask-image: radial-gradient(ellipse at center, black 25%, transparent 72%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 25%, transparent 72%);
        }

        .hero-vignette {
          background: radial-gradient(ellipse at center, transparent 35%, var(--vignette-color) 100%);
        }

        .hero-glow {
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.015) 0%, transparent 50%);
        }

        .hero-guide {
          background: var(--guide);
        }

        .hero-crop {
          stroke: var(--crop);
          stroke-width: 0.5;
          fill: none;
        }

        .lens-magnify {
          clip-path: circle(${LENS_RADIUS}px at var(--lx, -9999px) var(--ly, -9999px));
          will-change: clip-path;
        }

        .logo-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--wordmark);
          cursor: pointer;
          user-select: none;
          opacity: 0.85;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .logo-text:hover {
          opacity: 1;
          transform: scale(1.03);
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          position: relative;
          color: var(--pill-btn-color);
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .icon-btn svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .icon-btn:hover {
          background: var(--icon-btn-hover);
          transform: scale(1.05);
        }
        .icon-btn:active {
          transform: scale(0.95);
        }

        .icon-btn-active {
          color: var(--pill-active-color);
        }
        .icon-btn-active:hover {
          color: var(--pill-active-color);
        }

        .icon-btn-muted {
          background: var(--muted-bg);
          color: var(--muted-color);
        }
        .icon-btn-muted:hover {
          background: var(--muted-bg);
          color: var(--muted-color);
        }

        .icon-btn::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #A1A1AA;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s ease;
        }
        .icon-btn:hover::after {
          opacity: 1;
        }

        .nav-divider {
          position: absolute;
          bottom: 0;
          left: 40px;
          right: 40px;
          height: 1px;
          background: var(--nav-divider);
          pointer-events: none;
        }

        @keyframes bugWiggle {
          0%, 100% { transform: translate(-50%, -50%) rotate(var(--rot,0deg)) scale(1); }
          20% { transform: translate(-50%, -50%) rotate(calc(var(--rot,0deg) + 2deg)) scale(1.03); }
          40% { transform: translate(-50%, -50%) rotate(calc(var(--rot,0deg) - 1deg)) scale(0.98); }
          60% { transform: translate(-50%, -50%) rotate(calc(var(--rot,0deg) + 3deg)) scale(1.02); }
          80% { transform: translate(-50%, -50%) rotate(calc(var(--rot,0deg) - 2deg)) scale(0.99); }
        }

        @keyframes bugSquash {
          0% { transform: translate(-50%, -50%) rotate(var(--rot,0deg)) scale(1); opacity: 1; }
          12% { transform: translate(-50%, -50%) rotate(var(--rot,0deg)) scale(1.6, 0.4); opacity: 1; }
          30% { transform: translate(-50%, -50%) rotate(var(--rot,0deg)) scale(2.8, 0.1); opacity: 0.6; }
          60% { transform: translate(-50%, -50%) rotate(var(--rot,0deg)) scale(3.5, 0.03); opacity: 0.2; }
          100% { transform: translate(-50%, -50%) rotate(var(--rot,0deg)) scale(0, 0); opacity: 0; }
        }

        @keyframes particleFly {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
        }

        @keyframes splatBurst {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          15% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
        }

        @keyframes successPulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.1; }
        }
        @keyframes formFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background */}
      <div
        className={`h-screen w-screen relative overflow-hidden select-none ${step === 1 && !cursorRemoved ? 'cursor-none' : ''}`}
        style={{
          background: 'var(--bg)',
          ...(step === 2 ? {
            '--grid-line': isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.035)',
            '--grid-major': isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.035)',
          } : {}),
        }}
        data-theme={isDark ? 'dark' : 'light'}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%)',
        }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute inset-0 hero-vignette pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />

        {/* Flashlight dark overlay */}
        {step === 1 && !cursorRemoved && <div ref={flashlightEl} className="absolute inset-0 pointer-events-none z-[2]" />}

        {/* Cursor-driven lens glow (warmer near bugs) */}
        {step === 1 && !cursorRemoved && <div ref={lensGlowEl} className="absolute inset-0 pointer-events-none z-[3]" />}

        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hero-guide pointer-events-none" />
        <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 hero-guide pointer-events-none" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line className="hero-crop" x1="60" y1="60" x2="100" y2="60" />
          <line className="hero-crop" x1="60" y1="60" x2="60" y2="100" />
          <line className="hero-crop" x1="calc(100% - 60)" y1="60" x2="calc(100% - 100)" y2="60" />
          <line className="hero-crop" x1="calc(100% - 60)" y1="60" x2="calc(100% - 60)" y2="100" />
          <line className="hero-crop" x1="60" y1="calc(100% - 60)" x2="100" y2="calc(100% - 60)" />
          <line className="hero-crop" x1="60" y1="calc(100% - 60)" x2="60" y2="calc(100% - 100)" />
          <line className="hero-crop" x1="calc(100% - 60)" y1="calc(100% - 60)" x2="calc(100% - 100)" y2="calc(100% - 60)" />
          <line className="hero-crop" x1="calc(100% - 60)" y1="calc(100% - 60)" x2="calc(100% - 60)" y2="calc(100% - 100)" />
        </svg>

        {/* Navbar */}
        <nav style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
          height: '72px', padding: '0 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span className="logo-text">
            &lt;d_bug&gt;
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`icon-btn ${isDark ? 'icon-btn-active' : ''}`}
              data-tooltip="Switch Theme"
              aria-label="Switch Theme"
            >
              <div style={{ position: 'relative', width: 20, height: 20 }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: isDark ? 1 : 0,
                  transform: `rotate(${isDark ? 0 : 180}deg) scale(${isDark ? 1 : 0.9})`,
                  transition: 'transform 0.35s ease, opacity 0.35s ease',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: isDark ? 0 : 1,
                  transform: `rotate(${isDark ? -180 : 0}deg) scale(${isDark ? 0.9 : 1})`,
                  transition: 'transform 0.35s ease, opacity 0.35s ease',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Sound toggle */}
            <button
              onClick={() => setMuted(p => !p)}
              className={`icon-btn ${muted ? 'icon-btn-muted' : ''}`}
              data-tooltip={muted ? 'Enable Sounds' : 'Mute Sounds'}
              aria-label={muted ? 'Enable Sounds' : 'Mute Sounds'}
            >
              <div style={{ position: 'relative', width: 20, height: 20 }}>
                {muted ? (
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: 'none',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                ) : (
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          </div>

          <div className="nav-divider" />
        </nav>

        {/* Success glow */}
        {allResolved && (
          <div className="absolute inset-0 z-[6] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, var(--success-glow) 0%, transparent 60%)',
            animation: 'successPulse 3s ease-in-out infinite',
          }} />
        )}

        {step === 2 && isDark && (
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.03) 0%, transparent 60%)',
          }} />
        )}
        {step === 2 && !isDark && (
          <div className="absolute inset-0 z-[2] pointer-events-none flex items-start justify-center" style={{ paddingTop: '25vh' }}>
            <div style={{
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'rgba(239,68,68,0.05)',
              filter: 'blur(140px)',
            }} />
          </div>
        )}

        {/* Magnified Lens Overlay */}
        {step === 1 && !cursorRemoved && (
          <div
            ref={lensEl}
            className="absolute inset-0 z-[4] pointer-events-none lens-magnify"
          >
            <div className="absolute inset-0" style={{
              transform: 'scale(1.15)',
              backgroundImage: `
                linear-gradient(90deg, var(--grid-major) 1px, transparent 1px),
                linear-gradient(var(--grid-major) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
                linear-gradient(var(--grid-line) 1px, transparent 1px)
              `,
              backgroundSize: '200px 200px, 200px 200px, 40px 40px, 40px 40px',
              willChange: 'transform',
              transformOrigin: 'var(--lx, center) var(--ly, center)',
              opacity: 0.85,
            }} />
          </div>
        )}

        {/* Bugs */}
        {step === 1 && !cursorRemoved && bugs.map(bug => (
          <div key={bug.id} className="absolute pointer-events-none z-[3]" style={{
            left: `${bug.x}%`,
            top: `${bug.y}%`,
          }}>
            <div
              ref={el => { bugEls.current[bug.id] = el; }}
              style={{
                opacity: 0,
                width: '30px',
                height: '28px',
                '--rot': `${bug.rotation}deg`,
                animation: bug.alive ? `bugWiggle 2.5s ease-in-out infinite` : 'none',
                animationDelay: `${bug.animDelay}s`,
                willChange: 'transform, opacity',
                transition: 'opacity 0.25s ease, filter 0.3s ease',
              }}
              dangerouslySetInnerHTML={{ __html: BUG_VARIANTS[bug.variant] }}
            />
          </div>
        ))}

        {/* Particles */}
        {step === 1 && !cursorRemoved && particles.map(p => (
          <div key={p.id} className="fixed pointer-events-none z-[100] rounded-full" style={{
            left: p.x, top: p.y,
            width: p.splat ? '3px' : `${p.size}px`,
            height: p.splat ? '3px' : `${p.size}px`,
            backgroundColor: p.splat ? 'transparent' : '#EF4444',
            boxShadow: p.splat ? '0 0 0 2.5px #EF4444' : 'none',
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            animation: p.splat ? 'splatBurst 0.3s ease-out forwards' : 'particleFly 0.35s ease-out forwards',
            willChange: 'transform',
          }} />
        ))}

        {/* Cursor */}
        {step === 1 && !cursorRemoved && (
          <div
            ref={cursorEl}
            className="fixed pointer-events-none z-[9999]"
            style={{ width: 160, height: 160, willChange: 'transform' }}
          >
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
            <defs>
              <filter id="cursorShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="var(--cursor-shadow)" />
              </filter>
              <radialGradient id="lensGrad" cx="38%" cy="32%">
                <stop offset="0%" stopColor="var(--cursor-glass)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.01)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
              </radialGradient>
              <radialGradient id="lensReflect" cx="30%" cy="25%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {/* Handle */}
            <line x1="92" y1="92" x2="142" y2="142" stroke="var(--cursor-stroke)" strokeWidth="2.5" strokeLinecap="round" filter="url(#cursorShadow)" />
            {/* Handle connector */}
            <circle cx="92" cy="92" r="5" stroke="var(--cursor-stroke)" strokeWidth="1.2" fill="none" />
            {/* Outer lens ring */}
            <circle cx="62" cy="62" r="50" stroke="var(--cursor-stroke)" strokeWidth="1.5" filter="url(#cursorShadow)" />
            {/* Inner lens ring */}
            <circle cx="62" cy="62" r="48.5" stroke="var(--cursor-stroke)" strokeWidth="0.5" opacity="0.4" />
            {/* Glass fill */}
            <circle cx="62" cy="62" r="48" fill="url(#lensGrad)" />
            {/* Glass reflection */}
            <path d="M 22 48 A 44 44 0 0 1 55 18" stroke="var(--cursor-stroke)" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <path d="M 20 60 A 46 46 0 0 1 26 42" stroke="var(--cursor-stroke)" strokeWidth="0.75" strokeLinecap="round" opacity="0.08" />
            {/* Lens highlight */}
            <ellipse cx="48" cy="42" rx="18" ry="12" fill="url(#lensReflect)" transform="rotate(-15 48 42)" />
            {/* Crosshairs */}
            <line x1="62" y1="24" x2="62" y2="34" stroke="var(--cursor-stroke)" strokeWidth="0.75" opacity="0.1" />
            <line x1="62" y1="90" x2="62" y2="100" stroke="var(--cursor-stroke)" strokeWidth="0.75" opacity="0.1" />
            <line x1="24" y1="62" x2="34" y2="62" stroke="var(--cursor-stroke)" strokeWidth="0.75" opacity="0.1" />
            <line x1="90" y1="62" x2="100" y2="62" stroke="var(--cursor-stroke)" strokeWidth="0.75" opacity="0.1" />
            {/* Center dot */}
            <circle cx="62" cy="62" r="1.5" stroke="var(--cursor-stroke)" strokeWidth="0.5" opacity="0.15" />
          </svg>
        </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 pointer-events-none">
          <div className="pointer-events-auto" style={{
            animation: 'formFadeIn 0.4s ease-out',
          }}>
            {step === 1 && (
              <Welcome
                resolvedCount={resolvedCount}
                totalBugs={BUG_COUNT}
                allResolved={allResolved}
                nextStep={() => setStep(s => s + 1)}
              />
            )}
            {step === 2 && <CreateOrganization nextStep={() => setStep(s => s + 1)} isDark={isDark} />}
            {step === 3 && <ConnectGithub />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
