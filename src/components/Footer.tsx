import React from "react";
import { ArrowUpRight } from "lucide-react";
import { translations, Language } from "../lib/translations";

interface FooterProps {
  theme: "dark" | "light";
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ theme, language, onNavigate }: FooterProps) {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className={`py-16 md:py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      theme === "light"
        ? "bg-[#fcfcfc] text-neutral-500 border-neutral-200"
        : "bg-[#050505] text-[#8c8c8c] border-white/5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
          
          {/* Logo Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <button
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <div className="w-2 h-2 rounded-full bg-red-800" />
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
              <span className={`font-sans font-bold text-lg tracking-tight transition-colors ${
                theme === "light" ? "text-neutral-900" : "text-white"
              }`}>
                Kyros<span className="text-red-500 font-light ml-0.5">Studio</span>
              </span>
            </button>
            
            <p className={`font-sans text-xs sm:text-sm leading-relaxed transition-colors ${
              theme === "light" ? "text-neutral-500" : "text-neutral-400"
            } max-w-sm`}>
              {t.desc}
            </p>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className={`font-mono text-[9px] font-bold tracking-widest uppercase transition-colors ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              {t.studio}
            </span>
            <div className="flex flex-col gap-2.5 text-xs">
              <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className={`transition-colors ${
                theme === "light" ? "hover:text-red-600" : "hover:text-white"
              }`}>
                {t.acc}
              </a>
              <a href="#studio" onClick={(e) => handleLinkClick(e, "studio")} className={`transition-colors ${
                theme === "light" ? "hover:text-red-600" : "hover:text-white"
              }`}>
                {t.aprop}
              </a>
              <a href="#services" onClick={(e) => handleLinkClick(e, "services")} className={`transition-colors ${
                theme === "light" ? "hover:text-red-600" : "hover:text-white"
              }`}>
                {t.serv}
              </a>
              <a href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")} className={`transition-colors ${
                theme === "light" ? "hover:text-red-600" : "hover:text-white"
              }`}>
                {t.port}
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <span className={`font-mono text-[9px] font-bold tracking-widest uppercase transition-colors ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              {t.initiatives}
            </span>
            <div className="flex flex-col gap-2.5 text-xs">
              <a href="#estimator" onClick={(e) => handleLinkClick(e, "estimator")} className={`transition-colors flex items-center gap-1.5 ${
                theme === "light" ? "hover:text-red-600 text-neutral-500" : "hover:text-white text-[#8c8c8c]"
              }`}>
                <span>{t.calc}</span>
                <span className={`text-[8px] font-extrabold px-1.5 py-0.2 rounded-full border transition-colors ${
                  theme === "light"
                    ? "bg-red-50 text-red-600 border-red-200"
                    : "bg-red-950 text-red-500 border-red-900"
                }`}>
                  {t.newBadge}
                </span>
              </a>
              <a href="#faq" onClick={(e) => handleLinkClick(e, "faq")} className={`transition-colors ${
                theme === "light" ? "hover:text-red-600" : "hover:text-white"
              }`}>
                {t.faq}
              </a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")} className={`transition-colors ${
                theme === "light" ? "hover:text-red-600" : "hover:text-white"
              }`}>
                {t.cont}
              </a>
            </div>
          </div>

          {/* Connect social links */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className={`font-mono text-[9px] font-bold tracking-widest uppercase transition-colors ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              {t.connect}
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`flex items-center gap-1 transition-colors ${
                theme === "light" ? "hover:text-red-600 text-neutral-500" : "hover:text-white text-[#8c8c8c]"
              }`}>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-600" />
              </a>
              <a href="https://figma.com" target="_blank" rel="noreferrer" className={`flex items-center gap-1 transition-colors ${
                theme === "light" ? "hover:text-red-600 text-neutral-500" : "hover:text-white text-[#8c8c8c]"
              }`}>
                <span>Figma Hub</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-600" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={`flex items-center gap-1 transition-colors ${
                theme === "light" ? "hover:text-red-600 text-neutral-500" : "hover:text-white text-[#8c8c8c]"
              }`}>
                <span>GitHub Dev</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`flex items-center gap-1 transition-colors ${
                theme === "light" ? "hover:text-red-600 text-neutral-500" : "hover:text-white text-[#8c8c8c]"
              }`}>
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className={`border-t pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] transition-colors ${
          theme === "light"
            ? "border-neutral-200 text-neutral-400"
            : "border-white/5 text-neutral-500"
        }`}>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-center sm:text-left">
            <span>© {currentYear} Kyros Studio. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}</span>
            <span>SIRET: 894 102 405 00012 // Code APE: 6201Z</span>
          </div>

          <div className="flex gap-6">
            <a href="#legal" className={`transition-colors ${theme === "light" ? "hover:text-neutral-900" : "hover:text-neutral-300"}`}>{language === "fr" ? "Mentions Légales" : "Legal Notice"}</a>
            <a href="#privacy" className={`transition-colors ${theme === "light" ? "hover:text-neutral-900" : "hover:text-neutral-300"}`}>{language === "fr" ? "Confidentialité" : "Privacy Policy"}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
