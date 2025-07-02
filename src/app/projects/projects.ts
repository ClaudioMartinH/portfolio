import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
        {
          titleKey: 'chatapp',
          category: 'app-dev',
          image: 'assets/img/Captura de pantalla 2024-12-13 165254.png',
          previewLink:
            'https://github.com/ClaudioMartinH/7.1-claudimartin-chat-app',
          detailsLink:
            'https://github.com/ClaudioMartinH/7.1-claudimartin-chat-app',
          descriptionKey: 'webdev',
          textKey: 'chatapptext',
        },
        {
          titleKey: 'dicegame',
          category: 'app-dev',
          image: 'assets/img/Captura de pantalla 2024-12-13 174117.png',
          previewLink:
            'https://github.com/ClaudioMartinH/6-Claudio-Martin-Andrea-Rethy.git',
          detailsLink:
            'https://github.com/ClaudioMartinH/6-Claudio-Martin-Andrea-Rethy',
          descriptionKey: 'webdev',
          textKey: 'dicegametext',
        },
        {
          titleKey: 'activityapp',
          category: 'web-dev',
          image: 'assets/img/Captura de pantalla 2024-12-13 194022.png',
          previewLink: 'https://github.com/ClaudioMartinH/appActivitats',
          detailsLink: 'https://github.com/ClaudioMartinH/appActivitats',
          descriptionKey: 'appdev',
          textKey: 'activityapptext',
        },
        {
          titleKey: 'incloumap',
          category: 'web-dev',
          image: 'assets/img/Captura de pantalla 2024-12-13 205851.png',
          previewLink: 'https://github.com/ClaudioMartinH/hack_bcn_activa',
          detailsLink: 'https://github.com/ClaudioMartinH/hack_bcn_activa',
          descriptionKey: 'appdev',
          textKey: 'incloumaptext',
        },
        {
          titleKey: 'nodecert',
          category: 'cou-cer',
          image: 'assets/img/nodejs-certificate-bootcamp.png',
          previewLink: 'assets/img/nodejs-certificate-bootcamp.png',
          detailsLink: 'assets/img/nodejs-certificate-bootcamp.png',
          descriptionKey: 'certificate',
          textKey: 'nodecerttext',
        },
        {
          titleKey: 'nasachallenge',
          category: 'cou-cer',
          image: 'assets/img/nasa-space-apps.png',
          previewLink: 'assets/img/nasa-space-apps.png',
          detailsLink: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/',
          descriptionKey: 'hackathon',
          textKey: 'nasachallengetext',
        },
        {
          titleKey: 'hackathonso',
          category: 'cou-cer',
          image: 'assets/img/certificat-hackatho-SO.png',
          previewLink: 'assets/img/certificat-hackatho-SO.png',
          detailsLink: 'assets/img/certificat-hackatho-SO.png',
          descriptionKey: 'hackathon',
          textKey: 'hackathonsoText',
        },
        {
          titleKey: 'javaGoCert',
          category: 'cou-cer',
          image: 'assets/img/certificat-java-golang.png',
          previewLink: 'assets/img/certificat-java-golang.png',
          detailsLink: 'assets/img/certificat-java-golang.png',
          descriptionKey: 'certificate',
          textKey: 'javaGoCertText',
        },
        {
          titleKey: 'itTalks',
          category: 'cou-cer',
          image: 'assets/img/certificat-itTalksx2.png',
          previewLink: 'assets/img/certificat-itTalksx2.png',
          detailsLink: 'assets/img/certificat-itTalksx2.png',
          descriptionKey: 'certificate',
          textKey: 'itTalksText',
        },
      ];

  activeFilter = 'all';

  filterProjects(category: string) {
    this.activeFilter = category;
  }

  get filteredProjects() {
    return this.activeFilter === 'all'
      ? this.projects
      : this.projects.filter(
          (project) => project.category === this.activeFilter
        );
  }
}

// import { CommonModule } from '@angular/common';
// import { Component, ViewChild } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
// import { IgxCarouselComponent, IgxCarouselModule, IgxIconModule } from 'igniteui-angular';

// @Component({
//   selector: 'app-projects',
//   imports: [CommonModule, IgxCarouselModule, TranslateModule, IgxIconModule],
//   templateUrl: './projects.html',
//   styleUrl: './projects.scss',
// })
// export class Projects {
//   @ViewChild('carousel', { static: true })
//   public carousel!: IgxCarouselComponent;
//   prevSlide() {
//     this.carousel.prev();
//   }

//   nextSlide() {
//     this.carousel.next();
//   }
//   projects = [
//     {
//       titleKey: 'chatapp',
//       category: 'app-dev',
//       image: 'assets/img/Captura de pantalla 2024-12-13 165254.png',
//       previewLink:
//         'https://github.com/ClaudioMartinH/7.1-claudimartin-chat-app',
//       detailsLink:
//         'https://github.com/ClaudioMartinH/7.1-claudimartin-chat-app',
//       descriptionKey: 'webdev',
//       textKey: 'chatapptext',
//     },
//     {
//       titleKey: 'dicegame',
//       category: 'app-dev',
//       image: 'assets/img/Captura de pantalla 2024-12-13 174117.png',
//       previewLink:
//         'https://github.com/ClaudioMartinH/6-Claudio-Martin-Andrea-Rethy.git',
//       detailsLink:
//         'https://github.com/ClaudioMartinH/6-Claudio-Martin-Andrea-Rethy',
//       descriptionKey: 'webdev',
//       textKey: 'dicegametext',
//     },
//     {
//       titleKey: 'activityapp',
//       category: 'web-dev',
//       image: 'assets/img/Captura de pantalla 2024-12-13 194022.png',
//       previewLink: 'https://github.com/ClaudioMartinH/appActivitats',
//       detailsLink: 'https://github.com/ClaudioMartinH/appActivitats',
//       descriptionKey: 'appdev',
//       textKey: 'activityapptext',
//     },
//     {
//       titleKey: 'incloumap',
//       category: 'web-dev',
//       image: 'assets/img/Captura de pantalla 2024-12-13 205851.png',
//       previewLink: 'https://github.com/ClaudioMartinH/hack_bcn_activa',
//       detailsLink: 'https://github.com/ClaudioMartinH/hack_bcn_activa',
//       descriptionKey: 'appdev',
//       textKey: 'incloumaptext',
//     },
//     {
//       titleKey: 'nodecert',
//       category: 'cou-cer',
//       image: 'assets/img/nodejs-certificate-bootcamp.png',
//       previewLink: 'assets/img/nodejs-certificate-bootcamp.png',
//       detailsLink: 'assets/img/nodejs-certificate-bootcamp.png',
//       descriptionKey: 'certificate',
//       textKey: 'nodecerttext',
//     },
//     {
//       titleKey: 'nasachallenge',
//       category: 'cou-cer',
//       image: 'assets/img/nasa-space-apps.png',
//       previewLink: 'assets/img/nasa-space-apps.png',
//       detailsLink: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/',
//       descriptionKey: 'hackathon',
//       textKey: 'nasachallengetext',
//     },
//     {
//       titleKey: 'hackathonso',
//       category: 'cou-cer',
//       image: 'assets/img/certificat-hackatho-SO.png',
//       previewLink: 'assets/img/certificat-hackatho-SO.png',
//       detailsLink: 'assets/img/certificat-hackatho-SO.png',
//       descriptionKey: 'hackathon',
//       textKey: 'hackathonsoText',
//     },
//     {
//       titleKey: 'javaGoCert',
//       category: 'cou-cer',
//       image: 'assets/img/certificat-java-golang.png',
//       previewLink: 'assets/img/certificat-java-golang.png',
//       detailsLink: 'assets/img/certificat-java-golang.png',
//       descriptionKey: 'certificate',
//       textKey: 'javaGoCertText',
//     },
//     {
//       titleKey: 'itTalks',
//       category: 'cou-cer',
//       image: 'assets/img/certificat-itTalksx2.png',
//       previewLink: 'assets/img/certificat-itTalksx2.png',
//       detailsLink: 'assets/img/certificat-itTalksx2.png',
//       descriptionKey: 'certificate',
//       textKey: 'itTalksText',
//     },
//   ];

//   activeFilter = 'all';

//   filterProjects(category: string) {
//     this.activeFilter = category;
//   }

//   get filteredProjects() {
//     return this.activeFilter === 'all'
//       ? this.projects
//       : this.projects.filter(
//           (project) => project.category === this.activeFilter
//         );
//   }
// }
