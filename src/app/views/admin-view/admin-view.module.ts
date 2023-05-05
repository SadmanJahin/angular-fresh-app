import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminViewRoutingModule } from './admin-view-routing.module';
import { AdminViewComponent } from './admin-view.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';


@NgModule({
  declarations: [
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    AdminViewRoutingModule,
    NavbarModule,
    SidebarModule,
  ]
})
export class AdminViewModule { }
