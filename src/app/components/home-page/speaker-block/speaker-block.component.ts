import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-speaker-block',
  templateUrl: './speaker-block.component.html',
})
export class SpeakerBlockComponent implements OnInit {
  prevspeakers = [
    {
      'pic': 'assets/images/prev_1.jpg',
    },
    {
      'pic': 'assets/images/prev_2.jpg',
    },
    {
      'pic': 'assets/images/prev_3.jpg',
    },
    {
      'pic': 'assets/images/team_2.png',
    },
    {
      'pic': 'assets/images/prev_5.jpg',
    },
    {
      'pic': 'assets/images/prev_6.jpg',
    },
  ];
  constructor() { }

  ngOnInit() {

  }

}
