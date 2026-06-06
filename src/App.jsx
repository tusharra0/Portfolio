import { useState, useEffect } from 'react';
import AmazonLogo from './assets/logos/amazon_logo (1).jpg';
import UofTAILogo from './assets/logos/UofTAI_Logo.fcbdda1a2c787027706b (1).png';
import BidEngineLogo from './assets/logos/BidEngine.png';
import MunafahLogo from './assets/logos/munafah.ai.jpg';
import UofTCompSciLogo from './assets/logos/uoftcompsci_logo.jpg';

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
            <span className="text-[15px] sm:text-base font-medium text-neutral-200">{item.company}</span>
            <span className="text-[15px] sm:text-base text-neutral-500">{item.role}</span>
          </div>
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
        style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="pl-[44px] sm:pl-[52px] pb-4 pr-2 sm:pr-3">
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{item.description}</p>
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
      date: "May 2026 - August 2026",
      description: "Currently working on shipping consumer facing LLM agent feature to 10M+ Ring users in production across iOS, Android, and web clients.",
    },
    {
      logoSrc: BidEngineLogo,
      company: "BidEngine",
      role: "Founding Engineer",
      date: "January 2026 - Present",
      description: "I designed the AI estimation flow for a construction tender platform. Shipped a Python LLM pipeline parsing spec PDFs into line items, a LangGraph agent flagging low confidence matches for review, and a Spring Boot MCP server on Azure AKS coordinating tender invitations across bidder pools.",
    },
    {
      logoSrc: MunafahLogo,
      company: "Munafah.ai",
      role: "Software Engineer Intern",
      date: "May 2025 - August 2025",
      description: "I cut Firestore read latency 70% across 50K+ records using composite indexes and Redis. Wrote a buyer to supplier matching service with OpenAI embeddings in Chroma under 200ms, on an event driven TypeScript backend serving 750+ users.",
    },
    {
      logoSrc: UofTCompSciLogo,
      company: "University of Toronto",
      role: "Student ML Engineer",
      date: "January 2025 - April 2025",
      description: "I made a full stack ML trading simulator with a 4 person team. Built a Yahoo Finance pipeline processing 10,000+ data points per minute and trained LSTM, RNN, and KNN models for real time price forecasting and backtesting.",
    },
    {
      logoSrc: UofTAILogo,
      company: "UofT AI",
      role: "Web Developer",
      date: "September 2024 - December 2024",
      description: "I wrote some React and Chakra UI for the UofT AI club. Shipped features weekly with designers and other devs.",
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
