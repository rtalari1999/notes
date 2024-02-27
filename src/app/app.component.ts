import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent implements OnDestroy{
  title = 'Angular';
  titles=['Angular', 'Java', 'Python', 'C'];
  productList: any;
  addedProduct: any;
  updatedProduct: any;
  deletedProductItem: any;
  addNewProductSub! : Subscription;
  interval!: Subscription;
  id:any;

  childComponent:boolean = false;
  
  addItem: any = {pName:"",pPrice: 0,pDescription: "",pFeatures: {}}

  constructor(private productService: ProductService){}

  getProductList(){

    console.log(interval(1000))
    this.productService.getProducts().subscribe((product:any) =>{
      this.productList = product;
    })
  }

  addProductList(){
    const product = this.addItem;
   this.addNewProductSub= this.productService.addNewProduct(product).subscribe((product:any) =>{
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

  callChildComp(){
    if(this.childComponent){
      this.childComponent = false;
    }else{
      this.childComponent = true;
    }
  }

  addTitle(){
    var newTitle = 'C++';
    //var newArr = ['Angular', 'Java', 'Python', 'C'];
    //this.titles = [...this.titles, newTitle]
    this.titles.push(newTitle);
    console.log('_____updated array', this.titles)
  }

  ngOnDestroy(): void {

    this.addNewProductSub.unsubscribe();
    //this.interval.unsubscribe();
    
  }


  /**
   * ng do check is called if any change has done inside parent
   * ng on change will call only when complete structure and value is changed;
   */

 

}
