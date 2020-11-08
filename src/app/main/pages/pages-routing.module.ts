import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { PageNotFoundComponent } from './pages';
// import { PagesComponent } from '@app/pages/pages.component';
// import { MetaGuard } from '@ngx-meta/core';
// import { AuthGuard } from '@app/services';
// import { AddressAutocompleteComponent } from '@app/modules/address-autocomplete/address-autocomplete.component';
 import {PagesComponent } from '../pages/pages.component'


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
 // { path: '**', component: PageNotFoundComponent },
  { path: '', component: PagesComponent,
    children:[
      {path: '', redirectTo: 'pages', pathMatch: 'full'},
      {path: 'sport', redirectTo: 'sport', pathMatch: 'full'},
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
    ]},
];


// const appRoutes: Routes = [
//     {   
//         path         : '' , 
//         loadChildren : './main/pages/pages.module#AuthenticationModule'},
//     {   
//         path         : 'pages' , 
//         loadChildren : './main/pages/pages.module#PagesModule'},
        
//     {
//         path         : '**',
//         redirectTo   : 'apps/dashboards/analytics'},
//     {   
//         path        : 'sample',
//         loadChildren  : './main/sample/sample.module#SampleModule'
//     }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
