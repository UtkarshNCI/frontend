import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,FlexLayoutModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {

}
