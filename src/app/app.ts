import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  constructor(private router: Router) {}
  ngOnInit() {
    window.scrollTo(0, 0);
    this.router.navigate(['/'], { replaceUrl: true });
}
}
