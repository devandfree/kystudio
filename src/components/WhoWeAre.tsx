import { motion } from "motion/react";
import { ArrowRight, Zap, Sparkles, Cpu, ShieldCheck } from "lucide-react";
import { translations, Language } from "../lib/translations";
import ScrollReveal from "./ScrollReveal";

interface WhoWeAreProps {
  onNavigate: (sectionId: string) => void;
  theme: "dark" | "light";
  language: Language;
}

export default function WhoWeAre({ onNavigate, theme, language }: WhoWeAreProps) {
  const t = translations[language].studio;

  // Agency Presentation Content
  const presentationContent = {
    en: {
      tagline: "WHO WE ARE // KYROS STUDIO",
      title: "Kyros Studio",
      subtitle: "Next-Gen Digital Craftsmanship",
      manifestoTitle: "The Kyros Manifesto",
      manifestoText: "We don't build generic websites. We engineer digital masterpieces that command attention, elevate brand authority, and run at breathtaking speed. By combining advanced React development, custom high-density design, and bulletproof search optimization, we turn standard workspaces into strategic engines of growth. Our studio bridges the gap between sophisticated business analytics and high-art digital creation.",
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
      manifestoText: "Nous ne concevons pas de simples sites web. Nous bâtissons des chefs-d'œuvre numériques qui captivent l'attention, élèvent le statut de votre marque et fonctionnent à une vitesse fulgurante. En mariant le développement React avancé, un design interactif haut de gamme et un SEO millimétré, nous transformons de simples pages en puissants leviers de croissance. Notre studio allie l'analyse stratégique d'entreprise à la création numérique d'élite.",
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
      <ScrollReveal>
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
              {info.ctaBtn}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Agency Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Manifesto Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 rounded-[2rem] p-8 md:p-12 border flex flex-col justify-between transition-colors duration-300 shadow-md ${
              theme === "light"
                ? "bg-white border-neutral-150 text-neutral-900 shadow-neutral-100"
                : "bg-neutral-900/40 border-white/5 text-white shadow-black/10"
            }`}
          >
            <div>
              <span className="text-red-500 font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
                {info.tagline}
              </span>
              
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                {info.title}
              </h3>
              
              <p className={`text-xs md:text-sm tracking-wide mb-8 font-mono ${
                theme === "light" ? "text-neutral-500" : "text-neutral-400"
              }`}>
                // {info.subtitle}
              </p>

              <h4 className={`text-lg md:text-xl font-bold tracking-tight mb-4 ${
                theme === "light" ? "text-neutral-800" : "text-neutral-200"
              }`}>
                {info.manifestoTitle}
              </h4>
              
              <p className={`text-sm md:text-base leading-relaxed tracking-wide ${
                theme === "light" ? "text-neutral-600" : "text-neutral-300"
              }`}>
                {info.manifestoText}
              </p>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className="mt-8 self-start flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-6 py-4 rounded-full transition-all tracking-wider uppercase cursor-pointer shadow-lg shadow-red-900/20 hover:scale-[1.03]"
            >
              <span>{info.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 md:gap-5">
            {info.pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border flex gap-5 items-start transition-all duration-300 hover:scale-[1.01] ${
                    theme === "light"
                      ? "border-neutral-200 bg-white hover:border-red-500/30 hover:shadow-sm hover:shadow-neutral-100"
                      : "border-white/5 bg-neutral-900/20 hover:border-red-500/30 hover:bg-neutral-900/40 hover:shadow-sm hover:shadow-black/20"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm md:text-base font-bold tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className={`text-xs md:text-sm leading-relaxed ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
}
