import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { SharedModule } from 'src/common/shared/shared/shared.module';


@NgModule({
  declarations: [
    AdminLandingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
