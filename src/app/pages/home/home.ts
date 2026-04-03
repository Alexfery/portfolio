import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Challenges } from './components/challenges/challenges';
@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Projects, Contact, Challenges],
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
