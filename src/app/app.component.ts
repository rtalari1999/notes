import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
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
  id:any;
  addItem: any = {pName:"",pPrice: 0,pDescription: "",pFeatures: {}}

  constructor(private productService: ProductService){}

  getProductList(){
    this.productService.getProducts().subscribe((product:any) =>{
      this.productList = product;
    })
  }

  addProductList(){
    const product = this.addItem;
    this.productService.addNewProduct(product).subscribe((product:any) =>{
      console.log("added product", product)
      this.addedProduct = product;
      this.getProductList();
    })
  }

  updateProductList(){
    const product = this.addItem;
    const id = this.id;
    this.productService.updateProduct(id, product).subscribe((product:any) =>{
      console.log("updated product", product)
      this.updatedProduct = product;
      this.getProductList();
    })
  }

  deleteProductList(id:any){
    this.productService.deleteProduct(id).subscribe((product:any) =>{
      console.log("deleted product", product)
      this.deletedProductItem = product;
      this.getProductList();
    })
  }

  editItem(item:any, id:any){
    this.addItem = item;
    this.id = id;
  }
 

}
