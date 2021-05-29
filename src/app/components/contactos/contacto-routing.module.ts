import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { ContactosComponent } from './components/contactos.component';

const routes : Routes = [
  {
    path:'contacto',
    component: ContactosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ContactosRoutingModule{}
