import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private productsService : ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event:Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id:['',[Validators.required]],
      title:['',[Validators.required]],
      price:[0,[Validators.required]],
      image:[''],
      description:['',[Validators.required]],
    });
  }
}
