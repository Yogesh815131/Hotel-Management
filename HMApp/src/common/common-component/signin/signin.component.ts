import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userData:any;
  isShowPass = false;
  isValid = false;

  constructor(){}

  login(data:any){

  }

  toShowPassWord(){
    this.isShowPass = !this.isShowPass;
  }

}
