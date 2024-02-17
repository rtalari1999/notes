import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    endPoint = "http://localhost:3000/product";
    constructor(private http: HttpClient){}
    getProducts() {
        
       return this.http.get(this.endPoint);
    }

    addProductList(){
        let params = new HttpParams()
        .set('para1', "value1")
        .set('para2','value2');
        let product = {"name":"Demo5", "mobile":9900887766}
        let header = {'content-type' : 'application/json'}
        return this.http.post(this.endPoint,product,{headers:header, params:params});
    }
    putProductList(id:number){
        let product = {"name":"Raju"}
        console.log(this.endPoint + '/'+ id)
        return this.http.put(this.endPoint + '/'+ id,product);
    }
    deleteProductList(id:number){
        let product = {"name":"Raju"}
        console.log(this.endPoint + '/'+ id)
        return this.http.delete(this.endPoint + '/'+ '982e');
    }
}