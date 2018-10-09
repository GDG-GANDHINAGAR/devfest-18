import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
})
export class HomeBlockComponent implements OnInit {
 homePageData;
 date;
  constructor(public dataService : DataService) {
    this.homePageData = this.dataService.data
    this.date = new Date(this.homePageData.general.date)
  }

  ngOnInit() {
  }

}
