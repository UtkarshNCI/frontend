import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
             { path: 'custompc', loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule) },
        //     { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
        //     { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
        //     { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
        //     { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
  //     { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) }
            { path: 'prebuildpc', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'accessories', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
            { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) }
         ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
