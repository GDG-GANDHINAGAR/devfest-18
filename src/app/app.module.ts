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
import { SpeakersPageComponent } from './components/speakers-page/speakers-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
var config = {
  apiKey: "AIzaSyBUMZKY2ji3Dpe-Yoicos30GrpP9Au_LFM",
  authDomain: "devfest-18-6be27.firebaseapp.com",
  databaseURL: "https://devfest-18-6be27.firebaseio.com",
  projectId: "devfest-18-6be27",
  storageBucket: "devfest-18-6be27.appspot.com",
  messagingSenderId: "823654264989"
};

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
    SpeakersPageComponent,
    TeamPageComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDECYAKntxXNoXm0_bsW9DEiZcg-hlaQqQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }