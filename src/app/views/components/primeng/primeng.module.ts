import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengComponent } from './primeng.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [PrimengComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class PrimengModule { }
