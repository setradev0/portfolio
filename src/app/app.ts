import { Component, afterNextRender } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Skills, Projects, Education, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    afterNextRender(() => {
      const hide = () => {
        const el = document.getElementById('app-loader');
        if (!el) return;
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 400);
      };
      if (document.readyState === 'complete') {
        hide();
      } else {
        window.addEventListener('load', hide, { once: true });
      }
    });
  }
}
