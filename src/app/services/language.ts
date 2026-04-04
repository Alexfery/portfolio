import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal('en');

  setLanguage(lang: string) {
    this.currentLang.set(lang);
  }
} 