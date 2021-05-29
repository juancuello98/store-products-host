import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.api_url}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.api_url}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.api_url}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.api_url}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.api_url}/products/${id}`);
  }
}
