import { Component, signal } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss'
})
export class LanguageSelector {
  isHidden = signal(false);
  isFadingOut = signal(false);
  showGreeting = signal(false);
  selectedLang = signal('');
  greeting = signal('');

  greetings: Record<string, string> = {
    ro: 'Bună ziua',
    en: 'Hello',
    de: 'Guten Tag',
    fr: 'Bonjour'
  };

  constructor(private langService: LanguageService) {}

  selectLang(lang: string) {
    this.greeting.set(this.greetings[lang]);
    this.selectedLang.set(lang);

    setTimeout(() => this.showGreeting.set(true), 300);
    setTimeout(() => this.showGreeting.set(false), 2300);
    setTimeout(() => this.isFadingOut.set(true), 2800);
    setTimeout(() => {
      this.isHidden.set(true);
      this.langService.setLanguage(lang);
    }, 3600);
  }
}