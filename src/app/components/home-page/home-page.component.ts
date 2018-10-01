import { Component, OnInit } from '@angular/core';
import {HomeBlockComponent} from './home-block/home-block.component';
import {AboutBlockComponent} from './about-block/about-block.component';
import {SpeakerBlockComponent} from './speaker-block/speaker-block.component';
import {TicketBlockComponent} from './ticket-block/ticket-block.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
