import { motion } from "motion/react";
import { translations, Language } from "../lib/translations";
import ScrollReveal from "./ScrollReveal";

interface StatsProps {
  theme: "dark" | "light";
  language: Language;
}

export default function Stats({ theme, language }: StatsProps) {
  const t = translations[language].stats;

  const stats = [
    {
      value: "1%",
      label: t.top1Label,
      description: t.top1Desc,
    },
    {
      value: "40+",
      label: t.clientsLabel,
      description: t.clientsDesc,
    },
    {
      value: "100%",
      label: t.successLabel,
      description: t.successDesc,
    },
    {
      value: language === "fr" ? "6+ ans" : "6+",
      label: t.craftLabel,
      description: t.craftDesc,
    },
  ];

  return (
    <section className={`transition-colors duration-300 py-20 md:py-28 border-b ${
      theme === "light"
        ? "bg-white text-black border-neutral-150"
        : "bg-[#0d0d0d] text-white border-white/5"
    }`}>
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Category Label */}
        <div className="flex items-center gap-1.5 mb-12">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-sm" />
          <span className={`font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
            theme === "light" ? "text-neutral-500" : "text-neutral-400"
          }`}>
            {t.badge}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex flex-col border-t pt-6 group transition-colors duration-300 ${
                theme === "light" ? "border-neutral-200" : "border-white/5"
              }`}
            >
              {/* Animated hover highlight */}
              <div className="h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 -translate-y-[26px]" />

              <span className={`font-sans font-extrabold text-5xl md:text-6xl tracking-tight mb-4 transition-colors duration-300 ${
                theme === "light" ? "text-neutral-950" : "text-white"
              }`}>
                {stat.value}
              </span>
              <span className={`font-sans font-bold text-sm tracking-wide mb-2 uppercase transition-colors duration-300 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-200"
              }`}>
                {stat.label}
              </span>
              <p className={`font-sans text-[12.5px] leading-relaxed tracking-wide transition-colors duration-300 ${
                theme === "light" ? "text-neutral-500" : "text-neutral-400"
              }`}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
