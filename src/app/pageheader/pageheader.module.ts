import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageheaderComponent } from './pageheader.component';

@NgModule({
  declarations: [PageheaderComponent],
  imports: [CommonModule,RouterModule],
  exports: [PageheaderComponent]
})
export class PageheaderModule { }
