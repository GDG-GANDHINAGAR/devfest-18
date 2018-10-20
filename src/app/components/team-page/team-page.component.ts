import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.sass']
})
export class TeamPageComponent implements OnInit {
  team = [
    {
      'name': 'Parth Jansari',
      'task': 'Planing & Designing',
      'pic': 'assets/images/prev_1.jpg',
      'links': [{
        'icon': '',
        'url': ''
      }]
    },
    {
      'name': 'Yatendrasinh Joddha',
      'task': 'Venue & Food',
      'pic': 'assets/images/team_2.png',
      'links': [{
        'icon': '',
        'url': ''
      }]
    },
    {
      'name': 'Bhavesh Valand',
      'task': 'Digital Strategist',
      'pic': 'assets/images/team_3.jpeg',
      'links': [{
        'icon': '',
        'url': ''
      }]
    },
    {
      'name': 'Arif Khoja',
      'task': 'Precipitance',
      'pic': 'assets/images/team_4.png',
      'links': [{
        'icon': '',
        'url': ''
      }]
    },
    {
      'name': 'Naresh kumar',
      'task': 'Quiz Master',
      'pic': 'assets/images/prev_6.jpg',
      'links': [{
        'icon': '',
        'url': ''
      }]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
