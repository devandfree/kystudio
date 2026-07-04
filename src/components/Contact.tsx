import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, MapPin, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { translations, Language } from "../lib/translations";

interface ContactProps {
  theme: "dark" | "light";
  language: Language;
}

export default function Contact({ theme, language }: ContactProps) {
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState({ name: "", email: "", budget: "100 000 - 300 000 FCFA", details: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", privacy: "" });
  const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const budgets = ["< 100 000 FCFA", "100 000 - 300 000 FCFA", "300 000 - 1 000 000 FCFA", "1 000 000 FCFA +"];

  const handleBudgetSelect = (b: string) => {
    setFormData({ ...formData, budget: b });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const errors = { name: "", email: "", privacy: "" };

    const nameVal = formData.name.trim();
    const emailVal = formData.email.trim();

    if (!nameVal) {
      errors.name = language === "fr" ? "Nom obligatoire" : "Name is required";
      hasError = true;
    }
    
    if (!emailVal) {
      errors.email = language === "fr" ? "Email obligatoire" : "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(emailVal)) {
      errors.email = language === "fr" ? "Veuillez spécifier un email valide" : "Please specify a valid email";
      hasError = true;
    }

    if (!acceptPrivacy) {
      errors.privacy = t.errorPrivacy;
      hasError = true;
    }

    setFormErrors(errors);

    if (!hasError) {
      setIsSubmitting(true);
      // Simulate asynchronous network request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  // Process the success description to safely inject values
  const getSuccessDesc = () => {
    return t.successDesc
      .replace("{name}", formData.name.trim())
      .replace("{email}", formData.email.trim());
  };

  return (
    <section
      id="contact"
      className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 ${
        theme === "light" ? "bg-white text-[#0a0a0a]" : "bg-[#0a0a0a] text-white"
      }`}
    >
      {/* Background gradients */}
      <div className={`absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors ${
        theme === "light" ? "bg-red-100/30" : "bg-red-950/15"
      }`} />
      <div className={`absolute bottom-10 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors ${
        theme === "light" ? "bg-red-100/20" : "bg-red-900/10"
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Agency Metadata Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              
              {/* Category label */}
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-red-500">
                  {t.badge}
                </span>
              </div>

              <h2 className={`font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] transition-colors duration-300 ${
                theme === "light" ? "text-neutral-950" : "text-white"
              }`}>
                {t.title1}<br />
                {t.title2}<br />
                <span className="text-glow bg-gradient-to-r from-red-500 via-red-600 to-orange-400 bg-clip-text text-transparent">
                  {t.titleSparkle}
                </span>
              </h2>

              <p className={`font-sans text-sm md:text-base leading-relaxed tracking-wide max-w-sm mt-4 transition-colors duration-300 ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}>
                {t.desc}
              </p>
            </div>

            {/* Direct Channels */}
            <div className={`flex flex-col gap-6 mt-12 border-t pt-10 transition-colors duration-300 ${
              theme === "light" ? "border-neutral-200" : "border-white/5"
            }`}>
              <div className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-red-500 shrink-0 border transition-colors ${
                  theme === "light"
                    ? "bg-neutral-100 border-neutral-200"
                    : "bg-white/5 border-white/5"
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">// {language === "fr" ? "Email direct" : "Email Direct"}</span>
                  <a
                    href="mailto:hello@kystudio.dev"
                    className={`text-sm font-bold transition-colors ${
                      theme === "light" ? "text-neutral-900 hover:text-red-600" : "text-white hover:text-red-500"
                    }`}
                  >
                    hello@kystudio.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-red-500 shrink-0 border transition-colors ${
                  theme === "light"
                    ? "bg-neutral-100 border-neutral-200"
                    : "bg-white/5 border-white/5"
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">// {language === "fr" ? "Siège social" : "HQ Location"}</span>
                  <span className={`text-sm font-bold transition-colors ${
                    theme === "light" ? "text-neutral-900" : "text-white"
                  }`}>
                    {language === "fr" ? "Douala — Cameroun (Télétravail possible)" : "Douala — Cameroon (Remote Friendly)"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-red-500 shrink-0 border transition-colors ${
                  theme === "light"
                    ? "bg-neutral-100 border-neutral-200"
                    : "bg-white/5 border-white/5"
                }`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">// {language === "fr" ? "Heures de travail" : "Work Hours"}</span>
                  <span className={`text-sm font-bold transition-colors ${
                    theme === "light" ? "text-neutral-900" : "text-white"
                  }`}>
                    {t.workDays}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form / Submission State */}
          <div className={`lg:col-span-7 border rounded-[2.5rem] p-8 md:p-12 shadow-md relative transition-all duration-300 ${
            theme === "light"
              ? "bg-[#fcfcfc] border-neutral-200 shadow-neutral-900/2"
              : "bg-[#0d0d0d] border-white/5 shadow-black/10"
          }`}>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                        theme === "light" ? "text-neutral-500" : "text-neutral-400"
                      }`}>
                        {t.labelName}
                      </label>
                      <input
                        type="text"
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) {
                            setFormErrors((prev) => ({ ...prev, name: "" }));
                          }
                        }}
                        className={`border rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors ${
                          theme === "light"
                            ? "bg-white text-neutral-900 placeholder-neutral-400"
                            : "bg-[#141414] text-white placeholder-neutral-500"
                        } ${
                          formErrors.name
                            ? "border-red-500"
                            : theme === "light"
                              ? "border-neutral-200"
                              : "border-white/5"
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[10px] text-red-500 font-medium">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                        theme === "light" ? "text-neutral-500" : "text-neutral-400"
                      }`}>
                        {t.labelEmail}
                      </label>
                      <input
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) {
                            setFormErrors((prev) => ({ ...prev, email: "" }));
                          }
                        }}
                        className={`border rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors ${
                          theme === "light"
                            ? "bg-white text-neutral-900 placeholder-neutral-400"
                            : "bg-[#141414] text-white placeholder-neutral-500"
                        } ${
                          formErrors.email
                            ? "border-red-500"
                            : theme === "light"
                              ? "border-neutral-200"
                              : "border-white/5"
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[10px] text-red-500 font-medium">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Budget Selector Pill group */}
                  <div className="flex flex-col gap-2.5">
                    <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {t.labelBudget}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleBudgetSelect(b)}
                          className={`text-xs font-bold py-3.5 px-4 rounded-xl cursor-pointer transition-all border ${
                            formData.budget === b
                              ? theme === "light"
                                ? "bg-neutral-950 text-white border-neutral-950"
                                : "bg-white text-black border-white"
                              : theme === "light"
                                ? "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
                                : "bg-[#141414] text-neutral-400 border-white/5 hover:border-white/10"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-2">
                    <label className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors ${
                      theme === "light" ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {t.labelDetails}
                    </label>
                    <textarea
                      rows={5}
                      placeholder={t.detailsPlaceholder}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className={`border rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors resize-none ${
                        theme === "light"
                          ? "bg-white text-neutral-900 border-neutral-200 placeholder-neutral-400"
                          : "bg-[#141414] text-white border-white/5 placeholder-neutral-500"
                      }`}
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <label className="flex items-start gap-3 cursor-pointer group select-none">
                      <div className="relative flex items-center mt-0.5">
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold py-4 px-6 rounded-2xl cursor-pointer flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.submit}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // SUCCESS NOTIFICATION State
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 15 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border transition-colors ${
                      theme === "light"
                        ? "bg-red-100 border-red-200 text-red-600"
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
                  <p className={`font-sans text-sm max-w-md mb-8 leading-relaxed transition-colors duration-300 ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}>
                    {getSuccessDesc()}
                  </p>

                  <div className={`border rounded-2xl p-5 text-left w-full max-w-sm mb-8 transition-colors ${
                    theme === "light"
                      ? "bg-neutral-50 border-neutral-200"
                      : "bg-[#141414] border-white/5"
                  }`}>
                    <span className="font-mono text-[9px] tracking-widest text-red-500 uppercase font-bold block mb-3">
                      {t.recapBadge}
                    </span>
                    <div className={`flex flex-col gap-2 text-xs transition-colors duration-300 ${
                      theme === "light" ? "text-neutral-700" : "text-neutral-300"
                    }`}>
                      <div>
                        <span className="text-neutral-500 font-bold">{t.recapClient}</span> {formData.name}
                      </div>
                      <div>
                        <span className="text-neutral-500 font-bold">{t.recapBudget}</span> {formData.budget}
                      </div>
                      <div className="line-clamp-2">
                        <span className="text-neutral-500 font-bold">{t.recapDetails}</span> {formData.details || t.recapEmptyDetails}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setAcceptPrivacy(false);
                      setFormData({ name: "", email: "", budget: "100 000 - 300 000 FCFA", details: "" });
                    }}
                    className={`flex items-center gap-2 border text-xs font-bold px-6 py-3 rounded-xl cursor-pointer transition-all uppercase tracking-wider ${
                      theme === "light"
                        ? "border-neutral-200 hover:border-neutral-300 text-neutral-700 hover:text-neutral-950"
                        : "border-white/10 hover:border-white/20 text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span>{t.sendAnother}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
