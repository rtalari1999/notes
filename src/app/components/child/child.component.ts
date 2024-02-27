import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../../product.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [ProductService]
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck{
  @Input() studentArr:any; // if you see any component properties with @Input Then you have to understand that component property is getting data from another component

  @Input() mList:any;
   empDetails = [{eName:'Child Component', eId:12345,eDpt:"Testing"}];
   counter: number = 0;
   @Output() employeeDetails = new EventEmitter<any>;
   productList: any;
   subs:Subscription = new Subscription();
   getProductUnsubscribe!:Subscription;
  interval!: Subscription;
  constructor(private productService: ProductService){
    console.log('child constructor');
    //this.getProductList();
    
  }
  
  ngOnInit(): void {
    //this.getProductList();
    
  }
  sendDatatoParent(){
    this.employeeDetails.emit(this.empDetails);
  }

  getsetTimeOut(){
    // setTimeout(()=>{
    //   this.subs = this.productService.getProducts().subscribe((product:any) =>{
    //     console.log('_____________product2',  product)
    //   });
    // },10000);
  }


  getProductList(){
    this.interval = interval(1000).subscribe({next:(product:any) =>{
      console.log(product)
    },error:(error)=>{
      console.log('error')
    },complete:()=>{
      console.log('complete interval')

    },})
   this.getProductUnsubscribe = this.productService.getProducts().subscribe({next:(product:any) =>{
      this.productList = product;
    },error:(error)=>{
      console.log('error')
    },complete:()=>{
      console.log('complete http')

    },}) 
}



ngOnDestroy(): void {
  this.getProductUnsubscribe.unsubscribe();
  this.interval.unsubscribe();
}


ngOnChanges(changes: SimpleChanges): void {
  console.log('_________ngoncjanges', changes)
  
}

ngDoCheck(): void {
  console.log('child do check is called');
}


}

