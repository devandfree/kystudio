import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, Code, ShoppingCart, Search, Check, Sparkles } from "lucide-react";
import { translations, getServices, Language } from "../lib/translations";

interface ServicesProps {
  theme: "dark" | "light";
  language: Language;
}

export default function Services({ theme, language }: ServicesProps) {
  const t = translations[language].services;
  const services = getServices(language);
  const [activeTab, setActiveTab] = useState<string>("design");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return <Monitor className="w-5 h-5 text-red-500" />;
      case "Code":
        return <Code className="w-5 h-5 text-red-500" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5 text-red-500" />;
      case "Search":
        return <Search className="w-5 h-5 text-red-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-red-500" />;
    }
  };

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section
      id="services"
      className={`py-24 md:py-32 border-b transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#fcfcfc] text-neutral-950 border-neutral-200/50"
          : "bg-[#0a0a0a] text-white border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-red-500">
                {t.badge}
              </span>
            </div>
            
            <h2 className={`font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight flex items-center gap-4 transition-colors duration-300 ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              {t.title}
              <span className={`text-sm border font-mono font-normal px-2.5 py-1 rounded-md hidden sm:inline-block transition-colors duration-300 ${
                theme === "light"
                  ? "bg-neutral-100 border-neutral-200 text-neutral-600"
                  : "bg-white/5 border-white/10 text-neutral-400"
              }`}>
                {t.capabilitiesBadge}
              </span>
            </h2>
          </div>

          <div className={`lg:col-span-6 lg:pl-12 font-sans text-sm md:text-base leading-relaxed transition-colors duration-300 ${
            theme === "light" ? "text-neutral-600" : "text-neutral-400"
          }`}>
            {t.intro}
          </div>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer flex gap-5 items-start ${
                    isActive
                      ? theme === "light"
                        ? "bg-white border-red-600 shadow-sm shadow-red-100/30"
                        : "bg-white/5 border-red-600 shadow-sm shadow-red-950/10"
                      : theme === "light"
                        ? "bg-transparent border-neutral-200/60 hover:border-neutral-300 hover:bg-neutral-50"
                        : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? theme === "light"
                        ? "bg-red-50 border border-red-200"
                        : "bg-red-950/50 border border-red-500/30"
                      : theme === "light"
                        ? "bg-neutral-100 border-neutral-200/60"
                        : "bg-white/5 border-white/5"
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <span className={`font-sans font-bold text-base md:text-lg tracking-tight transition-colors ${
                      isActive
                        ? theme === "light" ? "text-neutral-950" : "text-white"
                        : theme === "light" ? "text-neutral-700" : "text-neutral-300"
                    }`}>
                      {service.title}
                    </span>
                    <span className={`font-sans text-xs line-clamp-1 transition-colors ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {service.shortDesc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Panel */}
          <div className={`lg:col-span-7 rounded-3xl p-8 md:p-12 relative min-h-[480px] flex flex-col justify-between overflow-hidden shadow-md border transition-all duration-300 ${
            theme === "light"
              ? "bg-white border-neutral-200/60 shadow-neutral-100/30"
              : "bg-[#0d0d0d] border-white/5 shadow-black/20"
          }`}>
            {/* Ambient neon backdrop (Only on dark theme) */}
            {theme === "dark" && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl" />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col h-full z-10 justify-between"
              >
                <div>
                  {/* Service Label */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded border transition-colors ${
                      theme === "light"
                        ? "bg-red-50 text-red-600 border-red-200"
                        : "bg-red-950 text-red-500 border-red-900"
                    }`}>
                      {t.specialtyBadge}
                    </span>
                  </div>

                  {/* Title & Long Description */}
                  <h3 className={`font-sans font-extrabold text-2xl sm:text-3xl tracking-tight mb-6 transition-colors duration-300 ${
                    theme === "light" ? "text-neutral-950" : "text-white"
                  }`}>
                    {activeService.title}
                  </h3>
                  <p className={`font-sans text-sm md:text-base leading-relaxed tracking-wide mb-8 transition-colors duration-300 ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}>
                    {activeService.longDesc}
                  </p>

                  {/* Deliverables List (Editorial Design style) */}
                  <div className="mb-8">
                    <span className={`font-mono text-[10px] tracking-widest uppercase block mb-4 transition-colors ${
                      theme === "light" ? "text-neutral-400" : "text-neutral-500"
                    }`}>
                      // {t.coreDeliverables}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeService.deliverables.map((item, index) => (
                        <div key={index} className={`flex items-center gap-2.5 text-xs font-semibold transition-colors duration-300 ${
                          theme === "light" ? "text-neutral-700" : "text-neutral-300"
                        }`}>
                          <Check className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Features row */}
                <div className={`border-t pt-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 transition-colors duration-300 ${
                  theme === "light" ? "border-neutral-200/60" : "border-white/5"
                }`}>
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-red-400 uppercase font-bold">// 0{idx + 1}</span>
                      <span className={`text-xs leading-snug transition-colors duration-300 ${
                        theme === "light" ? "text-neutral-600" : "text-neutral-400"
                      }`}>{feature}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
