import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent {
  title = 'notes';
  productService: any;
  productsList:any;

  constructor(private product: ProductService){

  }

  getproductList(){
     this.product.getProducts().subscribe((x:any) => {
      console.log(x)
      this.productsList = x
      console.log('product list ', this.productsList)

    });
  }

  addProduct(){
    this.product.addProductList().subscribe((x:any) =>{
      this.getproductList();
      console.log('Post product list ', x)

    })
  }

  putProductList(){
    this.product.putProductList(1).subscribe((x:any) =>{
      console.log(x);
    })
  }
  deleteProductList(){
    this.product.deleteProductList(5).subscribe((x:any)=>{
      console.log(x);
    })
  }
}
