import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';

@Component({
  selector: 'app-websites',
  imports: [],
  templateUrl: './websites.html',
  styleUrl: './websites.scss',
})
export class Websites {
  constructor(public langService: LanguageService) {}
}
