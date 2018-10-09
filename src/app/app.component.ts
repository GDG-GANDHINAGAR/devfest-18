import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from './app.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { config } from './app.config';
import { Emails } from './app.model';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  tasks;
  isOnHome = false;
  loaded = false;
  title = 'devfestSite';
  url;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private db: AngularFirestore, private taskService: AppService) {
  }
  ngOnInit() {
    this.router.events.pipe(filter(data => data instanceof NavigationEnd)).subscribe(data => {
      this.url = data['url'];
      if (data['url'] !== '' || data['url'] !== '/home') {
        this.isOnHome = true
      }
      console.log(data)
    })
    setTimeout(val => {
      this.destroySideNav();
      $('.sidenav').sidenav({
        closeOnClick: true
      });
      this.isOnHome = this.getIsonHome();
      this.loaded = true;
    }, 500);
  }
  @HostListener("window:scroll", ['$event']) onWindowScroll(event) {
    this.isOnHome = this.getIsonHome();
  }
  getIsonHome() {
    if (this.url === '' || this.url === '/home') {
      return window.pageYOffset > (window.innerHeight * 0.5) ? true : false;
    } else {
      return true;
    }
  }
  // destroy side nav
  destroySideNav() {
    const $overlay = $('#sidenav-overlay');
    const $dragTarget = $('.drag-target[data-sidenav="' + $('.button-collapse').attr('data-activates') + '"]');
    $overlay.trigger('click');
    $dragTarget.remove();
    $('.button-collapse').off('click');
    $overlay.remove();
  }

}
