import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-block',
  templateUrl: './map-block.component.html',
})
export class MapBlockComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
    var mapProp = {
    }
  }

}
