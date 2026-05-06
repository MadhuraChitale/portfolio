import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'theme';
  readonly isDark = signal(false);

  constructor() {
    this.setTheme(this.getInitialTheme());
  }

  toggleTheme() {
    this.setTheme(!this.isDark(), true);
  }

  private getInitialTheme() {
    if (!this.isBrowser()) {
      return false;
    }

    const savedTheme = this.getSavedTheme();
    if (savedTheme === 'dark') {
      return true;
    }

    if (savedTheme === 'light') {
      return false;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    this.saveTheme(prefersDark);
    return prefersDark;
  }

  private setTheme(useDarkTheme: boolean, shouldSave = false) {
    this.isDark.set(useDarkTheme);
    this.applyTheme(useDarkTheme);

    if (shouldSave) {
      this.saveTheme(useDarkTheme);
    }
  }

  private saveTheme(useDarkTheme: boolean) {
    try {
      localStorage.setItem(this.storageKey, useDarkTheme ? 'dark' : 'light');
    } catch {
      // Some browser privacy modes disable storage; theme still applies for this session.
    }
  }

  private getSavedTheme() {
    try {
      return localStorage.getItem(this.storageKey);
    } catch {
      return null;
    }
  }

  private applyTheme(useDarkTheme: boolean) {
    if (!this.isBrowser()) {
      return;
    }

    document.documentElement.classList.toggle('dark-theme', useDarkTheme);
    document.body.classList.toggle('dark-theme', useDarkTheme);
    document.documentElement.style.colorScheme = useDarkTheme ? 'dark' : 'light';
  }

  private isBrowser() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }
}
