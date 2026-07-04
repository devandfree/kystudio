import React, { useState } from "react";
import { ArrowUpRight, X, Scale, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { translations, Language } from "../lib/translations";

interface FooterProps {
  theme: "dark" | "light";
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ theme, language, onNavigate }: FooterProps) {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<"legal" | "privacy" | null>(null);

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
          </div>

          <div className="flex gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveModal("legal");
              }}
              className={`cursor-pointer transition-colors ${theme === "light" ? "hover:text-neutral-900" : "hover:text-neutral-300"}`}
            >
              {language === "fr" ? "Mentions Légales" : "Legal Notice"}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveModal("privacy");
              }}
              className={`cursor-pointer transition-colors ${theme === "light" ? "hover:text-neutral-900" : "hover:text-neutral-300"}`}
            >
              {language === "fr" ? "Confidentialité" : "Privacy Policy"}
            </button>
          </div>
        </div>

      </div>

      {/* Legal & Privacy Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.45 }}
              className={`relative w-full max-w-2xl max-h-[85vh] rounded-[2rem] p-6 md:p-10 border overflow-y-auto shadow-md transition-colors duration-300 ${
                theme === "light"
                  ? "bg-[#fcfcfc] text-neutral-900 border-neutral-200/80 shadow-neutral-900/5"
                  : "bg-[#0d0d0d] text-white border-white/5 shadow-black/40"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-all cursor-pointer ${
                  theme === "light"
                    ? "border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    : "border-white/10 hover:bg-white/5 text-neutral-400 hover:text-white"
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              {activeModal === "legal" ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase font-bold block mb-0.5">
                        // compliance
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight leading-none">
                        {language === "fr" ? "Mentions Légales" : "Legal Notice"}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6 text-xs md:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 01. {language === "fr" ? "ÉDITEUR DU SITE" : "SITE EDITOR"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Ce site est édité par <strong>Kyros Studio</strong>, représenté par Steve Emane en sa qualité de Directeur de la publication et Product Builder principal. Pour toute question, demande de collaboration ou signalement, veuillez nous écrire directement à : <a href="mailto:steve.emane97@gmail.com" className="text-red-500 hover:underline">steve.emane97@gmail.com</a>.
                          </>
                        ) : (
                          <>
                            This website is published by <strong>Kyros Studio</strong>, represented by Steve Emane as Lead Product Builder and Publishing Director. For any enquiries or administrative notices, please contact us directly at: <a href="mailto:steve.emane97@gmail.com" className="text-red-500 hover:underline">steve.emane97@gmail.com</a>.
                          </>
                        )}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 02. {language === "fr" ? "HÉBERGEMENT DU SITE" : "HOSTING SERVICE"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Le site internet est hébergé de manière sécurisée en Europe par la société <strong>Google Cloud Platform</strong> (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande). L'infrastructure moderne garantit une disponibilité maximale et une sécurité d'accès de premier ordre.
                          </>
                        ) : (
                          <>
                            This website is securely hosted within Europe on <strong>Google Cloud Platform</strong> cloud infrastructure (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland), ensuring global performance, sub-100ms load times, and robust server availability.
                          </>
                        )}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 03. {language === "fr" ? "PROPRIÉTÉ INTELLECTUELLE" : "INTELLECTUAL PROPERTY"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Tous les éléments constitutifs de ce site (charte graphique, animations interactives, codes sources, design bento, textes et typographies) sont la propriété exclusive de Kyros Studio. Toute reproduction, représentation, modification ou adaptation totale ou partielle de ces éléments sans accord préalable écrit est interdite.
                          </>
                        ) : (
                          <>
                            All elements of this digital experience (including custom design systems, motion layouts, custom code structures, copywriting, and assets) are the sole intellectual property of Kyros Studio. Any unauthorized duplication, reverse engineering, or redistribution is strictly prohibited under international copyright laws.
                          </>
                        )}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 04. {language === "fr" ? "COOKIES ET STOCKAGE" : "COOKIES & STORAGE"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Kyros Studio respecte la sobriété numérique. Nous n'utilisons aucun cookie publicitaire ni traceur invasif de tierces parties. Seul le stockage local technique (localStorage) est utilisé sur votre navigateur afin de retenir vos préférences d'utilisation de l'interface (thème sombre/clair et langue d'affichage).
                          </>
                        ) : (
                          <>
                            Kyros Studio operates with a focus on data minimalism. We do not set third-party tracking cookies. The application solely uses standard technical local storage (localStorage) in your browser to save your visual workspace options (dark/light theme preference and selected language).
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase font-bold block mb-0.5">
                        // security
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight leading-none">
                        {language === "fr" ? "Confidentialité" : "Privacy Policy"}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6 text-xs md:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 01. {language === "fr" ? "DONNÉES COLLECTÉES" : "COLLECTED DATA"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Lorsque vous soumettez une demande via notre estimateur de budget ou notre formulaire d'admission directe, nous recueillons uniquement les informations professionnelles requises : votre nom complet, votre adresse e-mail professionnelle, votre budget estimé, ainsi que la description facultative de votre projet.
                          </>
                        ) : (
                          <>
                            When submitting a request through our dynamic budget estimator or direct contact forms, we strictly collect only the essential business metadata required to establish contact: your full name, professional email address, project tier, and your brief outline description.
                          </>
                        )}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 02. {language === "fr" ? "UTILISATION DE VOS DONNÉES" : "USE OF YOUR DATA"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Vos informations ne sont jamais revendues, échangées ou partagées avec des tiers. Elles servent exclusivement à étudier la faisabilité technique de votre projet, vous fournir une estimation tarifaire affinée et organiser un appel stratégique gratuit pour définir votre futur produit digital.
                          </>
                        ) : (
                          <>
                            We never sell, trade, or distribute your information to third-party brokers. Collected fields are processed solely to analyze your technical requirements, output fine-tuned project estimates, and schedule your free digital product strategy video-consultation.
                          </>
                        )}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 03. {language === "fr" ? "SÉCURITÉ & CONSERVATION" : "SECURITY & RETENTION"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Nous mettons en œuvre des protocoles de chiffrement et de stockage de pointe pour garantir que vos détails restent confidentiels. Vos données d'estimation ou de contact sont stockées de façon sécurisée pendant une durée maximale de 3 ans après notre dernier échange commercial avant d'être purgées.
                          </>
                        ) : (
                          <>
                            We use industry-grade transmission encryption to keep your project briefs fully confidential. Your submission parameters and records are stored securely and automatically pruned after a maximum of 3 years of business inactivity.
                          </>
                        )}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-bold uppercase tracking-wide text-[11px] mb-2 font-mono ${
                        theme === "light" ? "text-neutral-900" : "text-neutral-200"
                      }`}>
                        // 04. {language === "fr" ? "VOS DROITS (RGPD)" : "YOUR RIGHTS (GDPR)"}
                      </h4>
                      <p>
                        {language === "fr" ? (
                          <>
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez à tout moment d'un droit d'accès, de rectification, de portabilité et de suppression totale de vos données de notre système. Pour l'exercer, contactez-nous par e-mail à : <a href="mailto:steve.emane97@gmail.com" className="text-red-500 hover:underline">steve.emane97@gmail.com</a>.
                          </>
                        ) : (
                          <>
                            In strict compliance with the General Data Protection Regulation (GDPR), you retain absolute rights to review, retrieve, correct, or permanently erase your business records from our systems at any time. To trigger these rights, email us directly at: <a href="mailto:steve.emane97@gmail.com" className="text-red-500 hover:underline">steve.emane97@gmail.com</a>.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
