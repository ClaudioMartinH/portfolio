import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  professions: string[] = [];
  currentProfession: string = '';
  isDeleting: boolean = false;
  currentIndex: number = 0;
  typingSpeed: number = 100;
  currentLang: string;

  constructor(
    private viewportScroller: ViewportScroller,
    public translate: TranslateService
  ) {
    // Idioma desde localStorage o navegador
    translate.addLangs(['es', 'ca', 'en']);
    const savedLang = localStorage.getItem('userLang');
    const browserLang = translate.getBrowserLang();
    const langToUse =
      savedLang || (browserLang?.match(/es|ca|en/) ? browserLang : 'es');

    this.currentLang = langToUse;
    translate.setDefaultLang('es');
    translate.use(this.currentLang);
  }

  ngOnInit() {
    this.typeWriter();
    this.loadTranslations();

    // Escucha cambios de idioma y actualiza textos y selector
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate
      .getTranslation(this.translate.currentLang)
      .subscribe((translations) => {
        const professions = translations?.['home']?.['hero']?.['professions'];
        this.professions = Array.isArray(professions) ? professions : [];
      });
  }

  changeLanguage(event: Event) {
    const select = event.target as HTMLSelectElement;
    const lang = select.value;
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('userLang', lang);
  }

  scrollToAnchor(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  typeWriter() {
    if (!this.professions.length) {
      setTimeout(() => this.typeWriter(), 1000);
      return;
    }

    const currentWord = this.professions[this.currentIndex];

    if (this.isDeleting) {
      this.currentProfession = currentWord.substring(
        0,
        this.currentProfession.length - 1
      );
    } else {
      this.currentProfession = currentWord.substring(
        0,
        this.currentProfession.length + 1
      );
    }

    let delta = this.typingSpeed;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.currentProfession === currentWord) {
      delta = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentProfession === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.professions.length;
      delta = 500;
    }

    setTimeout(() => this.typeWriter(), delta);
  }
}
