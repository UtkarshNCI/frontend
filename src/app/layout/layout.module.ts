import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,TranslateModule,
    NgbDropdownModule,LayoutRoutingModule
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule { }
