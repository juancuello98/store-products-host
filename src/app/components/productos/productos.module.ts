import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule} from '../../shared/shared.module';
import { ProductosRoutingModule } from './productos-routing.module'
import { ProductosComponent} from './productos.component';
import { MaterialModule } from '../../material/material.module';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductComponent } from "../product/product.component";

@NgModule({
  declarations:[
    ProductComponent,
    ProductosComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductosRoutingModule,
    MaterialModule
  ]
})
export class ProductosModule{

}
