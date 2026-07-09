import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Check, Sparkles, Send, Coins, Calendar, CheckCircle } from "lucide-react";
import { translations, getEstimatorSteps, Language } from "../lib/translations";
import { EstimatorStep } from "../types";
import ScrollReveal from "./ScrollReveal";

interface EstimatorProps {
  theme: "dark" | "light";
  language: Language;
}

export default function Estimator({ theme, language }: EstimatorProps) {
  const t = translations[language].estimator;
  const steps = getEstimatorSteps(language);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<string>("brand");
  const [selectedScope, setSelectedScope] = useState<string>("small");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", notes: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", privacy: "" });
  const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false);

  // Handle language change reset to avoid mismatch
  useEffect(() => {
    setSelectedFeatures([]);
  }, [language]);

  // Live Price Calculation Logic
  const calculateTotal = () => {
    const typePrice = steps[0].options.find((o) => o.id === selectedType)?.priceWeight || 0;
    const scopePrice = steps[1].options.find((o) => o.id === selectedScope)?.priceWeight || 0;
    const featuresPrice = selectedFeatures.reduce((total, featId) => {
      const option = steps[2].options.find((o) => o.id === featId);
      return total + (option?.priceWeight || 0);
    }, 0);
    const timelineCoeff = steps[3].options.find((o) => o.id === selectedTimeline)?.priceWeight || 1;
    const subtotal = typePrice + scopePrice + featuresPrice;
    return Math.round(subtotal * timelineCoeff);
  };

  const calculateTimelineDays = () => {
    if (language === "fr") {
      switch (selectedTimeline) {
        case "express":
          return "14-21 Jours (Prioritaire)";
        case "flexible":
          return "60-75 Jours (Cadence Progressive)";
        default:
          return "30-45 Jours (Sprints Standards)";
      }
    } else {
      switch (selectedTimeline) {
        case "express":
          return "14-21 Days (Priority Queue)";
        case "flexible":
          return "60-75 Days (Relaxed Cadence)";
        default:
          return "30-45 Days (Standard Sprints)";
      }
    }
  };

  const handleFeatureToggle = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(steps.length);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const errors = { name: "", email: "", privacy: "" };

    if (!contactInfo.name.trim()) {
      errors.name = language === "fr" ? "Le nom est requis" : "Name is required";
      hasError = true;
    }
    if (!contactInfo.email.trim()) {
      errors.email = language === "fr" ? "L'email est requis" : "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      errors.email = language === "fr" ? "Veuillez spécifier un email valide" : "Please specify a valid email";
      hasError = true;
    }
    if (!acceptPrivacy) {
      errors.privacy = t.errorPrivacy;
      hasError = true;
    }

    setFormErrors(errors);

    if (!hasError) {
      setIsSubmitted(true);
    }
  };

  const currentStepData = steps[currentStep];
  const totalPrice = calculateTotal();

  return (
    <section
      id="estimator"
      className={`py-24 md:py-32 border-b relative overflow-hidden transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#fcfcfc] text-[#0a0a0a] border-neutral-100"
          : "bg-[#0c0c0c] text-white border-b border-white/5"
      }`}
    >
      {/* Background visual accents */}
      {theme === "dark" && (
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-red-950/10 rounded-full blur-3xl -translate-x-1/2" />
      )}
      
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-2xl mb-16">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-sm" />
            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-red-500">
              {t.badge}
            </span>
          </div>
          
          <h2 className={`font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none transition-colors duration-300 ${
            theme === "light" ? "text-neutral-950" : "text-white"
          }`}>
            {t.title}
          </h2>
          <p className={`font-sans text-sm md:text-base leading-relaxed tracking-wide transition-colors duration-300 ${
            theme === "light" ? "text-neutral-600" : "text-neutral-400"
          }`}>
            {t.desc}
          </p>
        </div>

        {/* Master Estimator Flex Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: STEP SELECTOR */}
          <div className={`lg:col-span-8 rounded-3xl p-6 md:p-10 border transition-all duration-300 ${
            theme === "light"
              ? "bg-white border-neutral-200/80 shadow-md shadow-neutral-100/40"
              : "bg-[#111] border-white/5 shadow-md shadow-black/20"
          } min-h-[500px] flex flex-col justify-between`}>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                currentStep < steps.length ? (
                  // STANDARD OPTIONS STEP
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full"
                  >
                    {/* Progress tracking & step title */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`font-mono text-[10px] font-bold uppercase transition-colors ${
                        theme === "light" ? "text-red-600" : "text-red-500"
                      }`}>
                        {t.stepLabel.replace("{step}", String(currentStep + 1))}
                      </span>
                      <div className="flex gap-1.5">
                        {steps.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              idx <= currentStep
                                ? "w-6 bg-red-600"
                                : theme === "light" ? "w-2 bg-neutral-200" : "w-2 bg-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className={`font-sans font-extrabold text-xl sm:text-2xl tracking-tight mb-2 transition-colors duration-300 ${
                      theme === "light" ? "text-neutral-950" : "text-white"
                    }`}>
                      {currentStepData.title}
                    </h3>
                    <p className={`font-sans text-xs mb-8 tracking-wide transition-colors duration-300 ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {currentStepData.subtitle}
                    </p>

                    {/* Step Options List */}
                    <div className="grid grid-cols-1 gap-3.5 mb-10">
                      {currentStepData.options.map((option) => {
                        const isSelected =
                          currentStepData.type === "single"
                            ? currentStepData.id === "type"
                              ? selectedType === option.id
                              : currentStepData.id === "scope"
                              ? selectedScope === option.id
                              : selectedTimeline === option.id
                            : selectedFeatures.includes(option.id);

                        return (
                          <button
                            key={option.id}
                            onClick={() => {
                              if (currentStepData.type === "single") {
                                if (currentStepData.id === "type") setSelectedType(option.id);
                                else if (currentStepData.id === "scope") setSelectedScope(option.id);
                                else setSelectedTimeline(option.id);
                              } else {
                                handleFeatureToggle(option.id);
                              }
                            }}
                            className={`w-full text-left p-5 rounded-2xl cursor-pointer transition-all duration-200 border flex justify-between items-center gap-4 ${
                              isSelected
                                ? theme === "light"
                                  ? "bg-red-50/40 border-red-600 shadow-sm shadow-red-100/30"
                                  : "bg-white/5 border-red-600 shadow-sm shadow-red-950/10"
                                : theme === "light"
                                  ? "bg-neutral-50 border-neutral-200/60 hover:border-neutral-300 hover:bg-neutral-100/50"
                                  : "bg-[#161616]/40 border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                            }`}
                          >
                            <div className="flex flex-col gap-1 max-w-[85%]">
                              <span className={`font-sans font-bold text-sm tracking-wide transition-colors ${
                                isSelected
                                  ? theme === "light" ? "text-neutral-950" : "text-white"
                                  : theme === "light" ? "text-neutral-800" : "text-neutral-300"
                              }`}>
                                {option.label}
                              </span>
                              <span className={`font-sans text-[11px] leading-relaxed transition-colors ${
                                theme === "light" ? "text-neutral-500" : "text-neutral-400"
                              }`}>
                                {option.description}
                              </span>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                isSelected
                                  ? "bg-red-600 border-red-600 text-white"
                                  : theme === "light" ? "border-neutral-200 bg-white" : "border-white/10 bg-transparent"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Action Panel */}
                    <div className={`flex justify-between items-center border-t pt-6 mt-auto transition-colors ${
                      theme === "light" ? "border-neutral-200" : "border-white/5"
                    }`}>
                      <button
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                          currentStep === 0
                            ? theme === "light" ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 cursor-not-allowed"
                            : theme === "light" ? "text-neutral-500 hover:text-neutral-950" : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>{t.back}</span>
                      </button>

                      <button
                        onClick={handleNext}
                        className={`flex items-center gap-1.5 text-xs font-bold px-6 py-3.5 rounded-full cursor-pointer transition-all hover:scale-105 uppercase tracking-wider ${
                          theme === "light"
                            ? "bg-neutral-950 text-white hover:bg-neutral-800"
                            : "bg-white text-black hover:bg-neutral-200"
                        }`}
                      >
                        <span>{t.continue}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  // FINAL INTAKE FORM STEP
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-6">
                      <span className={`font-mono text-[10px] font-bold uppercase transition-colors ${
                        theme === "light" ? "text-red-600" : "text-red-500"
                      }`}>
                        {language === "fr" ? "ÉTAPE FINALE" : "FINAL STEP"}
                      </span>
                      <h3 className={`font-sans font-extrabold text-2xl tracking-tight mt-1 transition-colors duration-300 ${
                        theme === "light" ? "text-neutral-950" : "text-white"
                      }`}>
                        {t.finalTitle}
                      </h3>
                      <p className={`font-sans text-xs mt-1 tracking-wide transition-colors duration-300 ${
                        theme === "light" ? "text-neutral-500" : "text-neutral-400"
                      }`}>
                        {t.finalSubtitle}
                      </p>
                    </div>

                    <form onSubmit={handleContactSubmit} className="flex flex-col gap-5 mb-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div className="flex flex-col gap-1.5">
                          <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                            theme === "light" ? "text-neutral-600" : "text-neutral-400"
                          }`}>
                            {t.labelName}
                          </label>
                          <input
                            type="text"
                            placeholder={t.namePlaceholder}
                            value={contactInfo.name}
                            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                            className={`border rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:border-red-600 transition-all duration-300 ${
                              theme === "light"
                                ? "bg-neutral-50 text-neutral-950 placeholder-neutral-400"
                                : "bg-[#161616] text-white placeholder-neutral-500"
                            } ${
                              formErrors.name
                                ? "border-red-500"
                                : theme === "light" ? "border-neutral-200" : "border-white/5"
                            }`}
                          />
                          {formErrors.name && (
                            <span className="text-[10px] text-red-500 font-medium">{formErrors.name}</span>
                          )}
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col gap-1.5">
                          <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                            theme === "light" ? "text-neutral-600" : "text-neutral-400"
                          }`}>
                            {t.labelEmail}
                          </label>
                          <input
                            type="email"
                            placeholder={t.emailPlaceholder}
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                            className={`border rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:border-red-600 transition-all duration-300 ${
                              theme === "light"
                                ? "bg-neutral-50 text-neutral-950 placeholder-neutral-400"
                                : "bg-[#161616] text-white placeholder-neutral-500"
                            } ${
                              formErrors.email
                                ? "border-red-500"
                                : theme === "light" ? "border-neutral-200" : "border-white/5"
                            }`}
                          />
                          {formErrors.email && (
                            <span className="text-[10px] text-red-500 font-medium">{formErrors.email}</span>
                          )}
                        </div>
                      </div>

                      {/* Brief Notes */}
                      <div className="flex flex-col gap-1.5">
                        <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                          theme === "light" ? "text-neutral-600" : "text-neutral-400"
                        }`}>
                          {t.labelNotes}
                        </label>
                        <textarea
                          rows={4}
                          placeholder={t.notesPlaceholder}
                          value={contactInfo.notes}
                          onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                          className={`border rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:border-red-600 transition-all duration-300 resize-none ${
                            theme === "light"
                              ? "bg-neutral-50 text-neutral-950 placeholder-neutral-400 border-neutral-200"
                              : "bg-[#161616] text-white placeholder-neutral-500 border-white/5"
                          }`}
                        />
                      </div>
                      
                      {/* Privacy Policy Checkbox */}
                      <div className="flex flex-col gap-1.5 my-1 text-left">
                        <label className="flex items-start gap-3 cursor-pointer group select-none">
                          <div className="relative flex items-center mt-0.5 shrink-0">
                            <input
                              type="checkbox"
                              checked={acceptPrivacy}
                              onChange={(e) => {
                                setAcceptPrivacy(e.target.checked);
                                if (formErrors.privacy) {
                                  setFormErrors((prev) => ({ ...prev, privacy: "" }));
                                }
                              }}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                              acceptPrivacy
                                ? "bg-red-600 border-red-600 text-white"
                                : theme === "light"
                                  ? "border-neutral-300 bg-white hover:border-neutral-400"
                                  : "border-white/10 bg-[#141414] hover:border-white/20"
                            } ${
                              formErrors.privacy ? "border-red-500" : ""
                            }`}>
                              {acceptPrivacy && (
                                <svg
                                  className="w-3.5 h-3.5 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="3.5"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className={`text-[11px] sm:text-xs leading-normal transition-colors duration-200 ${
                            theme === "light"
                              ? "text-neutral-500 group-hover:text-neutral-800"
                              : "text-neutral-400 group-hover:text-neutral-200"
                          }`}>
                            {t.labelPrivacy}
                          </span>
                        </label>
                        {formErrors.privacy && (
                          <span className="text-[10px] text-red-500 font-medium ml-8">{formErrors.privacy}</span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className={`flex justify-between items-center border-t pt-6 mt-4 transition-colors ${
                        theme === "light" ? "border-neutral-200" : "border-white/5"
                      }`}>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(steps.length - 1)}
                          className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                            theme === "light" ? "text-neutral-500 hover:text-neutral-950" : "text-neutral-400 hover:text-white"
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>{t.back}</span>
                        </button>

                        <button
                          type="submit"
                          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-6 py-3.5 rounded-full cursor-pointer transition-transform hover:scale-105 uppercase tracking-wider"
                        >
                          <span>{t.generateProposal}</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )
              ) : (
                // SUBMITTED SUCCESS SCREEN
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 15 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border transition-colors ${
                      theme === "light"
                        ? "bg-red-50 border-red-200 text-red-600"
                        : "bg-red-950/40 border border-red-500/30 text-red-500"
                    }`}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>

                  <h3 className={`font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-2 transition-colors duration-300 ${
                    theme === "light" ? "text-neutral-950" : "text-white"
                  }`}>
                    {t.successTitle}
                  </h3>
                  <p className={`font-sans text-sm max-w-lg mb-8 leading-relaxed transition-colors duration-300 ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}>
                    {t.successDesc.replace("{name}", contactInfo.name).replace("{email}", contactInfo.email)}
                  </p>

                  <div className={`border rounded-2xl p-6 text-left max-w-md w-full mb-8 transition-colors duration-300 ${
                    theme === "light" ? "bg-neutral-50 border-neutral-200" : "bg-[#161616] border-white/5"
                  }`}>
                    <span className={`font-mono text-[9px] tracking-widest uppercase font-bold block mb-4 transition-colors ${
                      theme === "light" ? "text-red-600" : "text-red-500"
                    }`}>
                      // {t.summaryBadge}
                    </span>
                    <div className="flex flex-col gap-2 text-xs">
                      <div className={`flex justify-between border-b pb-2 transition-colors ${
                        theme === "light" ? "border-neutral-200/60" : "border-white/5"
                      }`}>
                        <span className={theme === "light" ? "text-neutral-500" : "text-neutral-400"}>{t.summaryEngine}</span>
                        <span className={`font-bold ${theme === "light" ? "text-neutral-950" : "text-white"}`}>
                          {steps[0].options.find((o) => o.id === selectedType)?.label}
                        </span>
                      </div>
                      <div className={`flex justify-between border-b pb-2 transition-colors ${
                        theme === "light" ? "border-neutral-200/60" : "border-white/5"
                      }`}>
                        <span className={theme === "light" ? "text-neutral-500" : "text-neutral-400"}>{t.summaryTotal}</span>
                        <span className={`font-bold ${theme === "light" ? "text-neutral-950" : "text-white"}`}>
                          {1 + (selectedScope ? 1 : 0) + selectedFeatures.length} {language === "fr" ? "options" : "options"}
                        </span>
                      </div>
                      <div className={`flex justify-between border-b pb-2 transition-colors ${
                        theme === "light" ? "border-neutral-200/60" : "border-white/5"
                      }`}>
                        <span className={theme === "light" ? "text-neutral-500" : "text-neutral-400"}>{t.summaryPrice}</span>
                        <span className={`font-bold font-mono ${theme === "light" ? "text-red-600" : "text-red-500"}`}>{totalPrice.toLocaleString()} FCFA</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className={theme === "light" ? "text-neutral-500" : "text-neutral-400"}>{t.summaryTimeline}</span>
                        <span className={`font-mono ${theme === "light" ? "text-neutral-800" : "text-white"}`}>{calculateTimelineDays()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setAcceptPrivacy(false);
                      setCurrentStep(0);
                      setSelectedFeatures([]);
                      setContactInfo({ name: "", email: "", notes: "" });
                    }}
                    className={`text-xs font-bold px-6 py-3 rounded-full cursor-pointer transition-all border ${
                      theme === "light"
                        ? "border-neutral-200 hover:border-neutral-300 text-neutral-600 hover:text-neutral-800"
                        : "border-white/10 hover:border-white/20 text-neutral-300 hover:text-white"
                    }`}
                  >
                    {t.estimateAnother}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* RIGHT: RUNNING PROPOSAL LEDGER */}
          <div className={`lg:col-span-4 rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
            theme === "light"
              ? "bg-white border-neutral-200/80 shadow-md shadow-neutral-100/40"
              : "bg-[#0d0d0d] border-white/5 shadow-md shadow-black/20"
          } relative`}>
            {theme === "dark" && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 rounded-full blur-2xl" />
            )}

            <span className={`font-mono text-[9px] tracking-widest uppercase block mb-4 font-bold transition-colors ${
              theme === "light" ? "text-neutral-400" : "text-neutral-500"
            }`}>
              // {t.runningProposal}
            </span>

            <div className="flex flex-col gap-6">
              
              {/* Target Price display */}
              <div className={`border-b pb-6 transition-colors ${
                theme === "light" ? "border-neutral-200" : "border-white/5"
              }`}>
                <div className={`flex items-center gap-1.5 text-xs mb-1 transition-colors ${
                  theme === "light" ? "text-neutral-500" : "text-neutral-400"
                }`}>
                  <Coins className="w-4 h-4 text-red-500" />
                  <span>{t.estBudget}</span>
                </div>
                <div className={`font-mono font-extrabold text-3xl md:text-4xl tracking-tight transition-colors ${
                  theme === "light" ? "text-neutral-950" : "text-white"
                }`}>
                  {totalPrice.toLocaleString()}
                  <span className={`text-xs font-sans font-normal ml-1 transition-colors ${
                    theme === "light" ? "text-neutral-500" : "text-neutral-400"
                  }`}>FCFA</span>
                </div>
                <span className={`text-[10px] block mt-1 transition-colors ${
                  theme === "light" ? "text-neutral-400" : "text-neutral-500"
                }`}>
                  {language === "fr" 
                    ? "Budget indicatif basé sur notre modèle d'attribution de ressources."
                    : "Indicative budget calculation based on dynamic studio resource allocation."}
                </span>
              </div>

              {/* Selections Breakdowns */}
              <div className="flex flex-col gap-4">
                
                {/* Type Selection */}
                <div className="flex flex-col gap-1 text-xs">
                  <span className={`font-mono text-[9px] font-semibold uppercase transition-colors ${
                    theme === "light" ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {t.digitalForm}
                  </span>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold transition-colors ${theme === "light" ? "text-neutral-800" : "text-white"}`}>
                      {steps[0].options.find((o) => o.id === selectedType)?.label.split(" ")[0]} ...
                    </span>
                    <span className={`font-mono font-semibold transition-colors ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {steps[0].options.find((o) => o.id === selectedType)?.priceWeight.toLocaleString()} FCFA
                    </span>
                  </div>
                </div>

                {/* Scope Selection */}
                <div className="flex flex-col gap-1 text-xs">
                  <span className={`font-mono text-[9px] font-semibold uppercase transition-colors ${
                    theme === "light" ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {t.visualScale}
                  </span>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold transition-colors ${theme === "light" ? "text-neutral-800" : "text-white"}`}>
                      {steps[1].options.find((o) => o.id === selectedScope)?.label.split(" ")[0]} ...
                    </span>
                    <span className={`font-mono font-semibold transition-colors ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      +{steps[1].options.find((o) => o.id === selectedScope)?.priceWeight.toLocaleString()} FCFA
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className={`flex flex-col gap-1 text-xs border-t pt-4 transition-colors ${
                  theme === "light" ? "border-neutral-200" : "border-white/5"
                }`}>
                  <span className={`font-mono text-[9px] font-semibold uppercase mb-1 transition-colors ${
                    theme === "light" ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {t.modulesAdded}
                  </span>
                  {selectedFeatures.length === 0 ? (
                    <span className={`italic transition-colors ${theme === "light" ? "text-neutral-400" : "text-neutral-500"}`}>{t.noModules}</span>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      {selectedFeatures.map((featId) => {
                        const option = steps[2].options.find((o) => o.id === featId);
                        return (
                          <div key={featId} className="flex justify-between items-center text-[11px]">
                            <span className={`truncate max-w-[70%] transition-colors ${
                              theme === "light" ? "text-neutral-700" : "text-neutral-300"
                            }`}>✓ {option?.label}</span>
                            <span className={`font-mono transition-colors ${
                              theme === "light" ? "text-neutral-500" : "text-neutral-400"
                            }`}>+{option?.priceWeight.toLocaleString()} FCFA</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Timeline display */}
                <div className={`border-t pt-4 mt-2 transition-colors ${
                  theme === "light" ? "border-neutral-200" : "border-white/5"
                }`}>
                  <div className={`flex items-center gap-1.5 text-xs mb-1 transition-colors ${
                    theme === "light" ? "text-neutral-500" : "text-neutral-400"
                  }`}>
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span>{t.deliveryTitle}</span>
                  </div>
                  <span className={`font-sans font-bold text-sm transition-colors ${
                    theme === "light" ? "text-neutral-850" : "text-white"
                  }`}>
                    {calculateTimelineDays()}
                  </span>
                  <span className={`text-[10px] font-semibold block uppercase font-mono mt-1 transition-colors ${
                    theme === "light" ? "text-neutral-400" : "text-neutral-400"
                  }`}>
                    {t.factorLabel} x{steps[3].options.find((o) => o.id === selectedTimeline)?.priceWeight}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      </ScrollReveal>
    </section>
  );
}
