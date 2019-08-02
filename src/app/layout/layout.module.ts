import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Global } from '../shared/global';
import { FaqComponent } from './faq/faq.component';
//import { ContactComponent } from './contact/contact.component';


@NgModule({
  
  imports: [
    CommonModule,
    NgbDropdownModule,LayoutRoutingModule
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent, FaqComponent],providers:[Global]
})
export class LayoutModule { }
