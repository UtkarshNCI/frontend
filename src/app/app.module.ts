import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavbarComponent } from './index/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import { AdminComponent } from './admin/admin.component';
 //import { FlexLayoutModule } from '@angular/flex-layout';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './index/login/login.component';
// import { SignupComponent } from './index/signup/signup.component';
// import { PageheaderComponent } from './pageheader/pageheader.component';
// import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,AdminComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
