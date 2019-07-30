import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AdminComponent} from './admin/admin.component';
// import {NavbarComponent} from './index/navbar/navbar.component';
// import { HomeComponent } from './home/home.component';
// import {LoginComponent} from './index/login/login.component';
// import {SignupComponent} from './index/signup/signup.component';


// const routes: Routes = [{path:"admin",component:AdminComponent},{path:"",component:HomeComponent},{path:"login",component:LoginComponent},
// {path:"signup",component:SignupComponent},{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),  }];



const routes: Routes = [{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),  },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }