import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  target_url = "http://localhost:3000/ProductList";

  constructor(private http : HttpClient) { }

  getProducts(): Observable<any>{
    const request = this.http.get(this.target_url);
    return request;
  }

  addNewProduct(product:any) : Observable<any>{
    const request = this.http.post(this.target_url, product);
    return request;
  }

  updateProduct(id:any, product:any) : Observable<any>{
    const request = this.http.put(this.target_url + "/" + id, product);
    return request;
  }

  deleteProduct(id:number): Observable<any>{
    const request = this.http.delete(this.target_url + "/" + id);
    return request;
  }
}
