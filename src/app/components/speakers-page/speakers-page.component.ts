import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.sass']
})
export class SpeakersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.modal').modal();
      $('.modal').modal('open');
      console.log($('.modal'))
    }, 500);
  }

}
