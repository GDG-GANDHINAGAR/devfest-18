import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'devfestSite';
  ngOnInit() {
    setTimeout(val => {
      this.destroySideNav();
      $('.sidenav').sidenav({
        closeOnClick: true
      });
    }, 500);
    // $('.modal').modal();
    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 100) {
    //     console.log($(this).scrollTop())
    //     $("nav#nav").addClass('shadow')
    //   } else {
    //     $("nav#nav").removeClass('shadow')
    //   }
    // })
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
