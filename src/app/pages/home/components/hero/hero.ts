import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../../../services/language';

const NAME = 'Fer Alexandru Virgil';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit, OnDestroy {
  typed = signal('');
  private timer?: ReturnType<typeof setInterval>;

  constructor(public langService: LanguageService) {}

  ngOnInit() {
    let i = 0;
    this.timer = setInterval(() => {
      i++;
      this.typed.set(NAME.slice(0, i));
      if (i >= NAME.length) clearInterval(this.timer);
    }, 55);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
