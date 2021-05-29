import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';

const routes : Routes = [
  {
    path:'productos',
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
export class ProductDetailRoutingModule{}
