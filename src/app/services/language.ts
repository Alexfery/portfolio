import { Injectable, signal, computed } from '@angular/core';
import { translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal('en');

  t = computed(() => translations[this.currentLang()]);

  setLanguage(lang: string) {
    this.currentLang.set(lang);
  }
}