import { Component, OnInit } from '@angular/core';
import { Product} from '../../models/product.model';
import { ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos : Product [] = [];

  constructor( private productsService : ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id : number){
    console.log('Producto');
    console.log(id);
  }

  fetchProducts(){
    this.productsService.getAllProducts().
    subscribe(products => {
      this.productos = products;
    });
  }
}
