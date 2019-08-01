import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  
  imports: [
    CommonModule,
    NgbDropdownModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
