"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "JP" | "EN";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("JP");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("skyaxes_lang") as Language;
    if (savedLang === "JP" || savedLang === "EN") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    localStorage.setItem("skyaxes_lang", nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
