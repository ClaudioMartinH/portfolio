import { Component } from '@angular/core';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { Home } from './home/home';
import { Experience } from './experience/experience';
import { TranslateService } from '@ngx-translate/core';
import { IgxCarouselModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    Contact,
    About,
    Experience,
    Projects,
    IgxCarouselModule,
    IgxIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  currentLang: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('userLang');
    const browserLang = this.translate.getBrowserLang();
    const langToUse =
      savedLang || (browserLang?.match(/es|ca|en/) ? browserLang : 'es');

    this.currentLang = langToUse;

    translate.setDefaultLang('es'); // fallback
    translate.use(this.currentLang);
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('userLang', lang);
  }
}


// import { Component } from '@angular/core';
// import { Contact } from './contact/contact';
// import { Projects } from './projects/projects';
// import { About } from './about/about';
// import { Home } from './home/home';
// import { Experience } from './experience/experience';
// import { Navbar } from './navbar/navbar';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     Home,
//     Contact,
//     About,
//     Experience,
//     Projects
//   ],
//   templateUrl: './app.html',
//   styleUrl: './app.scss'
// })
// export class App { }
