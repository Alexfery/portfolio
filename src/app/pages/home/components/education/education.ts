import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  constructor(public langService: LanguageService) {}
}
