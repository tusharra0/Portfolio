import { useState, useEffect } from 'react';
import AmazonLogo from './assets/logos/amazon_logo (1).jpg';
import UofTAILogo from './assets/logos/UofTAI_Logo.fcbdda1a2c787027706b (1).png';
import BidEngineLogo from './assets/logos/BidEngine.png';
import FlymingosLogo from './assets/logos/Flymingos.jpg';
import GDSCLogo from './assets/logos/GDSC_Logo_White_Background_0 (1).png';

const Name = () => (
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center select-none px-4 text-white">
    Tushar Rao
  </h1>
);

const ExperienceCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group rounded-lg px-3 -mx-3 transition-all duration-300 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 py-2.5 sm:py-3">
        <img src={item.logoSrc} alt={item.company} className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-cover flex-shrink-0 mt-0.5 sm:mt-0" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[15px] sm:text-base font-medium text-neutral-200">{item.role}</span>
            <span className="text-[15px] sm:text-base text-neutral-500">{item.company}</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">{item.summary}</p>
          <p className="text-[10px] sm:hidden text-neutral-600 mt-0.5">{item.date}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs text-neutral-600 whitespace-nowrap hidden sm:block">{item.date}</span>
          <svg
            className={`w-3.5 h-3.5 text-neutral-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="pl-[44px] sm:pl-[52px] pb-4 pr-2 sm:pr-3">
          <ul className="space-y-1.5">
            {item.details.map((detail, i) => (
              <li key={i} className="text-xs sm:text-sm text-neutral-400 leading-relaxed flex gap-2">
                <span className="text-neutral-600 mt-1 flex-shrink-0">—</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          {item.tech && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tech.map((t, i) => (
                <span key={i} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-500">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const profile = {
    email: "tusharpatangemohan@gmail.com",
    github: "https://github.com/tusharra0",
    linkedin: "https://linkedin.com/in/tusharra0",
  };

  const work = [
    {
      logoSrc: AmazonLogo,
      company: "Amazon",
      role: "Software Dev Intern, AI",
      summary: "incoming sde intern, amazon ring",
      date: "may – aug 2026",
      details: [
        "joining the ring ai team for summer 2026",
      ],
      tech: ["python", "aws"],
    },
    {
      logoSrc: BidEngineLogo,
      company: "BidEngine",
      role: "Founding Engineer",
      summary: "ai-powered construction tender estimation",
      date: "nov 2025 – apr 2026",
      details: [
        "built an ai pipeline that parses construction tender documents and generates cost estimates",
        "designed the full stack from document ingestion to estimate delivery using llms and structured extraction",
        "owner of backend architecture, api design, and deployment infrastructure",
      ],
      tech: ["python", "react", "openai", "postgresql", "aws"],
    },
    {
      logoSrc: FlymingosLogo,
      company: "Flymingos",
      role: "Software Engineer Intern",
      summary: "ai matchmaking engine with embeddings & vector search",
      date: "may – aug 2025",
      details: [
        "built an ai-driven matchmaking engine using openai embeddings and vector similarity search",
        "designed and implemented the matching algorithm pipeline from user profiling to ranked results",
        "integrated with existing backend services and optimized query latency for real-time matching",
      ],
      tech: ["node.js", "openai", "pinecone", "mongodb", "react"],
    },
    {
      logoSrc: GDSCLogo,
      company: "GDSC",
      role: "Student ML Engineer",
      summary: "full stack ml stock trading simulator",
      date: "jan – apr 2025",
      details: [
        "built a full stack ml stock trading simulator in a 4-person team with live market data",
        "trained lstm, rnn, and knn models with tensorflow and scikit-learn for real-time price forecasting and backtesting",
        "engineered a data pipeline with yahoo finance api, processing 10,000+ data points per minute with batched writes",
      ],
      tech: ["react", "flask", "mongodb", "tensorflow", "scikit-learn"],
    },
    {
      logoSrc: UofTAILogo,
      company: "UofT AI",
      role: "Web Developer",
      summary: "responsive web apps with react & chakra ui",
      date: "sep – dec 2024",
      details: [
        "developed responsive web applications for the uoft ai club using react and chakra ui",
        "collaborated with designers and other developers to ship features on a weekly cadence",
        "improved site performance and accessibility across mobile and desktop",
      ],
      tech: ["react", "chakra ui", "javascript"],
    },
  ];

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto overflow-x-hidden flex flex-col items-center bg-[#0a0a0a] text-white">

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '150px', opacity: 0.035,
      }} />

      <header className="flex-shrink-0 pt-12 sm:pt-20 pb-6 sm:pb-12">
        <Name />
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-5 sm:px-8 flex flex-col py-4 sm:py-0 sm:justify-center">
        <div className="space-y-10 sm:space-y-14">

          {/* About */}
          <section>
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">About</p>
            <div className="text-[15px] sm:text-base text-neutral-400 leading-relaxed space-y-2.5">
              <p>third year cs student at{' '}<a href="https://www.utoronto.ca" target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white transition-colors duration-200">u of t</a>, headed to{' '}<a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white transition-colors duration-200">amazon</a>{' '}for the summer as an sde intern.</p>
              <p>i like applied ai, backend, and distributed systems where latency and scale matter.</p>
              <p>my favorite languages to code in are golang and rust.</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">Experience</p>
            <div className="space-y-0.5">
              {work.map((item, idx) => (
                <ExperienceCard key={idx} item={item} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <footer className="flex-shrink-0 py-6 sm:py-12 flex items-center justify-center gap-6 sm:gap-8">
        {[
          { href: profile.github, label: 'GitHub' },
          { href: profile.linkedin, label: 'LinkedIn' },
          { href: `mailto:${profile.email}`, label: 'Email' },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors duration-200">{l.label}</a>
        ))}
      </footer>
    </div>
  );
};

export default App;
