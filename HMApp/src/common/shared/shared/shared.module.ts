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
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from 'src/common/common-component/contact/contact.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent,
    ContactComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule, 
    MatRadioModule,
    MatIconModule,
    // FontAwesomeModule
    HttpClientModule
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    LandingComponent,
    ContactComponent
  ]
})
export class SharedModule { }
