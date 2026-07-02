import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Sparkles, Filter } from "lucide-react";
import { translations, getProjects, Language } from "../lib/translations";
import { Project } from "../types";

interface PortfolioProps {
  theme: "dark" | "light";
  language: Language;
}

export default function Portfolio({ theme, language }: PortfolioProps) {
  const t = translations[language].portfolio;
  const projects = getProjects(language);
  const [filter, setFilter] = useState<string>("");

  // Update default filter when language changes
  useEffect(() => {
    setFilter(language === "fr" ? "Tous" : "All");
  }, [language]);

  const categories = [language === "fr" ? "Tous" : "All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === (language === "fr" ? "Tous" : "All") || filter === ""
      ? projects
      : projects.filter((project) => project.category === filter);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className={`py-24 md:py-32 border-b transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#fcfcfc] text-[#0a0a0a] border-neutral-100"
          : "bg-[#0a0a0a] text-white border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-red-600">
                {t.badge}
              </span>
            </div>
            
            <h2 className={`font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] transition-colors duration-300 ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              {t.title}
            </h2>
          </div>

          {/* Filtering controls (Sleek minimalist pills) */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-neutral-400 mr-2 hidden sm:inline-block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11.5px] font-bold px-4 py-2 rounded-full cursor-pointer transition-all uppercase tracking-wide border ${
                  filter === cat
                    ? theme === "light"
                      ? "bg-neutral-950 text-white border-neutral-950"
                      : "bg-white text-black border-white"
                    : theme === "light"
                      ? "bg-transparent text-neutral-500 border-neutral-200 hover:text-neutral-900 hover:border-neutral-400"
                      : "bg-transparent text-neutral-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`group flex flex-col gap-5 cursor-pointer p-5 rounded-[2.5rem] border transition-all duration-300 ${
                  theme === "light"
                    ? "bg-neutral-50 border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/50"
                    : "bg-white/5 border-white/5 hover:shadow-xl hover:shadow-black/50"
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Thumbnail Layer */}
                <div className="relative aspect-[16/10] rounded-[1.8rem] overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter transition-all duration-750 group-hover:scale-105 group-hover:filter"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle red indicator on hover */}
                  <div className="absolute inset-0 bg-red-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Pill Overlaid */}
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[9px] font-mono tracking-wider font-extrabold uppercase text-white px-3 py-1 rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Text Metadata Panel */}
                <div className="flex flex-col gap-1.5 px-3 pb-2 justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-red-600 font-bold uppercase tracking-wider">
                      // {project.client}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mt-1">
                    <h3 className={`font-sans font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                      theme === "light" ? "text-neutral-950 group-hover:text-red-600" : "text-white group-hover:text-red-500"
                    }`}>
                      {project.title}
                    </h3>
                    <div className={`p-2 rounded-full border transition-all shrink-0 ${
                      theme === "light"
                        ? "bg-white border-neutral-200 text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white"
                        : "bg-white/5 border-white/10 text-white group-hover:bg-white group-hover:text-black"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* CASE STUDY MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            {/* Click backdrop to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)} />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className={`relative w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border transition-colors duration-300 ${
                theme === "light"
                  ? "bg-white text-[#0a0a0a] border-neutral-100"
                  : "bg-[#0d0d0d] text-white border-white/10"
              }`}
            >
              
              {/* Left Column: Visual display */}
              <div className="w-full md:w-1/2 relative bg-neutral-900 aspect-[4/3] md:aspect-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Color overlay matching visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 text-white md:hidden">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-red-400">{selectedProject.client}</span>
                  <h4 className="font-sans font-bold text-lg">{selectedProject.title}</h4>
                </div>
              </div>

              {/* Right Column: Case study details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                
                {/* Exit button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-6 right-6 p-2 rounded-full cursor-pointer transition-colors ${
                    theme === "light"
                      ? "bg-neutral-100 hover:bg-red-50 hover:text-red-600 text-neutral-800"
                      : "bg-white/5 hover:bg-red-950 hover:text-red-500 text-white"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-6">
                  {/* Category & client details */}
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-wider border px-2.5 py-0.8 rounded transition-colors ${
                      theme === "light"
                        ? "bg-red-100 text-red-600 border-red-200"
                        : "bg-red-950/50 text-red-500 border-red-900"
                    }`}>
                      {selectedProject.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase">
                      {t.yearLabel}: {selectedProject.year}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-xs font-bold tracking-wider text-red-600 uppercase">
                      {t.clientStudy} // {selectedProject.client}
                    </span>
                    <h3 className={`font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug transition-colors ${
                      theme === "light" ? "text-neutral-950" : "text-white"
                    }`}>
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className={`font-sans text-sm leading-relaxed tracking-wide transition-colors ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-300"
                  }`}>
                    {selectedProject.description}
                  </p>

                  {/* Core engineering tech stack tags */}
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase font-bold block mb-3">
                      // {language === "fr" ? "TECHNOLOGIES" : "TECH STACK"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] font-bold px-3 py-1 rounded-full border transition-all duration-300 ${
                            theme === "light"
                              ? "text-neutral-800 bg-neutral-100 border-neutral-200"
                              : "text-neutral-200 bg-white/5 border-white/10"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className={`border-t pt-6 mt-8 flex justify-between items-center transition-colors ${
                  theme === "light" ? "border-neutral-100" : "border-white/5"
                }`}>
                  <div className="flex items-center gap-2 text-neutral-400 font-mono text-[10px]">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" />
                    <span>{t.lighthouse}</span>
                  </div>
                  
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      // Slight delay for smooth scrolling context
                      setTimeout(() => {
                        const contactSec = document.getElementById("contact");
                        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                      }, 250);
                    }}
                    className={`flex items-center gap-1.5 text-xs font-bold tracking-wider transition-colors ${
                      theme === "light" ? "text-neutral-950 hover:text-red-600" : "text-white hover:text-red-500"
                    }`}
                  >
                    <span>{t.similarBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
