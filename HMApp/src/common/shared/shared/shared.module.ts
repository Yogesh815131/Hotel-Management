import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from 'src/common/common-component/signin/signin.component';
import { SignupComponent } from 'src/common/common-component/signup/signup.component';
import { LandingComponent } from 'src/common/common-component/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule, 
    MatRadioModule,
    MatIconModule,
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    LandingComponent
  ]
})
export class SharedModule { }
