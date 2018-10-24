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

  speakers = [
    { index: 0, image: 'assets/images/Speakers/Arif.jpg', name: 'Arif Khoja'},    
    { index: 1, image: 'assets/images/Speakers/Jinal.jpg', name: 'Jinal Shah'},
    { index: 2, image: 'assets/images/Speakers/Jaldeep.jpg', name: 'Jaldeep Asodariya'},    
    { index: 3, image: 'assets/images/Speakers/Hardy.jpg', name: 'Hardy Patel'},    
]
  constructor() { }

  ngOnInit() {

  }

}
