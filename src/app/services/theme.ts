import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  currentTheme = signal<Theme>('light');

  init() {
    const saved = localStorage.getItem('fa-theme');
    const theme: Theme =
      saved === 'dark' || saved === 'light'
        ? saved
        : matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    this.apply(theme);
  }

  toggle() {
    const theme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('fa-theme', theme);
    this.apply(theme);
  }

  private apply(theme: Theme) {
    this.currentTheme.set(theme);
    document.body.dataset['theme'] = theme;
  }
}
