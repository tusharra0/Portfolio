import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import FlymingosLogo from './assets/logos/Flymingos.png';
import GoogleDSCLogo from './assets/logos/GoogleStudentClub.jpg';
import WealthSeedLogo from './assets/logos/Wealthseed.jpg';
import UofTLogo from './assets/logos/uoftailogo.jpg';

const App = () => {
  const profile = {
    name: "Tushar Rao",
    title: "Software Engineer @ UofT",
    bio: "Computer Science & Mathematics student at the University of Toronto, focused on backend engineering, system design, and building scalable infrastructure.",
    email: "tusharpatangemohan@gmail.com",
    github: "https://github.com/tusharra0",
    linkedin: "https://linkedin.com/in/tusharra0"
  };

  const experience = [
    {
      company: "Flymingos",
      role: "Software Engineer Intern",
      period: "May 2025 – Aug 2025",
      logo: (
        <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 overflow-hidden flex items-center justify-center">
          <img src={FlymingosLogo} alt="Flymingos logo" className="w-full h-full object-cover" />
        </div>
      ),
      description: "Built backend systems for a B2B marketplace that matchmakes international buyers and sellers, focusing on scalable APIs, async processing, and performance optimization."
    },
    {
      company: "WealthSeed",
      role: "Software Engineer Intern",
      period: "Jan 2025 – Apr 2025",
      logo: (
        <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 overflow-hidden flex items-center justify-center">
          <img src={WealthSeedLogo} alt="WealthSeed logo" className="w-full h-full object-cover" />
        </div>
      ),
      description: "Built financial education features using Next.js and integrated LangChain RAG chatbots, automating support for 300+ active users."
    },
    {
      company: "Google DSC",
      role: "Software Engineer",
      period: "Jan 2025 – Apr 2025",
      logo: (
        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 overflow-hidden flex items-center justify-center">
          <img src={GoogleDSCLogo} alt="Google Developer Student Clubs logo" className="w-full h-full object-cover" />
        </div>
      ),
      description: "Collaborated on an ML-powered stock trading simulator, training LSTM and RNN models for price forecasting and integrating them into a full-stack web application."
    },
    {
      company: "UofT AI",
      role: "Web Developer",
      period: "Sep 2024 – Dec 2024",
      logo: (
        <div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-200 overflow-hidden flex items-center justify-center">
          <img src={UofTLogo} alt="UofT AI logo" className="w-full h-full object-cover" />
        </div>
      ),
      description: "Developed responsive web applications using React and Chakra UI. Implemented CI/CD pipelines and improved accessibility compliance."
    }
  ];

  const projects = [
    {
      title: "Fault Tolerant Order System",
      tech: "Python • FastAPI • RabbitMQ • AWS",
      link: "https://github.com/tusharra0",
      description: "Architected a distributed system with 4 microservices. Implemented retry mechanisms and dead letter queues achieving 99% recovery rate in failure scenarios."
    },
    {
      title: "Distributed Search Engine",
      tech: "Java • Spring Boot • Docker • JMH",
      link: "https://github.com/tusharra0",
      description: "Built a full-text search engine with an inverted index and TF-IDF ranking. Sustained 5k+ queries/sec under 200ms latency."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <main className="max-w-3xl mx-auto px-6 py-24 md:py-40">
        
        {/* Header Section */}
        <section className="mb-32">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-xl mb-10 italic">
            {profile.bio}
          </p>
          <div className="flex gap-8">
            <a href={profile.github} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              Github <ArrowUpRight size={14} />
            </a>
            <a href={profile.linkedin} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              Contact <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        {/* Linear Content Flow */}
        <div className="space-y-32">
          
          {/* Experience Section */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-black mb-12 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-neutral-200"></span>
              Experience
            </h2>
            <div className="space-y-16">
              {experience.map((exp, idx) => (
                <div key={idx} className="flex gap-6 md:gap-10 group">
                  <div className="flex-shrink-0 pt-1">
                    {exp.logo}
                  </div>
                  <div className="flex-grow border-l border-neutral-100 pl-8 group-hover:border-neutral-900 transition-colors duration-500">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold tracking-tight">{exp.company}</h3>
                      <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                    </div>
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">{exp.role}</p>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-black mb-12 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-neutral-200"></span>
              Featured Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative w-full p-10 md:p-12 -mx-8 rounded-[2rem] bg-neutral-50 text-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-black text-white transition-all duration-500 ease-in-out group-hover:bg-white group-hover:text-black">
                      <Cpu size={16} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 ease-in-out group-hover:text-neutral-200">
                      {project.tech}
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-[28px] font-bold tracking-tighter transition-colors duration-500 ease-in-out">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-neutral-600 transition-colors duration-500 ease-in-out group-hover:text-neutral-100 max-w-2xl">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 transition-all duration-500 ease-in-out group-hover:border-white"
                      >
                        Source Code <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-48 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-400 uppercase tracking-[0.4em] font-bold">
          <div className="hover:text-black transition-colors cursor-default">Tushar Rao — 2026</div>
          <div className="flex gap-12">
            <a href={profile.github} className="hover:text-black transition-colors">GH</a>
            <a href={profile.linkedin} className="hover:text-black transition-colors">LI</a>
            <a href={`mailto:${profile.email}`} className="hover:text-black transition-colors">EM</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
