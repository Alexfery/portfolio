import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  constructor(public langService: LanguageService) {}
}
