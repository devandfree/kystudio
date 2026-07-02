import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon, Globe } from "lucide-react";
import { translations, Language } from "../lib/translations";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export default function Header({ 
  onNavigate, 
  activeSection, 
  theme, 
  onToggleTheme, 
  language, 
  onToggleLanguage 
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[language].header;

  const navItems = [
    { label: t.home, id: "home" },
    { label: t.studio, id: "studio" },
    { label: t.services, id: "services" },
    { label: t.portfolio, id: "portfolio" },
    { label: t.estimator, id: "estimator" },
    { label: t.faq, id: "faq" },
    { label: t.contact, id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? theme === "light"
              ? "bg-[#fcfcfc]/90 backdrop-blur-md border-b border-neutral-200/50 py-4 shadow-sm"
              : "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleItemClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Kyros Grid-dot Logo */}
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              <motion.div
                className="w-2 h-2 rounded-full bg-red-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-orange-500"
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-red-800"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-orange-400 transition-colors"
              />
            </div>
            <span className={`font-sans font-bold text-lg tracking-tight flex items-center transition-colors duration-300 ${
              theme === "light" ? "text-neutral-950" : "text-white"
            }`}>
              Kyros<span className="text-red-500 font-light ml-0.5">Studio</span>
              <span className={`text-[9px] font-mono border px-1 rounded ml-1.5 py-0.2 tracking-widest transition-colors duration-300 ${
                theme === "light" ? "border-neutral-200 text-neutral-500" : "border-white/20 text-neutral-400"
              }`}>
                ®
              </span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`font-sans text-[13px] font-medium tracking-wide transition-all cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? theme === "light"
                      ? "text-neutral-950"
                      : "text-white"
                    : theme === "light"
                      ? "text-neutral-500 hover:text-neutral-900"
                      : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
              {item.label}
              {item.id === "estimator" && (
                <span className="absolute -top-3.5 -right-5 bg-red-600 text-white text-[8px] font-bold px-1 py-0.2 rounded-full scale-90">
                  {language === "fr" ? "NOUVEAU" : "NEW"}
                </span>
              )}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA, Theme Toggle, Language Toggle & Mobile Toggle */}
          <div className="flex items-center gap-3">
             {/* Language Toggle Button */}
            <button
              onClick={onToggleLanguage}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center font-mono text-[10px] font-extrabold w-10 h-10 tracking-tighter ${
                theme === "light"
                  ? "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200 shadow-sm"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              }`}
              title={t.toggleLang}
              id="language-toggle-btn"
            >
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center ${
                theme === "light"
                  ? "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200 shadow-sm"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              }`}
              title={t.toggleTheme}
              id="theme-toggle-btn"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Book a Consult button */}
            <button
              onClick={() => handleItemClick("contact")}
              className={`hidden sm:flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full transition-all tracking-wide cursor-pointer shadow-lg ${
                theme === "light"
                  ? "bg-neutral-950 text-white hover:bg-neutral-800 shadow-neutral-200"
                  : "bg-white text-black hover:bg-neutral-200 hover:shadow-white/5"
              }`}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden border border-black/10 bg-neutral-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40&q=80"
                  alt="Consultant Avatar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>{t.bookBtn}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${theme === "light" ? "text-white" : "text-black"}`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-1 cursor-pointer transition-colors ${
                theme === "light" ? "text-neutral-950 hover:text-neutral-800" : "text-white hover:text-neutral-300"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`fixed inset-0 top-[68px] z-45 md:hidden flex flex-col p-8 backdrop-blur-lg border-b transition-colors duration-300 ${
              theme === "light"
                ? "bg-[#fcfcfc]/95 border-neutral-200/50 text-neutral-950"
                : "bg-[#0a0a0a]/95 border-white/5 text-white"
            }`}
          >
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left font-sans text-2xl font-semibold tracking-tight transition-colors py-2 ${
                    activeSection === item.id
                      ? "text-red-500"
                      : theme === "light"
                        ? "text-neutral-900 hover:text-neutral-600"
                        : "text-white hover:text-neutral-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.label}</span>
                    {item.id === "estimator" && (
                      <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {language === "fr" ? "Interactif" : "Interactive"}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-auto mb-16 flex flex-col gap-4">
              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  onToggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-center gap-2 text-xs font-bold py-3 px-6 rounded-full border transition-all ${
                  theme === "light"
                    ? "bg-neutral-100 border-neutral-200 text-neutral-800"
                    : "bg-white/5 border-white/10 text-white"
                }`}
              >
                <Globe className="w-4 h-4 text-red-500" />
                <span>{t.toggleLang}</span>
              </button>

              <button
                onClick={() => handleItemClick("contact")}
                className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-3.5 px-6 rounded-full transition-all ${
                  theme === "light"
                    ? "bg-neutral-950 text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                <span>{t.bookBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
