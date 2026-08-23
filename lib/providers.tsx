"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGS, translations, type Lang, type Translation } from "./translations";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

interface LangContextValue {
  lang: Lang;
  nextLang: Lang;
  cycleLang: () => void;
  t: Translation;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const LangContext = createContext<LangContextValue | null>(null);

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export function SiteProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("ro");

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      const storedLang = localStorage.getItem("lang") as Lang | null;
      if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
      if (storedLang && (LANGS as readonly string[]).includes(storedLang)) setLang(storedLang);
    } catch {
      // localStorage unavailable — keep defaults
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  const nextLang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
  const cycleLang = () => setLang(nextLang);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, nextLang, cycleLang, t: translations[lang] }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within SiteProviders");
  return ctx;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within SiteProviders");
  return ctx;
}
