import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {HomeBlockComponent} from './home-block/home-block.component';
import {AboutBlockComponent} from './about-block/about-block.component';
import {SpeakerBlockComponent} from './speaker-block/speaker-block.component';
import {TicketBlockComponent} from './ticket-block/ticket-block.component';

declare var $;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  focusInputForm(){
    console.log($('#email'))
    $('html,body').animate({scrollTop: $('#email').offset().top}, 200, function() {
      $('#email').focus();
  });

  }

}
