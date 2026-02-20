import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AmazonLogo  from './assets/logos/Amazon.jpg';
import UofTLogo    from './assets/logos/Utoronto_coa.svg';
import GDSCLogo    from './assets/logos/GDSC.jpg';
import UofTAILogo  from './assets/logos/uoftailogo.jpg';

const App = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const profile = {
    email:    "tusharpatangemohan@gmail.com",
    github:   "https://github.com/tusharro0",
    linkedin: "https://linkedin.com/in/tusharra0",
  };

  const work = [
    {
      logoSrc: AmazonLogo,
      company: "Amazon",
      role:    "Software Dev Intern - AI/ML",
      date:    "Summer '26",
      content: "Incoming intern on the AI/ML infrastructure team. Will be working on large-scale distributed systems powering Amazon's machine learning pipelines and model serving infrastructure.",
    },
    {
      logoSrc: UofTLogo,
      company: "UofT",
      role:    "Software Engineer Intern",
      date:    "Summer '25",
      content: "Built scalable backend services for a B2B marketplace platform. Worked closely with cross-functional teams to design RESTful APIs and optimize database performance.",
    },
    {
      logoSrc: GDSCLogo,
      company: "GDSC",
      role:    "Student Software Engineer",
      date:    "Winter '25",
      content: "Collaborated on an ML-powered stock trading simulator. Trained LSTM models for price forecasting and integrated predictions into a full-stack React application.",
    },
    {
      logoSrc: UofTAILogo,
      company: "UofT AI",
      role:    "Web Developer",
      date:    "Fall '25",
      content: "Developed and maintained responsive web applications using React and Chakra UI. Implemented CI/CD pipelines and improved accessibility compliance across the platform.",
    },
  ];

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <div className="min-h-screen selection:bg-[#1a1a1a] selection:text-[#eceae6]">
      <main className="w-full max-w-2xl mx-auto px-8 sm:px-12 lg:px-16 py-6 sm:py-14 lg:py-20">

        {/* Name */}
        <h1 className="text-lg sm:text-2xl font-semibold text-black tracking-tight mb-5 sm:mb-10 lg:mb-14">
          Tushar Rao
        </h1>

        {/* About */}
        <section className="mb-4 sm:mb-7 lg:mb-11">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#999] mb-2 sm:mb-3 lg:mb-5">about</p>
          <p className="text-sm sm:text-base text-[#555] leading-relaxed">
            I'm a Computer Science student at UofT, graduating in June 2027. This summer, I'll be joining Amazon as a Software Dev Intern on the Ring team, working on AI/ML systems.
            <br /><br />
            Interested in gen AI, LLMs, and distributed systems. Feel free to reach out if you'd like to connect.
          </p>
        </section>

        {/* Work */}
        <section className="mb-4 sm:mb-7 lg:mb-11">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#999] mb-2 sm:mb-3 lg:mb-5">work</p>

          <div className="w-full border-t border-[#d8d6d2]">
            {work.map((item, idx) => (
              <div key={idx} className="w-full border-b border-[#d8d6d2]">

                {/* Row */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full grid grid-cols-[1fr_auto] items-center py-2.5 sm:py-3.5 lg:py-4 text-left group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <img
                      src={item.logoSrc}
                      alt={item.company}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover flex-shrink-0 bg-white"
                    />
                    <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">{item.company}</span>
                    <span className="text-sm sm:text-base text-[#777] whitespace-nowrap">{item.role}</span>
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                    <span className="text-[10px] sm:text-xs text-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {item.date}
                    </span>
                    <ChevronDown
                      size={12}
                      className={`text-[#aaa] transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                {/* Dropdown content */}
                <div className={`overflow-hidden transition-all duration-200 ease-out ${openIdx === idx ? 'max-h-40 pb-2.5 sm:pb-4' : 'max-h-0'}`}>
                  <p className="text-xs sm:text-sm text-[#666] leading-relaxed pl-8 sm:pl-10 pr-4">
                    {item.content}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a href={profile.github}   target="_blank" rel="noreferrer" className="text-[10px] sm:text-xs text-[#aaa] hover:text-black transition-colors duration-150">github</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[10px] sm:text-xs text-[#aaa] hover:text-black transition-colors duration-150">linkedin</a>
          <a href={`mailto:${profile.email}`}                         className="text-[10px] sm:text-xs text-[#aaa] hover:text-black transition-colors duration-150">email</a>
        </div>

      </main>
    </div>
  );
};

export default App;
