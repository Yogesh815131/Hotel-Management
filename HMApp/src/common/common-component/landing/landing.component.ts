import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  signshow = true;
  hidebtn = false
constructor(private router : Router, private apiCallService:ApicallService){}

  signIn(){
    // this.router.navigateByUrl('singIn')
    console.log("SignIn Sceen...!");
    this.signshow = false;
    this.hidebtn = true
  }
  
  // ownerbtn(){
    
  // }
  
  // userbtn(){
  //   this.hidebtn = false    
  //   this.router.navigateByUrl('signIn')
  // }
  
  // adminbtn(){
  //   this.hidebtn = false
  //   this.router.navigateByUrl('signIn')
  // }

  back(){
    this.router.navigateByUrl('landing')
    console.log("landing Screen...!");
    
  }

  admin(){
    this.router.navigateByUrl('/admin/adminlanding')
  }

  journey(journey:String){
    
    this.apiCallService.journey = journey
    this.hidebtn = false
    this.router.navigateByUrl('signIn')
  }

  contact(){
    this.router.navigateByUrl('/contact')
  }

}
