import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SpeakersPageComponent } from './components/speakers-page/speakers-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'speakers', component: SpeakersPageComponent },
  { path: 'team', component: TeamPageComponent },
//   { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
