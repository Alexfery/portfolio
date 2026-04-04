import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
    constructor(public langService: LanguageService) {}
}