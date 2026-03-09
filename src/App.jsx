import AmazonLogo from './assets/logos/Amazon.jpg';
import UofTLogo from './assets/logos/Utoronto_coa.svg';
import GDSCLogo from './assets/logos/GDSC.jpg';
import UofTAILogo from './assets/logos/uoftailogo.jpg';

const App = () => {
  const profile = {
    email: "tusharpatangemohan@gmail.com",
    github: "https://github.com/tusharrao0",
    linkedin: "https://linkedin.com/in/tusharra0",
  };

  const work = [
    {
      logoSrc: AmazonLogo,
      company: "amazon",
      role: "software dev intern — ai/ml",
      desc: "building on the ring team, ai/ml systems",
      date: "summer 2026",
    },
    {
      logoSrc: UofTLogo,
      company: "uoft",
      role: "software engineer intern",
      desc: "ai matchmaking engine with openai embeddings & vector search",
      date: "summer 2025",
    },
    {
      logoSrc: GDSCLogo,
      company: "gdsc",
      role: "student software engineer",
      desc: "full stack trading simulator, ml price forecasting",
      date: "winter 2025",
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
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      {/* Header */}
      <header className="pt-8 sm:pt-12 pb-4 sm:pb-6 text-center flex-shrink-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
          Tushar Rao
        </h1>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-6 md:gap-x-16 lg:gap-x-24">

          {/* About */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#666] self-start pt-0.5">
            about
          </p>
          <div className="text-sm sm:text-base text-[#b0b0b0] leading-relaxed space-y-3">
            <p>
              cs student at{' '}
              <a href="https://www.utoronto.ca" target="_blank" rel="noreferrer" className="inline-link">
                u of t
              </a>
              {' '}— joining{' '}
              <a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="inline-link">
                amazon
              </a>
              {' '}this summer on ring, working on ai/ml.
            </p>
            <p>
              interested in gen ai, llms, and distributed systems.
            </p>
            <p>
              don't be a stranger, reach out — {' '}
              <a href={`mailto:${profile.email}`} className="inline-link">
                {profile.email}
              </a>
            </p>
          </div>

          {/* Experience */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#666] self-start pt-1 mt-4 md:mt-6">
            experience
          </p>
          <div className="space-y-0 mt-4 md:mt-6">
            {work.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3"
              >
                <img
                  src={item.logoSrc}
                  alt={item.company}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-cover flex-shrink-0 bg-[#1a1a1a]"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.role}
                    </span>
                    <span className="text-sm sm:text-base text-[#666]">
                      @ {item.company}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555] mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs text-[#444] whitespace-nowrap flex-shrink-0 hidden sm:block">
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
          className="text-xs sm:text-sm text-[#555] hover:text-white transition-colors duration-150 underline underline-offset-4 decoration-[#333]"
        >
          github
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm text-[#555] hover:text-white transition-colors duration-150 underline underline-offset-4 decoration-[#333]"
        >
          linkedin
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-xs sm:text-sm text-[#555] hover:text-white transition-colors duration-150 underline underline-offset-4 decoration-[#333]"
        >
          email
        </a>
      </footer>
    </div>
  );
};

export default App;
