import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { config } from './app.config';
import { Task } from './app.model';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  tasks;
  title = 'devfestSite';
  constructor(private db: AngularFirestore, private taskService: AppService) {

  }
  ngOnInit() {
    // this.tasks = this.db.collection(config.collection_endpoint).valueChanges().subscribe(action => {
    //   // return
    //   console.log(action)
    // });
    // this.db.collection(config.collection_endpoint).ref.where
    // this.db
    //   .collection(config.collection_endpoint)
    //   .snapshotChanges()
    //   .subscribe(action => {
    //     console.log(action)
    //   })
    // console.log(this.tasks)

    // .(actions => {
    //     return actions.map(a => {
    //       //Get document data
    //       const data = a.payload.doc.data() as Task;
    //       //Get document id
    //       const id = a.payload.doc.id;
    //       //Use spread operator to add the id to the document data
    //       return { id, …data };
    //     });
    //   });
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
