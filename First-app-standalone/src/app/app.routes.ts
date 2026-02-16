import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './component/about/about';

export const routes: Routes = [

  // Normal Loading or Eager loading
  // {path: 'home', component: Home},
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  // {path:'about/:id', component: About}

  // Lazy Loading
  {
    path:'',
    loadComponent: () => import('./home/home').then(h => h.Home)
  },
  {
    path:'about/:id',
    loadComponent: () => import('./component/about/about').then(a => a.About)
  },
  {
    path:'about',
    loadComponent: () => import('./component/about/about').then(a => a.About)
  },
  {
    path:'admin',
    loadComponent: () => import('./admin/admin').then(a => a.Admin)
  }
];
