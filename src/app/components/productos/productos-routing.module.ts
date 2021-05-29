import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductosComponent } from './productos.component';
import { ProductDetailComponent} from '../product-detail/product-detail.component';

const routes : Routes = [
  {
    path:'',
    component: ProductosComponent
  },
  {
    path:':id',
    component: ProductDetailComponent
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
export class ProductosRoutingModule{}
