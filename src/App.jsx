import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/ui/accordion';
import AmazonLogo from './assets/logos/amazon_logo (1).jpg';
import BidEngineLogo from './assets/logos/BidEngine.png';
import MunafahLogo from './assets/logos/munafah.ai.jpg';
import UofTCompSciLogo from './assets/logos/uoftcompsci_logo.jpg';
import ShopifyLogo from './assets/logos/shopify-logo-png_seeklogo-273895.png';

const Name = () => (
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center select-none px-4 text-white">
    Tushar Rao
  </h1>
);

const ExperienceRow = ({ item, expandable }) => (
  <div className="flex w-full items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-3">
    <img src={item.logoSrc} alt={item.company} width={36} height={36} draggable={false} className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-cover flex-shrink-0 mt-0.5 sm:mt-0" />
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-[15px] sm:text-base font-medium text-neutral-200">{item.company}</span>
        <span className="text-[15px] sm:text-base text-neutral-500">{item.role}</span>
      </div>
      <span className="block text-[10px] sm:hidden text-neutral-600 mt-0.5">{item.date}</span>
    </div>
    <div className="flex items-center gap-3 flex-shrink-0">
      <span className="text-xs text-neutral-600 whitespace-nowrap hidden sm:block">{item.date}</span>
      {expandable && (
        <svg
          className="accordion-chevron w-3.5 h-3.5 text-neutral-600 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </div>
  </div>
);

const ExperienceCard = ({ item, value }) => {
  if (!item.description) {
    return (
      <div className="px-3 -mx-3">
        <ExperienceRow item={item} />
      </div>
    );
  }

  return (
    <AccordionItem id={value} value={value} className="-mx-3">
      <AccordionTrigger className="w-full px-3 rounded-lg select-none cursor-pointer transition-colors duration-200 active:bg-white/[0.045] sm:hover:bg-white/[0.02] sm:active:bg-white/[0.045]">
        <ExperienceRow item={item} expandable />
      </AccordionTrigger>
      <AccordionContent className="pl-[56px] sm:pl-[64px] pb-4 pr-5 sm:pr-6">
        <p className="text-[13px] sm:text-sm text-neutral-400 leading-relaxed">{item.description}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

const App = () => {
  const [openItem, setOpenItem] = useState('');

  // On phones an expanded card often lands below the fold, so the tap reads as
  // doing nothing. Nudge it into view once the open animation settles.
  const handleOpenChange = (value) => {
    setOpenItem(value);
    if (!value) return;
    window.setTimeout(() => {
      document.getElementById(value)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 560);
  };

  const profile = {
    email: "tusharpatangemohan@gmail.com",
    github: "https://github.com/tusharra0",
    linkedin: "https://linkedin.com/in/tusharra0",
  };

  const work = [
    {
      logoSrc: ShopifyLogo,
      company: "Shopify",
      role: "Software Engineer Intern",
      date: "September 2026 - December 2026",
      description: "",
    },
    {
      logoSrc: AmazonLogo,
      company: "Amazon",
      role: "Software Dev Intern, AI",
      date: "May 2026 - July 2026",
      description: "I worked on Ring's notifications team, where I built an agentic WhatsApp experience for device support using Amazon Bedrock. When a Ring device went offline, users could reply to the notification and the agent would use live device telemetry, event history, memory, and Ring support content to understand what happened and help them reconnect. Fun fact, I also got flown out to Los Angeles to present the project to Ring's CEO, and he loved the idea!",
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
  ];

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden flex flex-col items-center bg-[#0a0a0a] text-white pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '150px', opacity: 0.035,
        transform: 'translateZ(0)',
      }} />

      <header className="flex-shrink-0 pt-[max(3rem,env(safe-area-inset-top))] sm:pt-20 pb-6 sm:pb-12">
        <Name />
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-5 sm:px-8 flex flex-col py-4 sm:py-0 sm:justify-center">
        <div className="space-y-10 sm:space-y-14">

          {/* About */}
          <section>
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">About</p>
            <div className="text-[15px] sm:text-base text-neutral-400 leading-relaxed space-y-2.5">
              <p>I&rsquo;m a third year Computer Science student at the University of Toronto, hopefully graduating in June 2028.</p>
              <p>Over the last few years, I&rsquo;ve spent time working at a mix of early-stage startups like{' '}<a href="https://bidengine.ca" target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-400 transition-colors duration-200">Bid Engine</a>{' '}and larger companies like{' '}<a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-400 transition-colors duration-200">Amazon</a>, and now{' '}<a href="https://www.shopify.com" target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-400 transition-colors duration-200">Shopify</a>. I spend most of my time on the software behind AI, from agents and model serving to observability, backend infrastructure, and the distributed systems that keep it all running.</p>
              <p>If any of this sounds interesting, feel free to reach out on{' '}<a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-400 transition-colors duration-200">LinkedIn</a>. I&rsquo;m always open to connecting with people working on similar problems :)</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">Experience</p>
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={handleOpenChange}
              className="space-y-0.5"
            >
              {work.map((item, idx) => (
                <ExperienceCard key={idx} item={item} value={`experience-${idx}`} />
              ))}
            </Accordion>
          </section>

        </div>
      </main>

      <footer className="flex-shrink-0 pt-6 sm:pt-12 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-12 flex items-center justify-center gap-6 sm:gap-8">
        {[
          { href: profile.github, label: 'GitHub' },
          { href: profile.linkedin, label: 'LinkedIn' },
          { href: `mailto:${profile.email}`, label: 'Email' },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-xs text-neutral-500 hover:text-neutral-200 active:text-neutral-200 transition-colors duration-200 py-3 -my-3 px-3 -mx-3">{l.label}</a>
        ))}
      </footer>
    </div>
  );
};

export default App;
