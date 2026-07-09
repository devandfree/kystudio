import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientStrip from "./components/ClientStrip";
import WhoWeAre from "./components/WhoWeAre";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Estimator from "./components/Estimator";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { Language } from "./lib/translations";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("kyros-theme");
    return (saved as "dark" | "light") || "dark";
  });
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("kyros-lang");
    if (saved === "en" || saved === "fr") return saved;
    return "en";
  });

  // Track scroll depth to update active header navigation dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger bounds

      const sections = ["home", "studio", "services", "portfolio", "estimator", "faq", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme with body/document element for secondary accessibility hooks
  useEffect(() => {
    localStorage.setItem("kyros-theme", theme);
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.style.colorScheme = "light";
    } else {
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    }
  }, [theme]);

  // Sync language with localStorage
  useEffect(() => {
    localStorage.setItem("kyros-lang", language);
    // Optionally set lang attribute on HTML for SEO and accessibility
    document.documentElement.lang = language;
  }, [language]);

  // Smooth jump scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 selection:bg-red-600 selection:text-white ${
      theme === "light" ? "bg-[#fcfcfc] text-neutral-900" : "bg-[#0a0a0a] text-white"
    }`}>
      {/* Premium custom mouse cursor */}
      <CustomCursor theme={theme} />

      {/* Sticky Premium Header with Theme & Language Toggle */}
      <Header 
        onNavigate={scrollToSection} 
        activeSection={activeSection} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Landing */}
        <Hero onNavigate={scrollToSection} theme={theme} language={language} />

        {/* Client infinite marquee */}
        <ClientStrip theme={theme} language={language} />

        {/* Studio / Who We Are */}
        <WhoWeAre onNavigate={scrollToSection} theme={theme} language={language} />

        {/* Key business stats metrics */}
        <Stats theme={theme} language={language} />

        {/* Interactive Capabilities / Services */}
        <Services theme={theme} language={language} />

        {/* Project Showcases */}
        <Portfolio theme={theme} language={language} />

        {/* Cost Estimator Strategy Tool */}
        <Estimator theme={theme} language={language} />

        {/* FAQ list */}
        <FAQ theme={theme} language={language} />

        {/* Contact briefs intake */}
        <Contact theme={theme} language={language} />
      </main>

      {/* Footer layout */}
      <Footer onNavigate={scrollToSection} theme={theme} language={language} />
    </div>
  );
}
