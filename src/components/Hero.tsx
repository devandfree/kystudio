import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { translations, Language } from "../lib/translations";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  theme: "dark" | "light";
  language: Language;
}

export default function Hero({ onNavigate, theme, language }: HeroProps) {
  const t = translations[language].hero;

  // Stagger variants for smooth entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        theme === "light" ? "bg-[#f4f5f6]" : "bg-[#020202]"
      }`}
    >
      {/* Cinematic Studio Background Image with rich gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_background_1782997231058.jpg"
          alt="Kyros Studio Workspace"
          className={`w-full h-full object-cover filter scale-105 pointer-events-none transition-all duration-300 ${
            theme === "light" ? "opacity-[0.12] grayscale" : "opacity-35"
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Deep shadows & crimson glow mask */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === "light"
            ? "bg-gradient-to-t from-[#fcfcfc] via-[#f4f5f6]/85 to-[#f4f5f6]"
            : "bg-gradient-to-t from-[#0a0a0a] via-[#020202]/70 to-[#020202]"
        }`} />
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
          theme === "light" ? "bg-red-200/10" : "bg-red-900/10"
        }`} />
        <div className={`absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse transition-colors duration-300 ${
          theme === "light" ? "bg-red-300/5" : "bg-red-600/5"
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 mt-8 flex flex-col justify-between min-h-[75vh]">
        
        {/* Top/Main Hero Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Next-Gen Agency Capsule Badge */}
          <motion.div variants={itemVariants} className="flex items-center">
            <span className={`flex items-center gap-2 border rounded-full px-4 py-1.5 text-[10px] md:text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
              theme === "light"
                ? "bg-neutral-200/40 border-neutral-300 text-neutral-800"
                : "bg-white/5 border-white/10 text-red-500"
            }`}>
              <span className="w-1.5 h-1.5 rounded-sm bg-red-600 animate-pulse" />
              {t.badge}
            </span>
          </motion.div>

          {/* Main Hero Header Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Column: Huge typography */}
            <div className="lg:col-span-8">
              <motion.h1
                variants={itemVariants}
                className={`font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] transition-colors duration-300 ${
                  theme === "light" ? "text-neutral-950" : "text-white"
                }`}
              >
                {t.title1}
                <br />
                <span className={`text-glow bg-clip-text text-transparent bg-gradient-to-r transition-colors duration-300 ${
                  theme === "light"
                    ? "from-neutral-950 via-neutral-800 to-neutral-600"
                    : "from-white via-neutral-100 to-neutral-400"
                }`}>
                  {t.title2}
                </span>
                <br />
                {t.title3}
              </motion.h1>
            </div>

            {/* Right Column: Brief, elegant studio positioning & actions */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-6">
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <span className="text-red-500 font-mono text-[11px] tracking-widest uppercase font-semibold">
                  {t.tagline}
                </span>
                <p className={`font-sans text-sm md:text-base leading-relaxed tracking-wide transition-colors duration-300 ${
                  theme === "light" ? "text-neutral-600" : "text-neutral-300"
                }`}>
                  {t.desc}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 items-center"
              >
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all tracking-wide cursor-pointer shadow-lg shadow-red-900/20 hover:scale-105"
                >
                  <span>{t.viewProjects}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className={`flex items-center gap-2 text-xs font-bold px-6 py-3.5 rounded-full transition-all tracking-wide cursor-pointer hover:scale-105 ${
                    theme === "light"
                      ? "bg-neutral-950 text-white hover:bg-neutral-800"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`}
                >
                  <span>{t.reachOut}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Bottom indicators - row align */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={`border-t pt-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-colors duration-300 ${
            theme === "light" ? "border-neutral-200/60" : "border-white/5"
          }`}
        >
          {[
            { tag: t.tagDefine, desc: t.tagDefineDesc },
            { tag: t.tagDesign, desc: t.tagDesignDesc },
            { tag: t.tagDev, desc: t.tagDevDesc },
            { tag: t.tagDeploy, desc: t.tagDeployDesc },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 group cursor-pointer border-l pl-4 hover:border-red-600 transition-all duration-300 ${
                theme === "light" ? "border-neutral-200/60" : "border-white/5"
              }`}
            >
              <span className={`text-xs font-bold transition-colors ${
                theme === "light"
                  ? "text-neutral-500 group-hover:text-neutral-950"
                  : "text-neutral-400 group-hover:text-white"
              }`}>
                {item.tag}
              </span>
              <span className={`text-[11px] transition-colors ${
                theme === "light"
                  ? "text-neutral-400 group-hover:text-neutral-600"
                  : "text-neutral-500 group-hover:text-neutral-400"
              }`}>
                {item.desc}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
