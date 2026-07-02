import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Language } from "../lib/translations";

interface ClientStripProps {
  theme: "dark" | "light";
  language: Language;
}

export default function ClientStrip({ theme, language }: ClientStripProps) {
  const brands = [
    { name: "Red Bull", icon: "🔴" },
    { name: "Xbox", icon: "🎮" },
    { name: "HubSpot", icon: "📈" },
    { name: "JD Sports", icon: "👟" },
    { name: "Intel", icon: "💾" },
    { name: "Figma", icon: "🎨" },
    { name: "Vercel", icon: "▲" },
    { name: "Stripe", icon: "💳" },
  ];

  // Duplicate to make infinite marquee loop smoothly
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section className={`py-10 overflow-hidden transition-all duration-300 border-y ${
      theme === "light"
        ? "bg-white border-neutral-200"
        : "bg-[#0d0d0d] border-white/5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 justify-between">
        
        {/* Left descriptor */}
        <div className={`flex items-center gap-2.5 shrink-0 transition-colors duration-300 ${
          theme === "light" ? "text-neutral-800" : "text-white"
        }`}>
          <Sparkles className="w-5 h-5 text-red-600 animate-spin" style={{ animationDuration: "6s" }} />
          <span className={`font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
            theme === "light" ? "text-neutral-600" : "text-neutral-400"
          }`}>
            {language === "fr" 
              ? "NOUS AVONS ACCOMPAGNÉ PLUS DE 120 STARTUPS & ENTREPRISES DANS LE MONDE"
              : "WE'VE SUPPORTED 120+ HIGH-GROWTH STARTUPS & ENTERPRISES WORLDWIDE"}
          </span>
        </div>

        {/* Rolling Marquee Banner */}
        <div className="w-full overflow-hidden relative select-none flex items-center">
          {/* Subtle gradient fades on the edge of the marquee */}
          <div className={`absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none transition-colors duration-300 bg-gradient-to-r ${
            theme === "light" ? "from-white to-transparent" : "from-[#0d0d0d] to-transparent"
          }`} />
          <div className={`absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none transition-colors duration-300 bg-gradient-to-l ${
            theme === "light" ? "from-white to-transparent" : "from-[#0d0d0d] to-transparent"
          }`} />

          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 group">
                <span className="text-sm grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  {brand.icon}
                </span>
                <span className={`font-sans font-extrabold text-sm md:text-base tracking-tight transition-colors duration-300 ${
                  theme === "light"
                    ? "text-neutral-500 hover:text-neutral-900"
                    : "text-neutral-500 hover:text-white"
                }`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
