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
  productList: any;
  addedProduct: any;
  updatedProduct: any;
  deletedProductItem: any;

  constructor(private productService: ProductService){}

  getProductList(){
    this.productService.getProducts().subscribe((product:any) =>{
      this.productList = product;
    })
  }

  addProductList(){
    const product = {};
    this.productService.addNewProduct(product).subscribe((product:any) =>{
      console.log("added product", product)
      this.addedProduct = product;
      this.getProductList();
    })
  }

  updateProductList(){
    const product = {};
    const id: number = 1;
    this.productService.updateProduct(id, product).subscribe((product:any) =>{
      console.log("updated product", product)
      this.updatedProduct = product;
      this.getProductList();
    })
  }

  deleteProductList(){
    const id: number = 1;
    this.productService.deleteProduct(id).subscribe((product:any) =>{
      console.log("deleted product", product)
      this.deletedProductItem = product;
      this.getProductList();
    })
  }
 

}
