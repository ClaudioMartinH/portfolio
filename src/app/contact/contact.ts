import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  visitCount: number = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const savedCount = localStorage.getItem('visitCount');
    this.visitCount = savedCount ? parseInt(savedCount) : 0;
    this.visitCount++;
    localStorage.setItem('visitCount', this.visitCount.toString());
  }

  get cvLink(): string {
    const lang = this.translate.currentLang;

    switch (lang) {
      case 'es':
        return 'assets/cvs/CV-claudiomartin-ES.pdf';
      case 'ca':
        return 'assets/cvs/CV-claudiomartin-CA.pdf';
      default:
        return 'assets/cvs/CV-claudiomartin-EN.pdf';
    }
  }
}
