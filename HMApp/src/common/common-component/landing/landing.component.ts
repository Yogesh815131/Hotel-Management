import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

constructor(private router : Router){}

  signIn(){
    // this.router.navigateByUrl('singIn')
    this.router.navigateByUrl('signIn')
    console.log("SignIn Sceen...!");
    
  }

  back(){
    this.router.navigateByUrl('landing')
    console.log("landing Screen...!");
    
  }

}
