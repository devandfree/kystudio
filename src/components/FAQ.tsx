import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { translations, getFAQs, Language } from "../lib/translations";

interface FAQProps {
  theme: "dark" | "light";
  language: Language;
}

export default function FAQ({ theme, language }: FAQProps) {
  const t = translations[language].faq;
  const faqs = getFAQs(language);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-24 md:py-32 border-b transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#fcfcfc] text-[#0a0a0a] border-neutral-100"
          : "bg-[#0a0a0a] text-white border-white/5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <div className={`flex items-center gap-1.5 border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
            theme === "light"
              ? "bg-red-100 text-red-600 border-red-200"
              : "bg-red-950/50 text-red-500 border-red-900"
          }`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h2 className={`font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors duration-300 ${
            theme === "light" ? "text-neutral-950" : "text-white"
          }`}>
            {t.title}
          </h2>
          <p className={`font-sans text-sm max-w-xl leading-relaxed transition-colors duration-300 ${
            theme === "light" ? "text-neutral-500" : "text-neutral-400"
          }`}>
            {t.desc}
          </p>
        </div>

        {/* FAQ Accordions Stack */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? theme === "light"
                      ? "bg-white border-red-600 shadow-md shadow-red-950/2"
                      : "bg-[#0d0d0d] border-red-600 shadow-md shadow-red-950/10"
                    : theme === "light"
                      ? "bg-neutral-50 border-neutral-200/60 hover:bg-white hover:border-neutral-300"
                      : "bg-white/5 border-white/5 hover:bg-white/[0.08] hover:border-white/10"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-6 cursor-pointer select-none"
                >
                  <span className={`font-sans font-bold text-base sm:text-lg tracking-tight transition-colors ${
                    theme === "light" ? "text-neutral-900" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Rotating Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`p-2 rounded-full border shrink-0 transition-colors ${
                      isOpen
                        ? theme === "light"
                          ? "bg-red-50 text-red-600 border-red-100"
                          : "bg-red-950/50 text-red-500 border-red-900"
                        : theme === "light"
                          ? "bg-white text-neutral-400 border-neutral-200"
                          : "bg-white/5 text-neutral-400 border-white/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Answer height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 pt-1 border-t text-sm sm:text-base leading-relaxed tracking-wide transition-colors duration-300 ${
                        theme === "light"
                          ? "border-neutral-100 text-neutral-500"
                          : "border-white/5 text-neutral-400"
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
