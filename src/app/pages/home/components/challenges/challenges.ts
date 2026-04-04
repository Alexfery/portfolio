import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';

@Component({
  selector: 'app-challenges',
  imports: [],
  templateUrl: './challenges.html',
  styleUrl: './challenges.scss',
})
export class Challenges {
      constructor(public langService: LanguageService) {}

}
