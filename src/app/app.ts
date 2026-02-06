import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Publications } from './components/publications/publications';
import { Skills } from './components/skills/skills';
import { Timeline } from './components/timeline/timeline';
@Component({
  selector: 'app-root',
  imports: [Navbar, Contact, Home, Projects, Publications, Skills, Timeline],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
