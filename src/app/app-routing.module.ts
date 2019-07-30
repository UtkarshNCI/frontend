import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {NavbarComponent} from './index/navbar/navbar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:"admin",component:AdminComponent},{path:"",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
