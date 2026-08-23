"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
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

const THEME_KEY = "theme";
const LANG_KEY = "lang";
const DEFAULT_THEME: Theme = "light";
const DEFAULT_LANG: Lang = "ro";

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

/**
 * Theme and language live in localStorage, which is an external store rather
 * than React state. Reading it through useSyncExternalStore keeps the server
 * render on the defaults and swaps to the stored values right after hydration,
 * without the cascading renders a setState-in-effect would cause.
 *
 * The cached values are what the snapshots return, so a toggle still works when
 * localStorage is unavailable (private browsing) — persistence is lost, the
 * session is not.
 */
let themeCache: Theme | null = null;
let langCache: Lang | null = null;
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function emit() {
  for (const listener of listeners) listener();
}

function readStored(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function persist(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage unavailable — the in-memory cache still drives the session
  }
}

function getThemeSnapshot(): Theme {
  if (themeCache === null) {
    const stored = readStored(THEME_KEY);
    themeCache = stored === "dark" || stored === "light" ? stored : DEFAULT_THEME;
  }
  return themeCache;
}

function getLangSnapshot(): Lang {
  if (langCache === null) {
    const stored = readStored(LANG_KEY);
    langCache =
      stored !== null && (LANGS as readonly string[]).includes(stored) ? (stored as Lang) : DEFAULT_LANG;
  }
  return langCache;
}

const getThemeServerSnapshot = (): Theme => DEFAULT_THEME;
const getLangServerSnapshot = (): Lang => DEFAULT_LANG;

function storeTheme(next: Theme) {
  themeCache = next;
  persist(THEME_KEY, next);
  emit();
}

function storeLang(next: Lang) {
  langCache = next;
  persist(LANG_KEY, next);
  emit();
}

export function SiteProviders({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getThemeServerSnapshot);
  const lang = useSyncExternalStore(subscribe, getLangSnapshot, getLangServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => storeTheme(theme === "light" ? "dark" : "light");

  const nextLang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
  const cycleLang = () => storeLang(nextLang);

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
