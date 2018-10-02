import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../../app.service';
declare var M;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  // constructor(private db: AngularFirestore, private taskService: AppService) {

  // }
  constructor (public email: AppService){

  }
  ngOnInit() {
  }
  subsriberEmail: string;
  subscribeClick(email){
    this.email.addEmails({'EmailId':email});
    M.toast({html:'Thank you for subscribing to our mail'})
    this.subsriberEmail = "";
  }
  

}
