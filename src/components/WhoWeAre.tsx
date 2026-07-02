import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Zap, Sparkles, Cpu, ShieldCheck } from "lucide-react";
import { translations, getTeam, Language } from "../lib/translations";

interface WhoWeAreProps {
  onNavigate: (sectionId: string) => void;
  theme: "dark" | "light";
  language: Language;
}

export default function WhoWeAre({ onNavigate, theme, language }: WhoWeAreProps) {
  const t = translations[language].studio;
  const team = getTeam(language);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  // Agency Presentation Content
  const presentationContent = {
    en: {
      tagline: "WHO WE ARE // KYROS STUDIO",
      title: "Kyros Studio",
      subtitle: "Next-Gen Digital Craftsmanship",
      manifestoTitle: "The Kyros Manifesto",
      manifestoText: "We don't build generic websites. We engineer digital masterpieces that command attention, elevate brand authority, and run at breathtaking speed. By combining advanced React development, custom high-density design, and bulletproof search optimization, we turn standard workspaces into strategic engines of growth. Led by Steve Emane, our studio bridges the gap between sophisticated business analytics and high-art digital creation.",
      pillars: [
        {
          title: "Relentless Speed",
          desc: "Scoring 100/100 on Google Core Web Vitals. Fast loading means high retention and conversion.",
          icon: Zap
        },
        {
          title: "Elite Aesthetics",
          desc: "Custom Figma prototypes that translate your brand’s prestige into immersive interfaces.",
          icon: Sparkles
        },
        {
          title: "Advanced Full-Stack",
          desc: "Seamless APIs, state management, and robust database architecture without boilerplate bloat.",
          icon: Cpu
        },
        {
          title: "Business-First Strategy",
          desc: "Deep market analysis ensures every line of code serves a tangible business goal.",
          icon: ShieldCheck
        }
      ],
      ctaBtn: "Let's Build Together"
    },
    fr: {
      tagline: "QUI NOUS SOMMES // KYROS STUDIO",
      title: "Kyros Studio",
      subtitle: "L'Artisanat Digital Nouvelle Génération",
      manifestoTitle: "Le Manifeste Kyros",
      manifestoText: "Nous ne concevons pas de simples sites web. Nous bâtissons des chefs-d'œuvre numériques qui captivent l'attention, élèvent le statut de votre marque et fonctionnent à une vitesse fulgurante. En mariant le développement React avancé, un design interactif haut de gamme et un SEO millimétré, nous transformons de simples pages en puissants leviers de croissance. Sous la direction de Steve Emane, notre studio allie l'analyse stratégique d'entreprise à la création numérique d'élite.",
      pillars: [
        {
          title: "Vitesse Fulgurante",
          desc: "Des performances maximales (100/100 Lighthouse) pour maximiser le taux de conversion et asseoir votre SEO.",
          icon: Zap
        },
        {
          title: "Esthétique d'Élite",
          desc: "Des maquettes Figma haut de gamme conçues pixel par pixel pour retranscrire le prestige de votre marque.",
          icon: Sparkles
        },
        {
          title: "Expertise Full-Stack",
          desc: "Intégrations d'API fluides, gestion d'état avancée et logique serveur sans dépendances superflues.",
          icon: Cpu
        },
        {
          title: "Analyse Stratégique",
          desc: "Une vision orientée business qui garantit que chaque fonctionnalité répond à un objectif concret.",
          icon: ShieldCheck
        }
      ],
      ctaBtn: "Créons Ensemble"
    }
  };

  const info = presentationContent[language] || presentationContent["en"];

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
            onClick={() => setIsPresentationOpen(true)}
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

      {/* Agency Presentation Overlay Modal */}
      <AnimatePresence>
        {isPresentationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsPresentationOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] rounded-[2rem] p-6 md:p-10 border overflow-y-auto shadow-2xl ${
                theme === "light"
                  ? "bg-[#fcfcfc] text-neutral-900 border-neutral-200 shadow-neutral-900/10"
                  : "bg-[#0c0c0c] text-white border-white/10 shadow-black/80"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPresentationOpen(false)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-all cursor-pointer ${
                  theme === "light"
                    ? "border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    : "border-white/10 hover:bg-white/5 text-neutral-400 hover:text-white"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tagline */}
              <span className="text-red-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                {info.tagline}
              </span>

              {/* Title & Subtitle */}
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-1">
                {info.title}
              </h2>
              <p className={`text-sm md:text-lg tracking-wide mb-8 font-mono ${
                theme === "light" ? "text-neutral-500" : "text-neutral-400"
              }`}>
                // {info.subtitle}
              </p>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                {/* Manifesto (Left Column) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-lg md:text-xl font-bold tracking-tight mb-4 ${
                      theme === "light" ? "text-neutral-800" : "text-neutral-200"
                    }`}>
                      {info.manifestoTitle}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed tracking-wide ${
                      theme === "light" ? "text-neutral-600" : "text-neutral-300"
                    }`}>
                      {info.manifestoText}
                    </p>
                  </div>

                  {/* Call To Action button */}
                  <button
                    onClick={() => {
                      setIsPresentationOpen(false);
                      setTimeout(() => onNavigate("contact"), 300);
                    }}
                    className="mt-8 self-start flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-6 py-4 rounded-full transition-all tracking-wider uppercase cursor-pointer shadow-lg shadow-red-900/20 hover:scale-[1.03]"
                  >
                    <span>{info.ctaBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Pillars (Right Column) */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  {info.pillars.map((pillar, idx) => {
                    const IconComponent = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border flex gap-4 items-start transition-all ${
                          theme === "light"
                            ? "border-neutral-200/70 bg-neutral-50 hover:bg-neutral-100/50"
                            : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="p-2 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-xs md:text-sm font-bold tracking-tight">
                            {pillar.title}
                          </h4>
                          <p className={`text-[11px] md:text-xs leading-relaxed ${
                            theme === "light" ? "text-neutral-500" : "text-neutral-400"
                          }`}>
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
