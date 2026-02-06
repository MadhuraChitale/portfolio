import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Timeline } from './components/timeline/timeline';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Navbar,
    Contact,
    Home,
    Projects,
    Skills,
    Timeline
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
