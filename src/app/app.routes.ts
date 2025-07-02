import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./experience/experience').then((m) => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects').then((m) => m.Projects),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
];
