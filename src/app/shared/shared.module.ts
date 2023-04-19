import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LetsWorkComponent } from './lets-work/lets-work.component';
import { FormContactComponent } from './form-contact/form-contact.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LetsWorkComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    LetsWorkComponent,
    FormContactComponent
  ]
})
export class SharedModule { }
