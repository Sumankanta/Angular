import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: '',
     loadChildren: () => import('./home/home-module').then(m => m.HomeModule)
    },
  {
    path: 'about',
    loadChildren: () => import('./about/about-module').then(m => m.AboutModule)
  },
  { path: 'admin', loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) }
  // {path: 'app/home', component: Home}
  // {path:'home', component: Home},
  // {path:'about', component: About},
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', loadChildren: () => import('./app-home/app-home-module').then(m => m.AppHomeModule) }

  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home-module').then((h) => h.HomeModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about-module').then((a) => a.AboutModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
