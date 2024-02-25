import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/common/commonServices/apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  journey:any;
  constructor(private router:Router, private apiCallService:ApicallService){}

  ngOnInit(){

    this.journey = this.apiCallService.journey
    console.log("signup", this.journey);
    
  }

  sinIp(){
    this.router.navigateByUrl("/signIn")
  }

  signUp(data:any){
    console.log(data);
    this.apiCallService.postApiCall(data, this.journey).subscribe(response=>{

      console.log(response);
      

      if(this.journey == "owner"){
        this.router.navigateByUrl("/owner")
      }else if(this.journey == "/admin"){
        this.router.navigateByUrl("admin")
      }else{
        this.router.navigateByUrl("/user")
      }
    })
  }
}
