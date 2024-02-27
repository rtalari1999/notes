import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { Subscription, interval } from 'rxjs';
import { CommonModule } from '@angular/common';

interface IAppComponent{
  ngOninit():any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet, HttpClientModule, FormsModule, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent implements  OnInit, OnDestroy{
  title = 'notes';
  productList: any;
  addedProduct: any;
  updatedProduct: any;
  deletedProductItem: any;
  getProductUnsubscribe!:Subscription;
  interval!: Subscription;
  id:any;
  addItem: any = {pName:"",pPrice: 0,pDescription: "",pFeatures: {}};
  

  constructor(private productService: ProductService){
    console.log('Constructor is called');
    
  }
 
  ngOnInit(): void {
    console.log('ngOnInit is called');  
    //this.getProductList();

  }
  ngOnDestroy(): void {
    this.getProductUnsubscribe.unsubscribe();
    console.log('ngondestroy', this.productList)
    
  }
  getProductList(){
   this.interval = interval(1000).subscribe({next:(product:any) =>{
      console.log(product)
    },error:(error)=>{
      console.log('error')
    },complete:()=>{

    },})
   this.getProductUnsubscribe = this.productService.getProducts().subscribe({next:(product:any) =>{
      this.productList = product;
    },error:(error)=>{
      console.log('error')
    },complete:()=>{

    },})
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
