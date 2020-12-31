import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {PagesComponent } from '../pages/pages.component'


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
 // { path: '**', component: PageNotFoundComponent },
  { path: '', component: PagesComponent,
    children:[
      {path: '', redirectTo: 'pages', pathMatch: 'full'},
      {path: 'sport', redirectTo: 'sport', pathMatch: 'full'},
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
      { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
      { path: 'academy', loadChildren: () => import('./academy/academy.module').then(m => m.AcademyModule)},
    ]},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
