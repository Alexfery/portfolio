import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
    constructor(public langService: LanguageService) {}
}
