import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './views/shared/navbar/navbar.module';
import { SidebarModule } from './views/shared/sidebar/sidebar.module';
import { AdminViewModule } from './views/admin-view/admin-view.module';
import { PrimengModule } from './views/components/primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    SidebarModule,
    AdminViewModule,
    PrimengModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
