import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { IgxCardModule } from 'igniteui-angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgClass, IgxCardModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class Experience {
  experiences = [
    {
      title: "experience.title",
      date: 'experience.concentrix.date',
      mode: 'experience.remote',
      modeClass: 'remote',
      company: 'experience.concentrix.company',
      position: 'experience.concentrix.position',
      details: [
        'experience.concentrix.details.0',
        'experience.concentrix.details.1',
        'experience.concentrix.details.2',
        'experience.concentrix.details.3',
        'experience.concentrix.details.4',
        'experience.concentrix.details.5',
      ],
      logo: 'assets/img/concentrix.png',
      picture: 'assets/img/cards/concentrixbanner.jpg',
    },
    {
      
      title: "experience.title",
      date: 'experience.itacademy.date',
      mode: 'experience.remote',
      modeClass: 'remote',
      company: 'experience.itacademy.company',
      position: 'experience.itacademy.position',
      details: [
        'experience.itacademy.details.0',
        'experience.itacademy.details.1',
        'experience.itacademy.details.2',
        'experience.itacademy.details.3',
      ],
      logo: 'assets/img/itacademy_2.png',
      picture: 'assets/img/cards/itacademy.jpg',
    },
    {
      
      title: "experience.title",
      date: 'experience.federal.date',
      mode: 'experience.onsite',
      modeClass: 'onsite',
      company: 'experience.federal.company',
      position: 'experience.federal.position',
      details: [
        'experience.federal.details.0',
        'experience.federal.details.1',
        'experience.federal.details.2',
        'experience.federal.details.3',
        'experience.federal.details.4',
        'experience.federal.details.5',
      ],
      logo: 'assets/img/federal_2.png',
      picture: 'assets/img/cards/federalfake.jpg',
    },
    {
      
      title: "experience.title",
      date: 'experience.xiringuito.date',
      mode: 'experience.onsite',
      modeClass: 'onsite',
      company: 'experience.xiringuito.company',
      position: 'experience.xiringuito.position',
      details: [
        'experience.xiringuito.details.0',
        'experience.xiringuito.details.1',
        'experience.xiringuito.details.2',
        'experience.xiringuito.details.3',
        'experience.xiringuito.details.4',
      ],
      logo: 'assets/img/xiriemp.jpg',
      picture: 'assets/img/cards/xiriwmpuria.jpg',
    },
    {
      
      title: "experience.title",
      date: 'experience.laburg.date',
      mode: 'experience.onsite',
      modeClass: 'onsite',
      company: 'experience.laburg.company',
      position: 'experience.laburg.position',
      details: [
        'experience.laburg.details.0',
        'experience.laburg.details.1',
        'experience.laburg.details.2',
        'experience.laburg.details.3',
        'experience.laburg.details.4',
      ],
      logo: 'assets/img/laburg.png',
      picture: 'assets/img/cards/laburg.jpg',
    },
  ];
}

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { NgClass } from '@angular/common';
// import { IgxCardModule } from 'igniteui-angular';

// @Component({
//   selector: 'app-experience',
//   imports: [CommonModule, NgClass, IgxCardModule],
//   templateUrl: './experience.html',
//   styleUrls: ['./experience.scss'],
// })
// export class Experience {
//   experiences = [
//     {
//       date: 'Feb-2025 to Present',
//       mode: 'Remote',
//       company: 'Concentrix, A Coruña, Galiza, SPA',
//       position: 'Support Engineer',
//       details: [
//         'SCIM: Security & Compliance Incident Management',
//         'Responsible for managing security and compliance incidents',
//         'Incident Analysis: Conducting thorough investigations',
//         'Cross-Functional Collaboration with IT teams',
//         'Implementing corrective measures',
//         'Specialist: MDO, Purview, EntraID, Exchange Online',
//       ],
//       logo: 'assets/img/concentrix.png',
//       picture: 'assets/img/cards/concentrixbanner.jpg',
//     },
//     {
//       date: 'Sept-2024 to Feb-2025',
//       mode: 'Remote',
//       company: 'IT Academy, Barcelona Activa, SPA',
//       position: 'Backend Developer',
//       details: [
//         'Contributed to ITA-Wiki project development',
//         'Database Migrations: Designed and executed strategies',
//         'AI Integration: Implemented AI-powered features',
//         'Worked with Scrum/Agile Methodology',
//       ],
//       logo: 'assets/img/itacademy_2.png',
//       picture: 'assets/img/cards/itacademy.jpg',
//     },
//     {
//       date: 'Feb 2022 - Feb 2024',
//       mode: 'OnSite',
//       company: 'Federal Café Gotic, Barcelona, SPA',
//       position: 'General Manager',
//       details: [
//         'Financial and Administrative Oversight',
//         'Budget management, cost control, and maximizing profitability',
//         'Analyzed sales reports and set financial goals',
//         'Implemented operational efficiency strategies',
//         'Marketing and promotional coordination',
//         'Inventory management and supply chain optimization',
//       ],
//       logo: 'assets/img/federal_2.png',
//       picture: 'assets/img/cards/federalfake.jpg',
//     },
//     {
//       date: 'Mar 2021 - Feb 2022',
//       mode: 'OnSite',
//       company: 'Xiringuito Escribà Empuriabrava, SPA',
//       position: 'General Manager',
//       details: [
//         'Leadership and Operations management',
//         'Oversaw daily restaurant operations',
//         'Maintained high standards of food quality',
//         'Led team of 10 staff members',
//         'Managed staff schedules and customer relations',
//       ],
//       logo: 'assets/img/xiriemp.jpg',
//       picture: 'assets/img/cards/xiriwmpuria.jpg',
//     },
//     {
//       date: 'Jun 2015 - Dec 2020',
//       mode: 'OnSite',
//       company: 'La Burg, Barcelona, SPA',
//       position: 'General Manager',
//       details: [
//         'Customer Experience and Staff Development',
//         'Delivered exceptional customer experiences',
//         'Trained and mentored service staff',
//         'Built strong client relationships',
//         'Managed performance feedback systems',
//       ],
//       logo: 'assets/img/laburg.png',
//       picture: 'assets/img/cards/laburg.jpg',
//     },
//   ];
// }
