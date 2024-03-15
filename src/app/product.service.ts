import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }
  getProductList(): Observable<Product>{
      return this.http.get<Product>('http://localhost:3000/productList');
  }
}
