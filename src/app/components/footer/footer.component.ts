import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { AppService } from '../../app.service';
declare var M;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  subscribeForm:FormGroup;
  constructor (public email: AppService){
    this.subscribeForm = new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.email])
    })
  }

  ngOnInit() {
  }

  subscribe(){
    if(this.subscribeForm.valid){
      console.log(this.subscribeForm.controls['email'])
      let result  = this.email.addEmails({'EmailId':this.subscribeForm.controls['email'].value});
      M.toast({html:'Thank you for subscribing!'})
    } else {
      M.toast({html:'Please enter valid email '})
    }
  }
  

}
