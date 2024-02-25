import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/common/common-component/contact/contact.component';
import { LandingComponent } from 'src/common/common-component/landing/landing.component';
import { SigninComponent } from 'src/common/common-component/signin/signin.component';
import { SignupComponent } from 'src/common/common-component/signup/signup.component';

const routes: Routes = [
  { path : "", component : LandingComponent },
  { path : 'landing', component : LandingComponent},
  { path : 'signIn', component : SigninComponent},
  { path : 'signUp', component : SignupComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'owner', loadChildren:()=>import('./owner/owner.module').then(o=>o.OwnerModule)},
  { path : 'admin', loadChildren:()=>import('./admin/admin.module').then(a=>a.AdminModule)},
  { path : 'user', loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
