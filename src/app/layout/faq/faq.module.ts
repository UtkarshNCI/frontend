import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FaqRoutingModule} from './faq-routing.module';
import {FaqComponent} from './faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,FaqRoutingModule,NgbModule
  ]
})
export class FaqModule { }
