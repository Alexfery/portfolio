import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Websites } from './components/websites/websites';
import { Education } from './components/education/education';
import { Certifications } from './components/certifications/certifications';
import { Languages } from './components/languages/languages';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Websites, Skills, Education, Certifications, Languages, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  ngAfterViewInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }
}
