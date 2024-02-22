import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  
 

  constructor(private router:Router){}

  sinUp(){
    this.router.navigateByUrl('/signUp')
  }

 

}
