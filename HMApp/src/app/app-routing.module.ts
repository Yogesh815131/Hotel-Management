import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/common/common-component/landing/landing.component';

const routes: Routes = [
  { path : "", component : LandingComponent },
  { path : 'owner', loadChildren:()=>import('./owner/owner.module').then(o=>o.OwnerModule)},
  { path : 'admin', loadChildren:()=>import('./admin/admin.module').then(a=>a.AdminModule)},
  { path : 'user', loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
