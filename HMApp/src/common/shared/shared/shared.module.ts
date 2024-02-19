import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from 'src/common/common-component/signin/signin.component';
import { SignupComponent } from 'src/common/common-component/signup/signup.component';
import { LandingComponent } from 'src/common/common-component/landing/landing.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent
  ],
  
  imports: [
    CommonModule
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    LandingComponent
  ]
})
export class SharedModule { }
