import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent implements OnInit{
  title = 'notes';
  productList: any;
  addedProduct: any;
  updatedProduct: any;
  deletedProductItem: any;
  id:any;
  addItem: any = {pName:"",pPrice: 0,pDescription: "",pFeatures: {}};
  outPutValue: string = '';
  child:boolean = false;

  constructor(private productService: ProductService){
    this.getProductList()
    console.log(' parent component is called constructor')
  }
  ngOnInit(): void {
    console.log(' parent component is called oninit')
  }

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
  submitbtn(value: string){
    console.log('any', value)
    this.outPutValue = value;
  }

  childComponent(){
    if(this.child){
      this.child = false;
    } else{
      this.child = true;
    }

  }
 

}
