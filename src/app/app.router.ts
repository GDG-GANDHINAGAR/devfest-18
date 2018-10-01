import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
//   { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
