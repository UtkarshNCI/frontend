import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactRoutingModule} from './contact-routing';
import {ContactComponent} from '../contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,ContactRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class ContactModule { }
