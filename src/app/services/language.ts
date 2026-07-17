import { Injectable, signal, computed } from '@angular/core';
import { translations } from '../i18n/translations';

const LANGS = ['ro', 'en', 'de', 'fr'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal(this.initialLang());

  t = computed(() => translations[this.currentLang()]);

  nextLang = computed(() => LANGS[(LANGS.indexOf(this.currentLang()) + 1) % LANGS.length]);

  setLanguage(lang: string) {
    localStorage.setItem('fa-lang', lang);
    this.currentLang.set(lang);
  }

  cycle() {
    this.setLanguage(this.nextLang());
  }

  private initialLang(): string {
    const saved = localStorage.getItem('fa-lang');
    return saved && LANGS.includes(saved) ? saved : 'ro';
  }
}
