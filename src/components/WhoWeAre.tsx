import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { translations, getTeam, Language } from "../lib/translations";

interface WhoWeAreProps {
  onNavigate: (sectionId: string) => void;
  theme: "dark" | "light";
  language: Language;
}

export default function WhoWeAre({ onNavigate, theme, language }: WhoWeAreProps) {
  const t = translations[language].studio;
  const team = getTeam(language);

  return (
    <section
      id="studio"
      className={`py-24 md:py-32 border-b transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#fcfcfc] text-[#0a0a0a] border-neutral-100"
          : "bg-[#0a0a0a] text-white border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-4xl flex flex-col gap-4">
            {/* Red capsule badge */}
            <div className="flex items-center">
              <span className="flex items-center gap-1.5 text-red-600 text-[10px] md:text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                {t.badge}
              </span>
            </div>

            {/* Micro-contrast paragraph */}
            <h2 className={`font-sans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] transition-colors duration-300 ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              {t.title1}
              <span className={theme === "light" ? "text-neutral-300" : "text-neutral-600"}>{t.titleLeaders}</span>
              {t.title2}
              <span className={theme === "light" ? "text-neutral-300" : "text-neutral-600"}>{t.titleIndustries}</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate("contact")}
            className={`flex items-center gap-2 group text-xs font-bold tracking-wider transition-colors cursor-pointer self-start lg:self-end shrink-0 ${
              theme === "light" ? "text-neutral-900 hover:text-red-600" : "text-white hover:text-red-500"
            }`}
          >
            <span className={`border-b-2 pb-1 transition-colors uppercase ${
              theme === "light" ? "border-neutral-900 group-hover:border-red-600" : "border-white group-hover:border-red-500"
            }`}>
              {t.actionBtn}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Dynamic Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: member.delay }}
              className={`group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 shadow-lg ${
                theme === "light" ? "shadow-neutral-200/50" : "shadow-black/50"
              }`}
            >
              {/* Blurred portrait layer */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter group-hover:scale-105 group-hover:blur-[2px]"
                referrerPolicy="no-referrer"
              />

              {/* Tint overlay (matching the original screenshot's artistic overlay colors) */}
              <div className={`absolute inset-0 ${member.colorClass} opacity-80 group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Gradient text protection overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${member.gradientClass} to-transparent opacity-90`} />

              {/* Text metadata */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end h-1/2 z-10">
                <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase mb-1">
                  // {member.role}
                </span>
                <span className="font-sans font-bold text-lg md:text-xl tracking-tight leading-none">
                  {member.name}
                </span>
                
                {/* Micro interactive indicator */}
                <div className="h-0.5 w-0 bg-white group-hover:w-1/3 transition-all duration-500 mt-3 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
