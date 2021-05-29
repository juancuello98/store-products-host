import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Product} from '../../models/product.model'

@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html',
    styleUrls: ['./product.component.scss']
  })


export class ProductComponent{

  @Input()  producto : Product = <any>{};
  @Output() productClicked : EventEmitter<any> = new EventEmitter();

  today = new Date();

  AddCart(){
    this.productClicked.emit(this.producto.id)
    console.log('Añadir al carrito')
  }

}
