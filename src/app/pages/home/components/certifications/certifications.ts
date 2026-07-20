import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  constructor(public langService: LanguageService) {}
}
