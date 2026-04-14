import AmazonLogo from './assets/logos/amazon_logo (1).jpg';
import UofTAILogo from './assets/logos/UofTAI_Logo.fcbdda1a2c787027706b (1).png';
import BidEngineLogo from './assets/logos/BidEngine.png';
import FlymingosLogo from './assets/logos/Flymingos.jpg';

const App = () => {
  const profile = {
    email: "tusharpatangemohan@gmail.com",
    github: "https://github.com/tusharra0",
    linkedin: "https://linkedin.com/in/tusharra0",
  };

  const work = [
    {
      logoSrc: AmazonLogo,
      company: "amazon",
      role: "software dev intern, ai",
      desc: "incoming sde intern, amazon ring",
      date: "summer 2026",
    },
    {
      logoSrc: BidEngineLogo,
      company: "bidengine",
      role: "founding engineer",
      desc: "ai-powered construction tender estimation",
      date: "2025 - present",
    },
    {
      logoSrc: FlymingosLogo,
      company: "flymingos",
      role: "software engineer intern",
      desc: "ai matchmaking engine with openai embeddings & vector search",
      date: "summer 2025",
    },
{
      logoSrc: UofTAILogo,
      company: "uoft ai",
      role: "web developer",
      desc: "responsive web apps with react & chakra ui",
      date: "fall 2025",
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center">
      {/* Header */}
      <header className="flex-shrink-0 pt-10 sm:pt-14 pb-6 sm:pb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black uppercase text-center">
          Tushar Rao
        </h1>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-y-6 md:gap-x-12 lg:gap-x-20">

          {/* About */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#999] self-start pt-0.5">
            about
          </p>
          <div className="text-sm sm:text-base text-[#555] leading-relaxed space-y-3">
            <p>
              third year cs student at{' '}
              <a href="https://www.utoronto.ca" target="_blank" rel="noreferrer" className="inline-link">
                u of t
              </a>
              , joining{' '}
              <a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="inline-link">
                amazon
              </a>
              {' '}this summer.
            </p>
            <p>
              currently building{' '}
              <a href="https://bidengine.ca" target="_blank" rel="noreferrer" className="inline-link">
                bidengine.ca
              </a>
              {' '}— ai that estimates construction tenders.
            </p>
            <p>
              interested in applied ai, backend, and distributed systems.
            </p>
          </div>

          {/* Experience */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#999] self-start pt-1 mt-4 md:mt-6">
            experience
          </p>
          <div className="space-y-0 mt-4 md:mt-6">
            {work.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 sm:gap-4 py-2 sm:py-2.5"
              >
                <img
                  src={item.logoSrc}
                  alt={item.company}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-cover flex-shrink-0 bg-white"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm sm:text-base font-semibold text-black">
                      {item.role}
                    </span>
                    <span className="text-sm sm:text-base text-[#999]">
                      @ {item.company}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#aaa] mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs text-[#bbb] whitespace-nowrap flex-shrink-0 hidden sm:block">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer links */}
      <footer className="flex-shrink-0 pb-6 sm:pb-10 flex items-center justify-center gap-6 sm:gap-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm text-[#aaa] hover:text-black transition-colors duration-150 underline underline-offset-4 decoration-[#ddd]"
        >
          github
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm text-[#aaa] hover:text-black transition-colors duration-150 underline underline-offset-4 decoration-[#ddd]"
        >
          linkedin
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-xs sm:text-sm text-[#aaa] hover:text-black transition-colors duration-150 underline underline-offset-4 decoration-[#ddd]"
        >
          email
        </a>
      </footer>
    </div>
  );
};

export default App;
