import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  IgxCardModule,
  IgxExpansionPanelModule,
  IgxTabsModule,
  IgxIconModule,
} from 'igniteui-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    IgxCardModule,
    IgxExpansionPanelModule,
    IgxTabsModule,
    IgxIconModule,
    TranslateModule,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  encapsulation: ViewEncapsulation.None,
})
export class About implements OnInit {
  skills = {
    frontend: [
      { name: 'HTML', percentage: 85 },
      { name: 'CSS', percentage: 75 },
      { name: 'jQuery', percentage: 80 },
      { name: 'React | Angular', percentage: 75 },
    ],
    backend: [
      { name: 'NodeJs', percentage: 95 },
      { name: 'Typescript | Javascript', percentage: 95 },
      { name: 'PostgreSQL | MySQL | MongoDB', percentage: 95 },
      { name: 'GoLang', percentage: 50 },
    ],
    office365: [
      { name: 'Microsoft Defender Online', percentage: 90 },
      { name: 'Microsoft Purview', percentage: 80 },
      { name: 'Microsoft EntraId', percentage: 80 },
      { name: 'Microsoft Exchange Online', percentage: 90 },
    ],
  };

  // Panel keys basados en claves de traducción
  panelKeys = [
    'keySkills',
    'education',
    'specializations',
    'achievements',
    'hobbies',
  ];

  expandedPanels: { [key: string]: boolean } = {};

  aboutContent: { [key: string]: string[] } = {};

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Inicializar los paneles como colapsados
    this.panelKeys.forEach((key) => {
      this.expandedPanels[key] = false;
    });

    this.loadTranslations();

    // Si el idioma cambia, recargar contenido
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  togglePanel(panel: string) {
    this.expandedPanels[panel] = !this.expandedPanels[panel];
  }

  getIcon(panel: string): string {
    switch (panel) {
      case 'achievements':
        return '/assets/img/skills/trophy.jpg';
      case 'education':
        return '/assets/img/skills/books.jpg';
      case 'keySkills':
        return '/assets/img/skills/gear.jpg';
      case 'specializations':
        return '/assets/img/skills/test-tube.jpg';
      case 'hobbies':
        return '/assets/img/skills/hobbies.jpeg';
      default:
        return '';
    }
  }

  loadTranslations() {
    this.panelKeys.forEach((key) => {
      this.translate.get(`about.${key}`).subscribe((items: string[]) => {
        this.aboutContent[key] = items;
      });
    });
  }
}

// import { CommonModule } from '@angular/common';
// import { Component, NgModule, ViewEncapsulation } from '@angular/core';
// import {
//   IgxCardModule,
//   IgxExpansionPanelModule,
//   IgxTabsModule,
//   IgxTabItemComponent,
//   IgxTabsComponent,
//   IgxIconModule,
// } from 'igniteui-angular';

// @Component({
//   selector: 'app-about',
//   imports: [
//     CommonModule,
//     IgxCardModule,
//     IgxExpansionPanelModule,
//     IgxTabsModule,
//     IgxIconModule,
//   ],
//   templateUrl: './about.html',
//   styleUrl: './about.scss',
//   encapsulation: ViewEncapsulation.None,
// })
// export class About {
//   skills = {
//     frontend: [
//       { name: 'HTML', percentage: 85 },
//       { name: 'CSS', percentage: 75 },
//       { name: 'jQuery', percentage: 80 },
//       { name: 'React | Angular', percentage: 60 },
//     ],
//     backend: [
//       { name: 'NodeJs', percentage: 95 },
//       { name: 'Typescript | Javascript', percentage: 95 },
//       { name: 'PostgreSQL | MySQL | MongoDB', percentage: 95 },
//       { name: 'GoLang', percentage: 50 },
//     ],
//     office365: [
//       { name: 'Microsoft Defender Online', percentage: 90 },
//       { name: 'Microsoft Purview', percentage: 80 },
//       { name: 'Microsoft EntraId', percentage: 80 },
//       { name: 'Microsoft Exchange Online', percentage: 90 },
//     ],
//   };
//   expandedPanels: { [key: string]: boolean } = {
//     'Key Skills': false,
//     Education: false,
//     Specializations: false,
//     Achievements: false,
//   };

//   togglePanel(panel: string) {
//     this.expandedPanels[panel] = !this.expandedPanels[panel];
//   }

//   getIcon(panel: string): string {
//     switch (panel) {
//       case 'Achievements':
//         return '/assets/img/skills/trophy.jpg';
//       case 'Education':
//         return '/assets/img/skills/books.jpg';
//       case 'Key Skills':
//         return '/assets/img/skills/gear.jpg';
//       case 'Specializations':
//         return '/assets/img/skills/test-tube.jpg';
//       case 'Hobbies':
//         return '/assets/img/skills/hobbies.jpeg';
//       default:
//         return '';
//     }
//   }
// }
