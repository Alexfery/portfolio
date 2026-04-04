import { Component } from '@angular/core';
import { LanguageService } from '../../../../services/language';
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
    constructor(public langService: LanguageService) {}
}
