import { Component, OnInit } from '@angular/core';
declare var $;
declare var _;
@Component({
  selector: 'app-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.sass']
})
export class SpeakersPageComponent implements OnInit {
  speakers = [
    { name: 'parth', tag: 'android' },
    { name: 'parth', tag: 'android' },
    { name: 'parth', tag: 'web' },
    { name: 'parth', tag: 'android' },
    { name: 'parth', tag: 'android' },
    { name: 'parth', tag: 'web' }
  ]
  activeFilters = [];
  availableFilters = [];
  constructor() { }

  ngOnInit() {
    for (let i in this.speakers) {
      console.log(i)
      this.availableFilters.push(this.speakers[i].tag)
    }
    this.availableFilters = _.uniq(this.availableFilters)
    console.log(this.availableFilters)
    setTimeout(() => {
      $('.modal').modal();
    }, 500)
  }

  setFilters(name) {
    if (this.activeFilters.indexOf(name) !== -1) {
      this.activeFilters.splice(this.activeFilters.indexOf(name), 1)
    } else {
      this.activeFilters.push(name)
    }
    console.log(this.activeFilters);
  }
  filter(tag) {
    console.log(tag)
    if (this.activeFilters.length !== 0) {
      return this.activeFilters.indexOf(tag) !== -1 ? true : false;
      console.log(this.activeFilters.indexOf(tag) !== -1 ? true : false)
    } else {
      return true;
    }
  }
}
