import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeBlockComponent } from './components/home-page/home-block/home-block.component';
import { AboutBlockComponent } from './components/home-page/about-block/about-block.component';
import { SpeakerBlockComponent } from './components/home-page/speaker-block/speaker-block.component';
import { TicketBlockComponent } from './components/home-page/ticket-block/ticket-block.component';
import { TeamBlockComponent } from './components/home-page/team-block/team-block.component';
import { MapBlockComponent } from './components/home-page/map-block/map-block.component';
import { PartnersBlockComponent } from './components/home-page/partners-block/partners-block.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeBlockComponent,
    AboutBlockComponent,
    SpeakerBlockComponent,
    TicketBlockComponent,
    TeamBlockComponent,
    MapBlockComponent,
    PartnersBlockComponent,
    FooterComponent,
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
