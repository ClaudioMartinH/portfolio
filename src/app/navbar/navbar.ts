import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Navbar {
  menuOpen = false;

  constructor(public translate: TranslateService) {
    // Configuración inicial de idioma
    translate.addLangs(['es', 'ca', 'en']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/es|ca|en/) ? browserLang : 'es');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  changeLanguage(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.translate.use(select.value);
  }
}
