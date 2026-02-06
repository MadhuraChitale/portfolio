import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private dark = false;

  toggleTheme() {
    this.dark = !this.dark;
    if (this.dark) {
      document.body.classList.add('dark-theme'); // add dark theme class
    } else {
      document.body.classList.remove('dark-theme'); // remove dark theme class
    }
  }
}
