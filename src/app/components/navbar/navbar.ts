import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
   constructor(public theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggleTheme();
  }


}
