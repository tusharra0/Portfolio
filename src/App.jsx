import { useState, useEffect, useRef, useCallback } from 'react';
import AmazonLogo from './assets/logos/amazon_logo (1).jpg';
import UofTAILogo from './assets/logos/UofTAI_Logo.fcbdda1a2c787027706b (1).png';
import BidEngineLogo from './assets/logos/BidEngine.png';
import FlymingosLogo from './assets/logos/Flymingos.jpg';
import GDSCLogo from './assets/logos/GDSC_Logo_White_Background_0 (1).png';

const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  return isTouch;
};

const LineCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (isTouch) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div className="fixed pointer-events-none z-[10000] h-[1px] bg-white/10" style={{ top: pos.y, left: 0, right: 0 }} />
      <div className="fixed pointer-events-none z-[10000] w-[1px] bg-white/10" style={{ left: pos.x, top: 0, bottom: 0 }} />
      <div className="fixed pointer-events-none z-[10001] w-2 h-2 rounded-full bg-[#e8630a]" style={{ left: pos.x - 4, top: pos.y - 4 }} />
    </>
  );
};

const StaticName = () => {
  const [hovered, setHovered] = useState(false);
  const [display, setDisplay] = useState('TUSHAR RAO');
  const target = 'TUSHAR RAO';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const intervalRef = useRef(null);
  const iterRef = useRef(0);

  const startScramble = useCallback(() => {
    iterRef.current = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      iterRef.current++;
      setDisplay(
        target.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (iterRef.current > i * 2) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      if (iterRef.current > target.length * 2) {
        clearInterval(intervalRef.current);
        setDisplay(target);
      }
    }, 40);
  }, []);

  const stopScramble = useCallback(() => {
    clearInterval(intervalRef.current);
    setDisplay(target);
  }, []);

  useEffect(() => {
    if (hovered) startScramble();
    else stopScramble();
    return () => clearInterval(intervalRef.current);
  }, [hovered, startScramble, stopScramble]);

  return (
    <h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-center select-none font-mono px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => { setHovered(true); setTimeout(() => setHovered(false), 1200); }}
    >
      <span className={hovered ? 'text-[#e8630a]' : 'text-white'} style={{ transition: 'color 0.3s' }}>
        {display}
      </span>
    </h1>
  );
};

const App = () => {
  const isTouch = useIsTouchDevice();

  const profile = {
    email: "tusharpatangemohan@gmail.com",
    github: "https://github.com/tusharra0",
    linkedin: "https://linkedin.com/in/tusharra0",
  };

  const work = [
    { logoSrc: AmazonLogo, company: "amazon", role: "software dev intern, ai", desc: "incoming sde intern, amazon ring", date: "may 2026 - august 2026" },
    { logoSrc: BidEngineLogo, company: "bidengine", role: "founding engineer", desc: "ai-powered construction tender estimation", date: "november 2025 - april 2026" },
    { logoSrc: FlymingosLogo, company: "flymingos", role: "software engineer intern", desc: "ai matchmaking engine with openai embeddings & vector search", date: "may 2025 - august 2025" },
    { logoSrc: GDSCLogo, company: "gdsc", role: "student ml engineer", desc: "full stack ml stock trading simulator, lstm/rnn price forecasting", date: "january 2025 - april 2025" },
    { logoSrc: UofTAILogo, company: "uoft ai", role: "web developer", desc: "responsive web apps with react & chakra ui", date: "september 2024 - december 2024" },
  ];

  return (
    <div
      className="min-h-screen min-h-[100dvh] w-screen overflow-y-auto overflow-x-hidden flex flex-col items-center bg-[#050505] text-white"
      style={isTouch ? undefined : { cursor: 'none' }}
    >
      <LineCursor />

      {/* Grain + scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[9999]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '150px', opacity: 0.06,
      }} />
      <div className="fixed inset-0 pointer-events-none z-[9998]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
      }} />

      {/* Side accent bars */}
      <div className="fixed left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#e8630a]/20 to-transparent hidden sm:block" />
      <div className="fixed right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#e8630a]/20 to-transparent hidden sm:block" />

      <header className="flex-shrink-0 pt-8 sm:pt-14 pb-4 sm:pb-10">
        <StaticName />
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-10 lg:px-16 flex flex-col justify-center py-4 sm:py-0">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-y-4 sm:gap-y-6 md:gap-x-12 lg:gap-x-20">
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#333] self-start pt-0.5">about</p>
          <div className="text-sm sm:text-base text-[#666] leading-relaxed space-y-2 sm:space-y-3">
            <p>third year cs student at{' '}<a href="https://www.utoronto.ca" target="_blank" rel="noreferrer" className="text-[#999] underline underline-offset-3 decoration-[#222] hover:text-[#e8630a] hover:decoration-[#e8630a] transition-colors">u of t</a>, headed to{' '}<a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="text-[#999] underline underline-offset-3 decoration-[#222] hover:text-[#e8630a] hover:decoration-[#e8630a] transition-colors">amazon</a>{' '}for the summer as an sde intern.</p>
            <p>i like applied ai, backend, and distributed systems where latency and scale matter.</p>
            <p>my favorite languages to code in are golang and rust.</p>
          </div>

          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#333] self-start pt-1 mt-2 md:mt-6">experience</p>
          <div className="space-y-0 mt-2 md:mt-6">
            {work.map((item, idx) => (
              <div key={idx} className="group flex items-start sm:items-center gap-3 sm:gap-4 py-2.5 sm:py-2.5 hover:bg-[#e8630a]/[0.03] rounded-lg px-2 -mx-2 transition-all duration-200 border border-transparent hover:border-[#e8630a]/10">
                <img src={item.logoSrc} alt={item.company} className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500 mt-0.5 sm:mt-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                    <span className="text-sm sm:text-base font-semibold text-[#ccc] group-hover:text-white transition-colors">{item.role}</span>
                    <span className="text-sm sm:text-base text-[#444] group-hover:text-[#666] transition-colors">@ {item.company}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#333] mt-0.5 truncate">{item.desc}</p>
                  <p className="text-[10px] sm:hidden text-[#2a2a2a] mt-0.5">{item.date}</p>
                </div>
                <span className="text-xs text-[#2a2a2a] whitespace-nowrap flex-shrink-0 hidden sm:block group-hover:text-[#444] transition-colors">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex-shrink-0 py-6 sm:pb-10 flex items-center justify-center gap-6 sm:gap-8">
        {[{ href: profile.github, label: 'github' }, { href: profile.linkedin, label: 'linkedin' }, { href: `mailto:${profile.email}`, label: 'email' }].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-[#333] hover:text-[#e8630a] transition-colors underline underline-offset-4 decoration-[#1a1a1a]">{l.label}</a>
        ))}
      </footer>
    </div>
  );
};

export default App;
