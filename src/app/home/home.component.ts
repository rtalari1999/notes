import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,HttpClientModule],
  providers:[ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products: any ;
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
   this.productService.getProductList().subscribe((item)=>{
      console.log('_____Products', item)
      this.products = item;
    })
  }

  filterProduct(item:any){
    this.router.navigate(['landing-page/filter', item.pName, item.brand])

  }

}
